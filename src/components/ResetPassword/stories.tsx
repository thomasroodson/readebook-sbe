import type { Meta, StoryObj } from '@storybook/react'
import { ResetPassword } from './ResetPassword'

const meta: Meta<typeof ResetPassword> = {
  title: 'Components/Auth/ResetPassword',
  component: ResetPassword,
  tags: ['autodocs'],
  argTypes: {
    token: { control: 'text', description: 'Token de redefinição (ex.: da URL)' },
    title: { control: 'text', description: 'Título do formulário' },
    subtitle: { control: 'text', description: 'Texto de instrução' },
    submitLabel: { control: 'text', description: 'Texto do botão' },
    backToLoginLabel: { control: 'text', description: 'Texto do link voltar' },
    backToLoginHref: { control: 'text', description: 'URL do link voltar' },
    successMessage: { control: 'text', description: 'Mensagem exibida após sucesso' },
    loading: { control: 'boolean', description: 'Estado de carregamento' },
  },
}

export default meta

type Story = StoryObj<typeof ResetPassword>

export const Default: Story = {
  args: {},
}

export const WithToken: Story = {
  args: {
    token: 'sample-reset-token-from-email',
  },
}

export const WithSubmit: Story = {
  args: {
    token: 'sample-token',
    onSubmit: (token, newPassword) => {
      console.log('ResetPassword', { token, newPassword })
    },
  },
}

export const Loading: Story = {
  args: {
    loading: true,
  },
}
