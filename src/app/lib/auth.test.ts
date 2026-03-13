import { clearJwtToken, getJwtToken, setJwtToken } from './auth'

describe('auth cookie helpers', () => {
  beforeEach(() => {
    // Reset cookies before each test
    document.cookie = ''
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

