jest.mock('next/server', () => {
  const createHeaders = (location?: string) => ({
    get: (name: string) => {
      if (name.toLowerCase() === 'location') {
        return location ?? null
      }
      return null
    },
  })

  return {
    NextResponse: {
      redirect: (url: URL) =>
        ({
          status: 307,
          headers: createHeaders(url.toString()),
        }) as unknown,
      next: () =>
        ({
          status: 200,
          headers: createHeaders(),
        }) as unknown,
    },
  }
})

import proxy from './proxy'

function createRequest(pathname: string, jwt?: string) {
  const cookies = new Map<string, string>()
  if (jwt) {
    cookies.set('sbe_jwt', jwt)
  }

  const request = {
    nextUrl: { pathname },
    url: `http://localhost:3000${pathname}`,
    cookies: {
      get: (name: string) => {
        const value = cookies.get(name)
        return value ? { name, value } : undefined
      },
    },
  } as unknown

  return request
}

describe('proxy route protection', () => {
  it('redireciona /minha-biblioteca para / quando não há JWT', () => {
    const request = createRequest('/minha-biblioteca')
    const response = proxy(request)

    expect(response.status).toBe(307)
    expect(response.headers.get('location')).toBe('http://localhost:3000/')
  })

  it('permite acesso a /minha-biblioteca quando há JWT', () => {
    const request = createRequest('/minha-biblioteca', 'token-valido')
    const response = proxy(request)

    // NextResponse.next() não define header location
    expect(response.headers.get('location')).toBeNull()
  })

  it('redireciona / para /minha-biblioteca quando já há JWT', () => {
    const request = createRequest('/', 'token-existente')
    const response = proxy(request)

    expect(response.status).toBe(307)
    expect(response.headers.get('location')).toBe(
      'http://localhost:3000/minha-biblioteca',
    )
  })
})

