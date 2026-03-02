import type { Meta, StoryObj } from '@storybook/react'
import { SignUp } from './SignUp'

const meta: Meta<typeof SignUp> = {
  title: 'Components/Auth/SignUp',
  component: SignUp,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text', description: 'Título do formulário' },
    submitLabel: { control: 'text', description: 'Texto do botão' },
    loginLabel: { control: 'text', description: 'Texto do link para login' },
    loginHref: { control: 'text', description: 'URL do link de login' },
    loading: { control: 'boolean', description: 'Estado de carregamento' },
  },
}

export default meta

type Story = StoryObj<typeof SignUp>

export const Default: Story = {
  args: {},
}

export const WithSubmit: Story = {
  args: {
    onSubmit: (name, email, password) => {
      console.log('SignUp', { name, email, password })
    },
  },
}

export const Loading: Story = {
  args: {
    loading: true,
  },
}
