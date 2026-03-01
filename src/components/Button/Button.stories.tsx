import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Conteúdo do botão',
    },
    disabled: {
      control: 'boolean',
      description: 'Estado desabilitado',
    },
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Começar',
  },
}

export const Disabled: Story = {
  args: {
    children: 'Desabilitado',
    disabled: true,
  },
}
