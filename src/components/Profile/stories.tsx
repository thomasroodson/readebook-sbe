import type { Meta, StoryObj } from '@storybook/react'
import { Profile } from '@/components/Profile'

const meta: Meta<typeof Profile> = {
  title: 'Components/Profile',
  component: Profile,
  tags: ['autodocs'],
  argTypes: {
    avatarSrc: {
      control: 'text',
      description: 'URL da imagem do avatar',
    },
    avatarAlt: {
      control: 'text',
      description: 'Texto alternativo do avatar',
    },
    logoutLabel: {
      control: 'text',
      description: 'Rótulo do item de logout no submenu',
    },
    onLogout: {
      action: 'onLogout',
      description: 'Callback ao clicar em Logout',
    },
  },
}

export default meta

type Story = StoryObj<typeof Profile>

export const Default: Story = {
  args: {
    avatarAlt: 'Perfil do usuário',
  },
}

export const WithAvatar: Story = {
  args: {
    avatarSrc: 'https://api.dicebear.com/7.x/avataaars/svg?seed=user',
    avatarAlt: 'Avatar do usuário',
  },
}

export const WithLogout: Story = {
  args: {
    logoutLabel: 'Sair',
    onLogout: () => {},
  },
}
