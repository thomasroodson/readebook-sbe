'use client'

import type { ReactNode } from 'react'
import * as S from './styles'

export type AsideProps = {
  /** Título do bloco (ex.: livro em destaque) */
  title: string
  /** Descrição opcional */
  description?: string
  /** Imagem da capa do livro (como em BookCard) */
  coverImage?: { src: string; alt?: string }
  /** Rótulo do botão/link CTA */
  ctaLabel: string
  /** Se definido, CTA é renderizado como link */
  ctaHref?: string
  /** Se ctaHref não for definido, CTA é botão e chama este callback ao clicar */
  onCtaClick?: () => void
  /** Conteúdo customizado; quando passado, substitui título + descrição + CTA */
  children?: ReactNode
} & React.HTMLAttributes<HTMLElement>

export function Aside({
  title,
  description,
  coverImage,
  ctaLabel,
  ctaHref,
  onCtaClick,
  children,
  ...rest
}: AsideProps) {
  const isLink = ctaHref != null && ctaHref !== ''

  return (
    <S.Wrapper {...rest}>
      {children != null ? (
        children
      ) : (
        <>
          {coverImage != null && (
            <S.CoverWrapper>
              <S.CoverImage
                src={coverImage.src}
                alt={coverImage.alt ?? title}
                loading="lazy"
              />
            </S.CoverWrapper>
          )}
          <S.Title>{title}</S.Title>
          {description != null && description !== '' && (
            <S.Description>{description}</S.Description>
          )}
          {isLink ? (
            <S.CtaLink href={ctaHref}>
              {ctaLabel}
            </S.CtaLink>
          ) : (
            <S.CtaButton type="button" onClick={onCtaClick}>
              {ctaLabel}
            </S.CtaButton>
          )}
        </>
      )}
    </S.Wrapper>
  )
}
