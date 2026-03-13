'use client'

import type { ReactNode } from 'react'
import * as S from './styles'

export type SidebarNavItem = {
  label: string
  icon?: ReactNode
  href?: string
  isActive?: boolean
  target?: string
}

export type SidebarProps = {
  logo?: ReactNode
  items: SidebarNavItem[]
  bottomItems?: SidebarNavItem[]
  isOpen?: boolean
  onClose?: () => void
} & React.HTMLAttributes<HTMLElement>

export function Sidebar({
  logo,
  items,
  bottomItems,
  isOpen = true,
  onClose,
  ...rest
}: SidebarProps) {
  return (
    <>
      {isOpen && <S.Overlay onClick={onClose} />}
      <S.Wrapper aria-label="Navegação principal" $isOpen={isOpen} {...rest}>
      {logo != null && <S.LogoContainer>{logo}</S.LogoContainer>}
      <S.NavList>
        {items.map((item) => (
          <li key={item.label}>
            <S.NavItem
              as={item.href ? 'a' : 'button'}
              href={item.href}
              type={item.href ? undefined : 'button'}
              $isActive={item.isActive}
              target={item.target}
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
                  target={item.target}
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
    </>
  )
}
