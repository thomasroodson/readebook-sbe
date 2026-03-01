'use client'

import type { ReactNode } from 'react'
import * as S from './styles'

export type SidebarNavItem = {
  label: string
  icon?: ReactNode
  href?: string
  isActive?: boolean
}

export type SidebarProps = {
  logo?: ReactNode
  items: SidebarNavItem[]
  bottomItems?: SidebarNavItem[]
} & React.HTMLAttributes<HTMLElement>

export function Sidebar({
  logo,
  items,
  bottomItems,
  ...rest
}: SidebarProps) {
  return (
    <S.Wrapper aria-label="Navegação principal" {...rest}>
      {logo != null && <S.LogoContainer>{logo}</S.LogoContainer>}
      <S.NavList>
        {items.map((item) => (
          <li key={item.label}>
            <S.NavItem
              as={item.href ? 'a' : 'button'}
              href={item.href}
              type={item.href ? undefined : 'button'}
              $isActive={item.isActive}
            >
              {item.icon}
              <span>{item.label}</span>
            </S.NavItem>
          </li>
        ))}
      </S.NavList>
      {bottomItems != null && bottomItems.length > 0 && (
        <>
          <S.Separator />
          <S.NavList>
            {bottomItems.map((item) => (
              <li key={item.label}>
                <S.NavItem
                  as={item.href ? 'a' : 'button'}
                  href={item.href}
                  type={item.href ? undefined : 'button'}
                  $isActive={item.isActive}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </S.NavItem>
              </li>
            ))}
          </S.NavList>
        </>
      )}
    </S.Wrapper>
  )
}
