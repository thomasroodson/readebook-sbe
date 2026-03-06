'use client'

import type { HTMLAttributes } from 'react'
import { theme } from '@/styles/theme'
import { Skeleton } from '@/components/Skeleton'
import * as AsideStyles from '@/components/Aside/styles'

export type AsideSkeletonProps = HTMLAttributes<HTMLElement>

export function AsideSkeleton({ ...rest }: AsideSkeletonProps) {
  return (
    <AsideStyles.Wrapper {...rest}>
      <AsideStyles.CoverWrapper>
        <Skeleton variant="rect" width="100%" height="100%" />
      </AsideStyles.CoverWrapper>

      <AsideStyles.Title as="div">
        <Skeleton variant="text" width="70%" />
      </AsideStyles.Title>

      <div style={{ margin: `0 0 ${theme.spacing[1]} 0` }}>
        <Skeleton variant="text" width="100%" />
        <div style={{ marginTop: theme.spacing[0.25] }}>
          <Skeleton variant="text" width="80%" />
        </div>
      </div>

      <Skeleton
        variant="rect"
        fullWidth
        height={theme.components.buttonHeight}
        style={{ marginTop: theme.spacing[0.75] }}
      />
    </AsideStyles.Wrapper>
  )
}

