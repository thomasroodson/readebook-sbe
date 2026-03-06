'use client'

import { useEffect, useState } from 'react'
import { useUser } from '@/contexts/UserContext'
import { Header } from '@/components/Header'
import { BookCard } from '@/components/BookCard'
import {
  HeaderSkeleton,
  BookCardSkeleton,
} from '@/components/Skeleton'
import * as S from './styles'

export function LoggedInView() {
  const { user, library } = useUser()
  const [isLoading, setIsLoading] = useState(true)

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
            onLogout: () => {},
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
    </>
  )
}

