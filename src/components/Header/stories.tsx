import type { Meta, StoryObj } from '@storybook/react'
import { Header } from './Header'

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    searchProps: {
      description: 'Props repassadas para o Search',
    },
    profileProps: {
      description: 'Props repassadas para o Profile',
    },
  },
}

export default meta

type Story = StoryObj<typeof Header>

export const Default: Story = {
  args: {},
}

export const WithSearchPlaceholder: Story = {
  args: {
    searchProps: {
      placeholder: 'Buscar por título, autor...',
    },
  },
}

export const WithProfileAvatar: Story = {
  args: {
    profileProps: {
      avatarSrc: 'https://api.dicebear.com/7.x/avataaars/svg?seed=user',
      avatarAlt: 'Avatar do usuário',
    },
  },
}
