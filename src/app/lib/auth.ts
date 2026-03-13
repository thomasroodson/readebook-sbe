'use client'

const JWT_COOKIE_NAME = 'sbe_jwt'

type CookieOptions = {
  days?: number
}

function setCookie(name: string, value: string, options: CookieOptions = {}) {
  if (typeof document === 'undefined') return

  const { days = 7 } = options
  const expires = new Date()
  expires.setDate(expires.getDate() + days)

  const encodedValue = encodeURIComponent(value)

  document.cookie = [
    `${name}=${encodedValue}`,
    `expires=${expires.toUTCString()}`,
    'path=/',
    'SameSite=Lax',
    process.env.NODE_ENV === 'production' ? 'Secure' : '',
  ]
    .filter(Boolean)
    .join('; ')
}

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null

  const cookies = document.cookie ? document.cookie.split('; ') : []

  for (const cookie of cookies) {
    const [cookieName, ...rest] = cookie.split('=')
    if (cookieName === name) {
      return decodeURIComponent(rest.join('='))
    }
  }

  return null
}

function deleteCookie(name: string) {
  if (typeof document === 'undefined') return

  document.cookie = [
    `${name}=`,
    'expires=Thu, 01 Jan 1970 00:00:00 GMT',
    'path=/',
    'SameSite=Lax',
    process.env.NODE_ENV === 'production' ? 'Secure' : '',
  ]
    .filter(Boolean)
    .join('; ')
}

export function setJwtToken(token: string) {
  setCookie(JWT_COOKIE_NAME, token, { days: 7 })
}

export function getJwtToken(): string | null {
  return getCookie(JWT_COOKIE_NAME)
}

export function clearJwtToken() {
  deleteCookie(JWT_COOKIE_NAME)
}

