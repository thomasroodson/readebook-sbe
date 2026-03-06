'use client'

import styled, { keyframes } from 'styled-components'
import { theme } from '@/styles/theme'

export type SkeletonVariant = 'text' | 'rect' | 'circle'

type SkeletonStyleProps = {
  $variant: SkeletonVariant
  $width?: string | number
  $height?: string | number
  $fullWidth?: boolean
}

const shimmer = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`

export const Skeleton = styled.div<SkeletonStyleProps>`
  position: relative;
  overflow: hidden;
  display: inline-block;
  background-color: ${theme.colors.gray[200]};
  border-radius: ${({ $variant }) => {
    if ($variant === 'circle') return '50%'
    if ($variant === 'text') return theme.layout.radius.pill
    return theme.layout.radius.card
  }};

  width: ${({ $fullWidth, $width }) => {
    if ($fullWidth) return '100%'
    if (typeof $width === 'number') return `${$width}px`
    if ($width) return $width
    return '100%'
  }};

  height: ${({ $variant, $height }) => {
    if (typeof $height === 'number') return `${$height}px`
    if ($height) return $height
    if ($variant === 'text') return theme.spacing[0.75]
    return theme.spacing[2]
  }};

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.4) 40%,
      rgba(255, 255, 255, 0) 80%
    );
    animation: ${shimmer} 1.4s ease-in-out infinite;
  }
`

