'use client'

import type { HTMLAttributes } from 'react'
import { theme } from '@/styles/theme'
import { Skeleton } from '@/components/Skeleton'
import * as BookCardStyles from '@/components/BookCard/styles'

export type BookCardSkeletonProps = {
  showProgress?: boolean
} & HTMLAttributes<HTMLDivElement>

export function BookCardSkeleton({
  showProgress = true,
  ...rest
}: BookCardSkeletonProps) {
  return (
    <BookCardStyles.Card {...rest}>
      <BookCardStyles.CoverWrapper>
        <Skeleton variant="rect" width="100%" height="100%" />
      </BookCardStyles.CoverWrapper>

      {showProgress && (
        <BookCardStyles.ProgressWrapper aria-hidden="true">
          <BookCardStyles.ProgressBarRow>
            <BookCardStyles.ProgressTrack>
              <Skeleton variant="rect" width="100%" height={4} />
            </BookCardStyles.ProgressTrack>
            <BookCardStyles.ProgressLabel>
              <Skeleton variant="text" width="2.5rem" />
            </BookCardStyles.ProgressLabel>
          </BookCardStyles.ProgressBarRow>
        </BookCardStyles.ProgressWrapper>
      )}

      <BookCardStyles.Info>
        <Skeleton variant="text" width="80%" />
        <div style={{ marginTop: theme.spacing[0.25] }}>
          <Skeleton variant="text" width="60%" />
        </div>
      </BookCardStyles.Info>
    </BookCardStyles.Card>
  )
}

