import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Header } from '@/components/Header'

describe('Header', () => {
  it('renders as banner with search and profile', () => {
    render(<Header />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('searchbox', { name: /buscar/i })).toBeInTheDocument()
    expect(
      screen.getByRole('region', { name: /área do perfil/i })
    ).toBeInTheDocument()
  })

  it('uses custom search placeholder when provided', () => {
    render(
      <Header searchProps={{ placeholder: 'Pesquisar por autor...' }} />
    )
    expect(
      screen.getByPlaceholderText('Pesquisar por autor...')
    ).toBeInTheDocument()
  })

  it('renders custom searchSlot when provided', () => {
    render(<Header searchSlot={<span data-testid="custom-search">Busca</span>} />)
    expect(screen.getByTestId('custom-search')).toHaveTextContent('Busca')
    expect(screen.queryByRole('searchbox')).not.toBeInTheDocument()
  })

  it('renders custom profileSlot when provided', () => {
    render(
      <Header profileSlot={<span data-testid="custom-profile">Perfil</span>} />
    )
    expect(screen.getByTestId('custom-profile')).toHaveTextContent('Perfil')
    expect(
      screen.queryByRole('region', { name: /área do perfil/i })
    ).not.toBeInTheDocument()
  })
})
