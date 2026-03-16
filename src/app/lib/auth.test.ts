import { renderHook, act } from '@testing-library/react'
import { clearJwtToken, getJwtToken, setJwtToken, useLogout } from './auth'

const mockReplace = jest.fn()
jest.mock('next/navigation', () => ({
  useRouter: () => ({ replace: mockReplace }),
}))

describe('auth cookie helpers', () => {
  beforeEach(() => {
    document.cookie = ''
    mockReplace.mockClear()
  })

  it('deve salvar e ler o JWT do cookie', () => {
    expect(getJwtToken()).toBeNull()

    setJwtToken('meu-token-de-teste')

    const stored = getJwtToken()
    expect(stored).toBe('meu-token-de-teste')
  })

  it('deve limpar o JWT do cookie', () => {
    setJwtToken('token-para-remover')
    expect(getJwtToken()).toBe('token-para-remover')

    clearJwtToken()

    const stored = getJwtToken()
    expect(stored).toBeNull()
  })
})

describe('useLogout', () => {
  beforeEach(() => {
    document.cookie = ''
    mockReplace.mockClear()
  })

  it('retorna função que limpa o cookie e redireciona para /', () => {
    setJwtToken('token-antes-do-logout')
    const { result } = renderHook(() => useLogout())

    act(() => {
      result.current()
    })

    expect(getJwtToken()).toBeNull()
    expect(mockReplace).toHaveBeenCalledWith('/')
  })
})

