import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Search } from './Search'

describe('Search', () => {
  it('renders with placeholder', () => {
    render(<Search placeholder="Buscar livros..." />)
    expect(
      screen.getByRole('searchbox', { name: /buscar/i })
    ).toHaveAttribute('placeholder', 'Buscar livros...')
  })

  it('calls onChange when typing', async () => {
    const user = userEvent.setup()
    const handleChange = jest.fn()
    render(<Search onChange={handleChange} />)
    await user.type(screen.getByRole('searchbox'), 'abc')
    expect(handleChange).toHaveBeenCalledTimes(3)
    expect(handleChange).toHaveBeenNthCalledWith(1, 'a')
    expect(handleChange).toHaveBeenNthCalledWith(2, 'ab')
    expect(handleChange).toHaveBeenNthCalledWith(3, 'abc')
  })

  it('calls onSearch on Enter', async () => {
    const user = userEvent.setup()
    const handleSearch = jest.fn()
    render(<Search onSearch={handleSearch} />)
    const input = screen.getByRole('searchbox')
    await user.type(input, 'design')
    await user.keyboard('{Enter}')
    expect(handleSearch).toHaveBeenCalledWith('design')
  })
})
