import type { Meta, StoryObj } from '@storybook/react'
import { Search } from './Search'

const meta: Meta<typeof Search> = {
  title: 'Components/Search',
  component: Search,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Texto do placeholder',
    },
    value: {
      control: 'text',
      description: 'Valor controlado do input',
    },
  },
}

export default meta

type Story = StoryObj<typeof Search>

export const Default: Story = {
  args: {
    placeholder: 'Buscar livros...',
  },
}

export const WithValue: Story = {
  args: {
    placeholder: 'Buscar livros...',
    value: 'Design',
  },
}
