import type { Meta, StoryObj } from '@storybook/react'
import { Sidebar } from './Sidebar'

const IconPlaceholder = ({ children }: { children: string }) => (
  <span aria-hidden style={{ width: '1.25rem', textAlign: 'center' }}>
    {children}
  </span>
)

const defaultItems = [
  {
    label: 'Discover',
    href: '/',
    isActive: true,
    icon: <IconPlaceholder>⌂</IconPlaceholder>,
  },
  {
    label: 'Category',
    href: '/category',
    icon: <IconPlaceholder>⊞</IconPlaceholder>,
  },
  {
    label: 'My Library',
    href: '/library',
    icon: <IconPlaceholder>📚</IconPlaceholder>,
  },
  {
    label: 'Download',
    href: '/download',
    icon: <IconPlaceholder>↓</IconPlaceholder>,
  },
  {
    label: 'Audio Books',
    href: '/audio',
    icon: <IconPlaceholder>🎧</IconPlaceholder>,
  },
  {
    label: 'Favourite',
    href: '/favourite',
    icon: <IconPlaceholder>♥</IconPlaceholder>,
  },
]

const defaultBottomItems = [
  {
    label: 'Settings',
    href: '/settings',
    icon: <IconPlaceholder>⚙</IconPlaceholder>,
  },
  {
    label: 'Support',
    href: '/support',
    icon: <IconPlaceholder>?</IconPlaceholder>,
  },
  { label: 'Logout', icon: <IconPlaceholder>⎋</IconPlaceholder> },
]

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  argTypes: {
    logo: {
      description: 'Conteúdo do logo (ReactNode)',
    },
    items: {
      description: 'Itens principais da navegação',
    },
    bottomItems: {
      description: 'Itens inferiores (ex.: Settings, Logout)',
    },
  },
}

export default meta

type Story = StoryObj<typeof Sidebar>

export const Default: Story = {
  args: {
    logo: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{ fontSize: '1.25rem' }}>⌂</span>
        <strong>BookBase</strong>
      </div>
    ),
    items: defaultItems,
    bottomItems: defaultBottomItems,
  },
}

export const WithActiveItem: Story = {
  args: {
    logo: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{ fontSize: '1.25rem' }}>⌂</span>
        <strong>BookBase</strong>
      </div>
    ),
    items: defaultItems.map((item) => ({
      ...item,
      isActive: item.label === 'My Library',
    })),
    bottomItems: defaultBottomItems,
  },
}

export const WithBottomItems: Story = {
  args: {
    items: [
      { label: 'Discover', href: '/', icon: <IconPlaceholder>⌂</IconPlaceholder> },
    ],
    bottomItems: [
      { label: 'Settings', href: '/settings' },
      { label: 'Logout' },
    ],
  },
}
