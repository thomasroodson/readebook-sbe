'use client'

import { useEffect, useState } from 'react'
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
import {
  SidebarSkeleton,
  HeaderSkeleton,
  BookCardSkeleton,
  AsideSkeleton,
} from '@/components/Skeleton'
import { theme } from '@/styles/theme'
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
  <Link
    href="/"
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      textDecoration: 'none',
      color: 'inherit',
    }}
  >
    <Home size={20} aria-hidden />
    <strong>BookBase</strong>
  </Link>
)

export function BibliotecaView() {
  const { user, library } = useUser()
  const [isLoading, setIsLoading] = useState(true)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false)
    }, 400)

    return () => clearTimeout(timeoutId)
  }, [])

  // Em desktop, o sidebar sempre deve estar aberto
  useEffect(() => {
    const breakpointMobile = theme.layout.breakpointMobile
    const mediaQuery = window.matchMedia(`(min-width: ${breakpointMobile})`)
    
    const handleMediaChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        // Desktop: sidebar sempre aberto
        setIsSidebarOpen(true)
      } else {
        // Mobile: sidebar fechado por padrão
        setIsSidebarOpen(false)
      }
    }

    // Verificar estado inicial
    handleMediaChange(mediaQuery)
    
    // Escutar mudanças
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleMediaChange)
      return () => mediaQuery.removeEventListener('change', handleMediaChange)
    } else {
      // Fallback para navegadores antigos
      mediaQuery.addListener(handleMediaChange)
      return () => mediaQuery.removeListener(handleMediaChange)
    }
  }, [])

  const handleMenuToggle = () => {
    setIsSidebarOpen((prev) => !prev)
  }

  const handleSidebarClose = () => {
    setIsSidebarOpen(false)
  }

  const featuredBook = library[0]

  return (
    <S.LayoutWrapper>
      {isLoading ? (
        <SidebarSkeleton />
      ) : (
        <Sidebar
          logo={logoContent}
          items={sidebarItems}
          bottomItems={sidebarBottomItems}
          isOpen={isSidebarOpen}
          onClose={handleSidebarClose}
        />
      )}
      <S.ContentColumn>
        {isLoading ? (
          <HeaderSkeleton />
        ) : (
          <Header
            profileProps={{
              avatarSrc: user.avatarUrl ?? undefined,
              avatarAlt: user.name,
              logoutLabel: 'Sair',
              onLogout: () => {},
            }}
            onMenuToggle={handleMenuToggle}
          />
        )}
        <S.MainAsideRow>
          <S.Main>
            <S.Section>
              <S.SectionTitle>Meus livros</S.SectionTitle>
              <S.BookGrid>
                {isLoading
                  ? Array.from({ length: 8 }).map((_, index) => (
                      <BookCardSkeleton key={index} />
                    ))
                  : library.map((book) => (
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
          {isLoading ? (
            <AsideSkeleton />
          ) : (
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
          )}
        </S.MainAsideRow>
      </S.ContentColumn>
    </S.LayoutWrapper>
  )
}

