import type { Meta, StoryObj } from '@storybook/react'
import { BookCard } from './BookCard'

const meta: Meta<typeof BookCard> = {
  title: 'Components/BookCard',
  component: BookCard,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Título do livro',
    },
    author: {
      control: 'text',
      description: 'Nome do autor',
    },
    coverImage: {
      description: 'Imagem da capa (src e alt opcional)',
    },
    href: {
      control: 'text',
      description: 'Link opcional; quando definido, o card é clicável',
    },
    progress: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Porcentagem de leitura concluída (0–100); omitido = barra não exibida',
    },
  },
}

export default meta

type Story = StoryObj<typeof BookCard>

const defaultCover = '/assets/images/1024w-EjDKosh-ZEg.jpg'

export const Default: Story = {
  args: {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    coverImage: { src: defaultCover, alt: 'Capa Clean Code' },
  },
}

export const WithLink: Story = {
  args: {
    title: 'Domain-Driven Design',
    author: 'Eric Evans',
    coverImage: { src: defaultCover, alt: 'Capa DDD' },
    href: '#',
  },
}

export const LongTitle: Story = {
  args: {
    title:
      'Designing Data-Intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems',
    author: 'Martin Kleppmann',
    coverImage: { src: defaultCover },
  },
}

export const WithProgress: Story = {
  args: {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    coverImage: { src: defaultCover, alt: 'Capa Clean Code' },
    progress: 65,
  },
}

export const ProgressComplete: Story = {
  args: {
    title: 'The Pragmatic Programmer',
    author: 'David Thomas, Andrew Hunt',
    coverImage: { src: defaultCover, alt: 'Capa' },
    progress: 100,
  },
}

export const ProgressNotStarted: Story = {
  args: {
    title: 'Refactoring',
    author: 'Martin Fowler',
    coverImage: { src: defaultCover, alt: 'Capa' },
    progress: 0,
  },
}
