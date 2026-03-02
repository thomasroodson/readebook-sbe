import type { Meta, StoryObj } from '@storybook/react'
import { UpdatePassword } from './UpdatePassword'

const meta: Meta<typeof UpdatePassword> = {
  title: 'Components/Auth/UpdatePassword',
  component: UpdatePassword,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text', description: 'Título do formulário' },
    submitLabel: { control: 'text', description: 'Texto do botão' },
    backToLoginLabel: { control: 'text', description: 'Texto do link voltar' },
    backToLoginHref: { control: 'text', description: 'URL do link voltar' },
    loading: { control: 'boolean', description: 'Estado de carregamento' },
  },
}

export default meta

type Story = StoryObj<typeof UpdatePassword>

export const Default: Story = {
  args: {},
}

export const WithSubmit: Story = {
  args: {
    onSubmit: (currentPassword, newPassword) => {
      console.log('UpdatePassword', { currentPassword, newPassword })
    },
  },
}

export const Loading: Story = {
  args: {
    loading: true,
  },
}
