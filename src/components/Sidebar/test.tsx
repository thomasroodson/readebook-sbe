import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'

const defaultItems = [
  { label: 'Discover', href: '/', isActive: true },
  { label: 'Category', href: '/category' },
  { label: 'My Library', href: '/library' },
]

describe('Sidebar', () => {
  it('renders logo when passed', () => {
    render(
      <Sidebar
        logo={<span data-testid="logo">BookBase</span>}
        items={defaultItems}
      />
    )
    expect(screen.getByTestId('logo')).toBeInTheDocument()
    expect(screen.getByText('BookBase')).toBeInTheDocument()
  })

  it('renders all items with correct labels', () => {
    render(<Sidebar items={defaultItems} />)
    expect(screen.getByRole('link', { name: /discover/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /category/i })).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /my library/i })
    ).toBeInTheDocument()
  })

  it('renders bottomItems when provided', () => {
    render(
      <Sidebar
        items={defaultItems}
        bottomItems={[
          { label: 'Settings', href: '/settings' },
          { label: 'Logout' },
        ]}
      />
    )
    expect(screen.getByRole('link', { name: /settings/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /logout/i })).toBeInTheDocument()
  })

  it('renders item with href as link', () => {
    render(<Sidebar items={[{ label: 'Discover', href: '/discover' }]} />)
    const link = screen.getByRole('link', { name: /discover/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/discover')
  })

  it('renders item without href as button', () => {
    render(<Sidebar items={[{ label: 'Logout' }]} />)
    const button = screen.getByRole('button', { name: /logout/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('type', 'button')
  })

  it('has accessible nav with aria-label', () => {
    render(<Sidebar items={defaultItems} />)
    expect(
      screen.getByRole('navigation', { name: 'Navegação principal' })
    ).toBeInTheDocument()
  })
})
