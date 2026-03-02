import type { Meta, StoryObj } from '@storybook/react'
import { Login } from './Login'

const meta: Meta<typeof Login> = {
  title: 'Components/Auth/Login',
  component: Login,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text', description: 'Título do formulário' },
    submitLabel: { control: 'text', description: 'Texto do botão de envio' },
    signUpLabel: { control: 'text', description: 'Texto do link para cadastro' },
    recoverPasswordLabel: { control: 'text', description: 'Texto do link recuperar senha' },
    signUpHref: { control: 'text', description: 'URL do link de cadastro' },
    recoverPasswordHref: { control: 'text', description: 'URL do link recuperar senha' },
    loading: { control: 'boolean', description: 'Estado de carregamento' },
  },
}

export default meta

type Story = StoryObj<typeof Login>

export const Default: Story = {
  args: {},
}

export const WithSubmit: Story = {
  args: {
    onSubmit: (email, password) => {
      console.log('Login', { email, password })
    },
  },
}

export const Loading: Story = {
  args: {
    loading: true,
  },
}
