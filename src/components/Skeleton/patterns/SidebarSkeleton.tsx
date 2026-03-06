'use client'

import type { HTMLAttributes } from 'react'
import { Skeleton } from '@/components/Skeleton'
import * as SidebarStyles from '@/components/Sidebar/styles'

export type SidebarSkeletonProps = {
  itemsCount?: number
  bottomItemsCount?: number
  showLogo?: boolean
} & HTMLAttributes<HTMLElement>

export function SidebarSkeleton({
  itemsCount = 4,
  bottomItemsCount = 3,
  showLogo = true,
  ...rest
}: SidebarSkeletonProps) {
  return (
    <SidebarStyles.Wrapper
      aria-label="Navegação principal (carregando)"
      {...rest}
    >
      {showLogo && (
        <SidebarStyles.LogoContainer>
          <Skeleton variant="rect" width="60%" height={20} />
        </SidebarStyles.LogoContainer>
      )}

      <SidebarStyles.NavList>
        {Array.from({ length: itemsCount }).map((_, index) => (
          <li key={`sidebar-item-${index}`}>
            <SidebarStyles.NavItem $isActive={false} as="div">
              <Skeleton variant="circle" width={20} height={20} />
              <Skeleton variant="text" width="70%" />
            </SidebarStyles.NavItem>
          </li>
        ))}
      </SidebarStyles.NavList>

      {bottomItemsCount > 0 && (
        <>
          <SidebarStyles.Separator />
          <SidebarStyles.NavList>
            {Array.from({ length: bottomItemsCount }).map((_, index) => (
              <li key={`sidebar-bottom-item-${index}`}>
                <SidebarStyles.NavItem $isActive={false} as="div">
                  <Skeleton variant="circle" width={20} height={20} />
                  <Skeleton variant="text" width="60%" />
                </SidebarStyles.NavItem>
              </li>
            ))}
          </SidebarStyles.NavList>
        </>
      )}
    </SidebarStyles.Wrapper>
  )
}

