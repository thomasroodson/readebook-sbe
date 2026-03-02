import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Profile } from './Profile'

describe('Profile', () => {
  it('renders profile area', () => {
    render(<Profile />)
    expect(
      screen.getByRole('region', { name: /área do perfil/i })
    ).toBeInTheDocument()
  })

  it('renders avatar button', () => {
    render(<Profile avatarAlt="Meu perfil" />)
    expect(
      screen.getByRole('button', { name: /meu perfil/i })
    ).toBeInTheDocument()
  })

  it('renders avatar image when avatarSrc is provided', () => {
    render(
      <Profile avatarSrc="https://example.com/avatar.png" avatarAlt="Avatar" />
    )
    const img = screen.getByRole('img', { name: /avatar/i })
    expect(img).toHaveAttribute('src', 'https://example.com/avatar.png')
  })

  it('opens submenu with logout when avatar is clicked', async () => {
    const user = userEvent.setup()
    render(<Profile logoutLabel="Sair" />)
    await user.click(screen.getByRole('button', { name: /perfil do usuário/i }))
    expect(screen.getByRole('menu', { name: /menu do perfil/i })).toBeInTheDocument()
    expect(screen.getByRole('menuitem', { name: /sair/i })).toBeInTheDocument()
  })

  it('calls onLogout when logout item is clicked', async () => {
    const user = userEvent.setup()
    const onLogout = jest.fn()
    render(<Profile logoutLabel="Sair" onLogout={onLogout} />)
    await user.click(screen.getByRole('button', { name: /perfil do usuário/i }))
    await user.click(screen.getByRole('menuitem', { name: /sair/i }))
    expect(onLogout).toHaveBeenCalledTimes(1)
  })
})
