'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import {
  Library,
  LogOut,
  Settings,
  HelpCircle,
  ShoppingCart,
  BookOpen,
} from 'lucide-react'
import { useUser } from '@/contexts/UserContext'
import { AppIcon } from '@/contexts/IconContext'
import { Header } from '@/components/Header'
import { Sidebar, type SidebarNavItem } from '@/components/Sidebar'
import { Aside } from '@/components/Aside'
import { BookCard } from '@/components/BookCard'
import {
  SidebarSkeleton,
  HeaderSkeleton,
  BookCardSkeleton,
  AsideSkeleton,
} from '@/components/Skeleton'
import { theme } from '@/styles/theme'
import { useLogout } from '../lib/auth'
import { filterLibraryByTerm } from '../lib/filterLibraryByTerm'
import * as S from './styles'

const sidebarItems = [
  {
    label: 'Minha biblioteca',
    href: '/minha-biblioteca',
    isActive: true,
    icon: <AppIcon icon={Library} />,
  },
  {
    label: 'Loja SBE',
    href: 'https://sbeshop.com.br',
    icon: <AppIcon icon={ShoppingCart} />,
    target: '_blank',
  }
]

const getSidebarBottomItems = (onLogout: () => void): SidebarNavItem[] => [
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
    icon: <AppIcon icon={LogOut} />,
    onClick: onLogout,
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
    <BookOpen size={20} aria-hidden />
    <strong>SBE Library</strong>
  </Link>
)

export function BibliotecaView() {
  const logout = useLogout()
  const { user, library } = useUser()
  const [isLoading, setIsLoading] = useState(true)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')

  const ITEMS_PER_PAGE = 18
  const filteredLibrary = useMemo(
    () => filterLibraryByTerm(library, searchTerm),
    [library, searchTerm]
  )

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

  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm])

  const featuredBook = filteredLibrary[0]

  const totalPages =
    filteredLibrary.length > 0
      ? Math.ceil(filteredLibrary.length / ITEMS_PER_PAGE)
      : 1

  const clampPage = (page: number) => {
    if (page < 1) return 1
    if (page > totalPages) return totalPages
    return page
  }

  const handlePageChange = (page: number) => {
    setCurrentPage((prev) => {
      const next = clampPage(page)
      return next === prev ? prev : next
    })
  }

  const handlePreviousPage = () => {
    handlePageChange(currentPage - 1)
  }

  const handleNextPage = () => {
    handlePageChange(currentPage + 1)
  }

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const paginatedBooks = filteredLibrary.slice(startIndex, endIndex)

  return (
    <S.LayoutWrapper>
      {isLoading ? (
        <SidebarSkeleton />
      ) : (
        <Sidebar
          logo={logoContent}
          items={sidebarItems}
          bottomItems={getSidebarBottomItems(logout)}
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
              onLogout: logout,
            }}
            searchProps={{
              value: searchTerm,
              onChange: setSearchTerm,
              placeholder: 'Buscar livros...',
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
                  : paginatedBooks.map((book) => (
                      <BookCard
                        key={book.id}
                        title={book.title}
                        author={book.author}
                        coverImage={book.coverImage}
                        href={book.href}
                        progress={book.progress}
                        currentPage={book.currentPage}
                        totalPages={book.totalPages}
                      />
                    ))}
              </S.BookGrid>
              {!isLoading && totalPages > 1 && (
                <S.PaginationWrapper aria-label="Paginação da minha biblioteca">
                  <S.PaginationButton
                    type="button"
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                  >
                    Anterior
                  </S.PaginationButton>
                  {Array.from({ length: totalPages }).map((_, index) => {
                    const page = index + 1
                    const isActive = page === currentPage

                    return (
                      <S.PaginationButton
                        key={page}
                        type="button"
                        onClick={() => handlePageChange(page)}
                        $active={isActive}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        {page}
                      </S.PaginationButton>
                    )
                  })}
                  <S.PaginationButton
                    type="button"
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                  >
                    Próximo
                  </S.PaginationButton>
                </S.PaginationWrapper>
              )}
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

