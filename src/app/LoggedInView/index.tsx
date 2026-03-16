'use client'

import { useEffect, useMemo, useState } from 'react'
import { useUser } from '@/contexts/UserContext'
import { useLogout } from '@/app/lib/auth'
import { filterLibraryByTerm } from '@/app/lib/filterLibraryByTerm'
import { Header } from '@/components/Header'
import { BookCard } from '@/components/BookCard'
import {
  HeaderSkeleton,
  BookCardSkeleton,
} from '@/components/Skeleton'
import * as S from './styles'

export function LoggedInView() {
  const logout = useLogout()
  const { user, library } = useUser()
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

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

  return (
    <>
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
        />
      )}
      <S.Main>
        <S.Section>
          <S.SectionTitle>Meus livros</S.SectionTitle>
          <S.BookGrid>
            {isLoading
              ? Array.from({ length: 8 }).map((_, index) => (
                  <BookCardSkeleton key={index} />
                ))
              : filteredLibrary.map((book) => (
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
    </>
  )
}

