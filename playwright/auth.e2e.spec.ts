import { test, expect } from '@playwright/test'

test.describe('Autenticação e rota protegida', () => {
  test.beforeEach(async ({ context }) => {
    await context.clearCookies()
  })

  test('acesso sem JWT a /minha-biblioteca redireciona para /', async ({
    page,
  }) => {
    await page.goto('/minha-biblioteca')

    await page.waitForURL('**/')

    expect(page.url()).toMatch(/\/$/)
    await expect(page.getByText('Entrar')).toBeVisible()
  })

  test('login bem-sucedido redireciona para /minha-biblioteca e grava cookie', async ({
    page,
    context,
  }) => {
    await page.goto('/')

    await page.getByLabel('E-mail').fill('thomasroodson@gmail.com')
    await page.getByLabel('Senha').fill('123456')
    await page.getByRole('button', { name: 'Entrar' }).click()

    await page.waitForURL('**/minha-biblioteca')
    expect(page.url()).toMatch(/\/minha-biblioteca$/)

    const cookies = await context.cookies()
    const jwtCookie = cookies.find((cookie) => cookie.name === 'sbe_jwt')
    expect(jwtCookie).toBeDefined()
    expect(jwtCookie?.value).toBeTruthy()
  })
})

