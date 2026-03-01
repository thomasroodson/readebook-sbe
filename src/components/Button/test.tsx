import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Começar</Button>)
    expect(screen.getByRole('button', { name: /começar/i })).toBeInTheDocument()
  })

  it('calls onClick when clicked', async () => {
    const user = userEvent.setup()
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Clique</Button>)
    await user.click(screen.getByRole('button', { name: /clique/i }))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
