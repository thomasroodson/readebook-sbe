import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { BookCard } from './BookCard'

const defaultProps = {
  title: 'Clean Code',
  author: 'Robert C. Martin',
  coverImage: { src: 'https://example.com/cover.jpg', alt: 'Capa' },
}

describe('BookCard', () => {
  it('renders title and author', () => {
    render(<BookCard {...defaultProps} />)
    expect(screen.getByText('Clean Code')).toBeInTheDocument()
    expect(screen.getByText('Robert C. Martin')).toBeInTheDocument()
  })

  it('renders cover image with correct src and alt', () => {
    render(<BookCard {...defaultProps} />)
    const img = screen.getByRole('img', { name: 'Capa' })
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', 'https://example.com/cover.jpg')
  })

  it('uses title as alt when coverImage.alt is not provided', () => {
    render(
      <BookCard
        {...defaultProps}
        coverImage={{ src: 'https://example.com/cover.jpg' }}
      />
    )
    expect(screen.getByRole('img', { name: 'Clean Code' })).toBeInTheDocument()
  })

  it('renders as link when href is provided', () => {
    render(<BookCard {...defaultProps} href="/book/1" />)
    const link = screen.getByRole('link', { name: /clean code/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/book/1')
  })

  it('renders as div when href is not provided', () => {
    render(<BookCard {...defaultProps} />)
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
    expect(screen.getByText('Clean Code').closest('div')).toBeInTheDocument()
  })

  it('does not render progress bar when progress is not provided', () => {
    render(<BookCard {...defaultProps} />)
    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument()
  })

  it('renders progress bar with correct accessibility when progress is provided', () => {
    render(<BookCard {...defaultProps} progress={65} />)
    const progressbar = screen.getByRole('progressbar', {
      name: /progresso de leitura: 65%/i,
    })
    expect(progressbar).toBeInTheDocument()
    expect(progressbar).toHaveAttribute('aria-valuenow', '65')
    expect(progressbar).toHaveAttribute('aria-valuemin', '0')
    expect(progressbar).toHaveAttribute('aria-valuemax', '100')
  })
})
