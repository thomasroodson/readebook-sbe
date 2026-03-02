'use client'

import Link from 'next/link'
import {
  Home,
  Library,
  LogOut,
  Settings,
  HelpCircle,
} from 'lucide-react'
import { useUser } from '@/contexts/UserContext'
import { AppIcon } from '@/contexts/IconContext'
import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'
import { Aside } from '@/components/Aside'
import { BookCard } from '@/components/BookCard'
import * as S from './styles'

const sidebarItems = [
  {
    label: 'Início',
    href: '/',
    isActive: false,
    icon: <AppIcon icon={Home} />,
  },
  {
    label: 'Minha biblioteca',
    href: '/minha-biblioteca',
    isActive: true,
    icon: <AppIcon icon={Library} />,
  },
]

const sidebarBottomItems = [
  {
    label: 'Configurações',
    href: '/configuracoes',
    icon: <AppIcon icon={Settings} />,
  },
  {
    label: 'Ajuda',
    href: '/ajuda',
    icon: <AppIcon icon={HelpCircle} />,
  },
  {
    label: 'Sair',
    href: '/',
    icon: <AppIcon icon={LogOut} />,
  },
]

const logoContent = (
  <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'inherit' }}>
    <Home size={20} aria-hidden />
    <strong>BookBase</strong>
  </Link>
)

export function BibliotecaView() {
  const { user, library } = useUser()
  const featuredBook = library[0]

  return (
    <S.LayoutWrapper>
      <Sidebar
        logo={logoContent}
        items={sidebarItems}
        bottomItems={sidebarBottomItems}
      />
      <S.ContentColumn>
        <Header
          profileProps={{
            avatarSrc: user.avatarUrl ?? undefined,
            avatarAlt: user.name,
            logoutLabel: 'Sair',
            onLogout: () => {},
          }}
        />
        <S.MainAsideRow>
          <S.Main>
            <S.Section>
              <S.SectionTitle>Meus livros</S.SectionTitle>
              <S.BookGrid>
                {library.map((book) => (
                  <BookCard
                    key={book.id}
                    title={book.title}
                    author={book.author}
                    coverImage={book.coverImage}
                    href={book.href}
                    progress={book.progress}
                  />
                ))}
              </S.BookGrid>
            </S.Section>
          </S.Main>
          <Aside
            title={featuredBook ? featuredBook.title : 'Livro em destaque'}
            description={
              featuredBook
                ? `${featuredBook.author} — ${featuredBook.progress}% lido`
                : undefined
            }
            coverImage={featuredBook?.coverImage}
            ctaLabel="Continuar lendo"
            ctaHref={featuredBook?.href}
          />
        </S.MainAsideRow>
      </S.ContentColumn>
    </S.LayoutWrapper>
  )
}
