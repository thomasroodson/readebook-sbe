'use client'

import { Check } from 'lucide-react'
import { AppIcon } from '@/contexts/IconContext'
import { theme } from '@/styles/theme'
import * as S from './styles'

export type BookCardProps = {
  title: string
  author: string
  coverImage: { src: string; alt?: string }
  href?: string
  /** Porcentagem de leitura concluída (0–100). Quando omitido, a barra de progresso não é exibida. */
  progress?: number
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
  progress,
  ...rest
}: BookCardProps) {
  const progressClamped =
    progress !== undefined
      ? Math.min(100, Math.max(0, Number(progress)))
      : undefined

  return (
    <S.Card as={href ? 'a' : 'div'} href={href} {...rest}>
      <S.CoverWrapper>
        <S.CoverImage
          src={coverImage.src}
          alt={coverImage.alt ?? title}
          loading="lazy"
        />
      </S.CoverWrapper>
      {progressClamped !== undefined && (
        <S.ProgressWrapper
          role="progressbar"
          aria-valuenow={progressClamped}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Progresso de leitura: ${progressClamped}%`}
        >
          <S.ProgressBarRow>
            <S.ProgressTrack>
              <S.ProgressFill $progress={progressClamped} />
            </S.ProgressTrack>
            <S.ProgressLabel aria-hidden="true">
              {progressClamped}%
              {progressClamped === 100 && (
                <AppIcon
                  icon={Check}
                  size={14}
                  color={theme.colors.primary[500]}
                />
              )}
            </S.ProgressLabel>
          </S.ProgressBarRow>
        </S.ProgressWrapper>
      )}
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Author>{author}</S.Author>
      </S.Info>
    </S.Card>
  )
}
