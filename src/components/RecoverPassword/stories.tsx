import type { Meta, StoryObj } from '@storybook/react'
import { RecoverPassword } from './RecoverPassword'

const meta: Meta<typeof RecoverPassword> = {
  title: 'Components/Auth/RecoverPassword',
  component: RecoverPassword,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text', description: 'Título do formulário' },
    subtitle: { control: 'text', description: 'Texto de instrução' },
    submitLabel: { control: 'text', description: 'Texto do botão' },
    backToLoginLabel: { control: 'text', description: 'Texto do link voltar' },
    backToLoginHref: { control: 'text', description: 'URL do link voltar' },
    loading: { control: 'boolean', description: 'Estado de carregamento' },
  },
}

export default meta

type Story = StoryObj<typeof RecoverPassword>

export const Default: Story = {
  args: {},
}

export const WithSubmit: Story = {
  args: {
    onSubmit: (email) => {
      console.log('RecoverPassword', { email })
    },
  },
}

export const Loading: Story = {
  args: {
    loading: true,
  },
}
