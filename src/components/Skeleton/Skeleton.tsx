'use client'

import { HTMLAttributes } from 'react'
import * as S from './styles'

export type SkeletonVariant = S.SkeletonVariant

type SkeletonProps = {
  variant?: SkeletonVariant
  width?: string | number
  height?: string | number
  fullWidth?: boolean
} & HTMLAttributes<HTMLDivElement>

export function Skeleton({
  variant = 'rect',
  width,
  height,
  fullWidth,
  ...props
}: SkeletonProps) {
  return (
    <S.Skeleton
      $variant={variant}
      $width={width}
      $height={height}
      $fullWidth={fullWidth}
      aria-hidden="true"
      {...props}
    />
  )
}

