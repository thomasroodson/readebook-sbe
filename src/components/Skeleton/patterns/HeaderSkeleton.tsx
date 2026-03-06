'use client'

import type { HTMLAttributes } from 'react'
import { Skeleton } from '@/components/Skeleton'
import * as HeaderStyles from '@/components/Header/styles'

export type HeaderSkeletonProps = HTMLAttributes<HTMLElement>

export function HeaderSkeleton({ ...rest }: HeaderSkeletonProps) {
  return (
    <HeaderStyles.Wrapper role="banner" {...rest}>
      <HeaderStyles.SearchSlot>
        <Skeleton variant="rect" fullWidth height={40} />
      </HeaderStyles.SearchSlot>
      <HeaderStyles.ProfileSlot>
        <Skeleton variant="circle" width={32} height={32} />
      </HeaderStyles.ProfileSlot>
    </HeaderStyles.Wrapper>
  )
}

