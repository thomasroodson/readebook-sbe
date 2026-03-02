import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Aside } from './Aside'

describe('Aside', () => {
  it('renders title and CTA', () => {
    render(
      <Aside title="Featured" ctaLabel="Ler agora" onCtaClick={() => {}} />
    )
    expect(screen.getByRole('complementary')).toBeInTheDocument()
    expect(screen.getByText('Featured')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /ler agora/i })).toBeInTheDocument()
  })

  it('renders CTA as link when ctaHref is provided', () => {
    render(
      <Aside title="Book" ctaLabel="Ver" ctaHref="/book/1" />
    )
    const link = screen.getByRole('link', { name: /ver/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/book/1')
  })

  it('renders CTA as button and calls onCtaClick when clicked', async () => {
    const user = userEvent.setup()
    const onCtaClick = jest.fn()
    render(
      <Aside title="Book" ctaLabel="Ler" onCtaClick={onCtaClick} />
    )
    await user.click(screen.getByRole('button', { name: /ler/i }))
    expect(onCtaClick).toHaveBeenCalledTimes(1)
  })

  it('renders cover image when coverImage is provided', () => {
    render(
      <Aside
        title="Book"
        ctaLabel="Ler"
        onCtaClick={() => {}}
        coverImage={{ src: 'https://example.com/cover.jpg', alt: 'Capa' }}
      />
    )
    const img = screen.getByRole('img', { name: /capa/i })
    expect(img).toHaveAttribute('src', 'https://example.com/cover.jpg')
  })

  it('renders only children when children is provided', () => {
    render(
      <Aside title="Ignored" ctaLabel="Ignored" onCtaClick={() => {}}>
        <span data-testid="custom">Conteúdo customizado</span>
      </Aside>
    )
    expect(screen.getByTestId('custom')).toHaveTextContent('Conteúdo customizado')
    expect(screen.queryByText('Ignored')).not.toBeInTheDocument()
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })
})
