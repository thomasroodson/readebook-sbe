import type { Meta, StoryObj } from '@storybook/react'
import { Aside } from '@/components/Aside'

const meta: Meta<typeof Aside> = {
  title: 'Components/Aside',
  component: Aside,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Título do bloco',
    },
    description: {
      control: 'text',
      description: 'Descrição opcional',
    },
    ctaLabel: {
      control: 'text',
      description: 'Rótulo do CTA',
    },
    coverImage: {
      description: 'Imagem da capa (src e alt opcional)',
    },
    ctaHref: {
      control: 'text',
      description: 'Se definido, CTA é link',
    },
    onCtaClick: {
      action: 'onCtaClick',
      description: 'Callback do CTA quando não há ctaHref',
    },
  },
}

export default meta

type Story = StoryObj<typeof Aside>

export const Default: Story = {
  args: {
    title: 'Livro em destaque',
    ctaLabel: 'Ler agora',
    onCtaClick: () => {},
  },
}

export const WithDescription: Story = {
  args: {
    title: 'Clean Code',
    description:
      'A Handbook of Agile Software Craftsmanship por Robert C. Martin.',
    ctaLabel: 'Começar a ler',
    onCtaClick: () => {},
  },
}

const defaultCover = '/assets/images/1024w-EjDKosh-ZEg.jpg'

export const WithLink: Story = {
  args: {
    title: 'Domain-Driven Design',
    description: 'Eric Evans. Leitura recomendada desta semana.',
    coverImage: { src: defaultCover, alt: 'Capa Domain-Driven Design' },
    ctaLabel: 'Ver livro',
    ctaHref: '#',
  },
}

export const WithCover: Story = {
  args: {
    title: 'Clean Code',
    description: 'A Handbook of Agile Software Craftsmanship.',
    coverImage: { src: defaultCover, alt: 'Capa Clean Code' },
    ctaLabel: 'Ler agora',
    onCtaClick: () => {},
  },
}

export const CustomChildren: Story = {
  args: {
    children: (
      <p style={{ margin: 0, color: 'inherit' }}>
        Conteúdo customizado do aside.
      </p>
    ),
    title: 'Ignorado',
    ctaLabel: 'Ignorado',
  },
}
