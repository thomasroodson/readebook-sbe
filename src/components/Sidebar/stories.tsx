import type { Meta, StoryObj } from '@storybook/react'
import {
  Home,
  LayoutGrid,
  Library,
  Download,
  Headphones,
  Heart,
  Settings,
  HelpCircle,
  LogOut,
} from 'lucide-react'
import { IconProvider, AppIcon } from '@/contexts/IconContext'
import { Sidebar } from './Sidebar'

const defaultItems = [
  {
    label: 'Discover',
    href: '/',
    isActive: true,
    icon: <AppIcon icon={Home} />,
  },
  {
    label: 'Category',
    href: '/category',
    icon: <AppIcon icon={LayoutGrid} />,
  },
  {
    label: 'My Library',
    href: '/library',
    icon: <AppIcon icon={Library} />,
  },
  {
    label: 'Download',
    href: '/download',
    icon: <AppIcon icon={Download} />,
  },
  {
    label: 'Audio Books',
    href: '/audio',
    icon: <AppIcon icon={Headphones} />,
  },
  {
    label: 'Favourite',
    href: '/favourite',
    icon: <AppIcon icon={Heart} />,
  },
]

const defaultBottomItems = [
  {
    label: 'Settings',
    href: '/settings',
    icon: <AppIcon icon={Settings} />,
  },
  {
    label: 'Support',
    href: '/support',
    icon: <AppIcon icon={HelpCircle} />,
  },
  { label: 'Logout', icon: <AppIcon icon={LogOut} /> },
]

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <IconProvider>
        <Story />
      </IconProvider>
    ),
  ],
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

const logoContent = (
  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
    <Home size={20} aria-hidden />
    <strong>BookBase</strong>
  </div>
)

export const Default: Story = {
  args: {
    logo: logoContent,
    items: defaultItems,
    bottomItems: defaultBottomItems,
  },
}

export const WithActiveItem: Story = {
  args: {
    logo: logoContent,
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
      { label: 'Discover', href: '/', icon: <AppIcon icon={Home} /> },
    ],
    bottomItems: [
      { label: 'Settings', href: '/settings' },
      { label: 'Logout' },
    ],
  },
}
