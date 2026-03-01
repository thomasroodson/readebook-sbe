'use client'

import * as S from './styles'

export type BookCardProps = {
  title: string
  author: string
  coverImage: { src: string; alt?: string }
  href?: string
} & Omit<
  React.HTMLAttributes<HTMLDivElement> &
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
  'title' | 'children'
>

export function BookCard({
  title,
  author,
  coverImage,
  href,
  ...rest
}: BookCardProps) {
  return (
    <S.Card as={href ? 'a' : 'div'} href={href} {...rest}>
      <S.CoverWrapper>
        <S.CoverImage
          src={coverImage.src}
          alt={coverImage.alt ?? title}
          loading="lazy"
        />
      </S.CoverWrapper>
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Author>{author}</S.Author>
      </S.Info>
    </S.Card>
  )
}
