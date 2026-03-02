'use client'

import { useUser } from '@/contexts/UserContext'
import { Header } from '@/components/Header'
import { BookCard } from '@/components/BookCard'
import * as S from './styles'

export function LoggedInView() {
  const { user, library } = useUser()

  return (
    <>
      <Header
        profileProps={{
          avatarSrc: user.avatarUrl ?? undefined,
          avatarAlt: user.name,
          logoutLabel: 'Sair',
          onLogout: () => {},
        }}
      />
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
    </>
  )
}
