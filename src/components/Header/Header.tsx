'use client'

import type { ReactNode } from 'react'
import { Menu } from 'lucide-react'
import { Search } from '@/components/Search'
import { Profile } from '@/components/Profile'
import * as S from './styles'

export type HeaderSearchProps = {
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  onSearch?: (value: string) => void
}

export type HeaderProfileProps = {
  avatarSrc?: string | null
  avatarAlt?: string
  children?: ReactNode
  logoutLabel?: string
  onLogout?: () => void
}

export type HeaderProps = {
  /** Props repassadas para o Search (placeholder, value, onChange, onSearch) */
  searchProps?: HeaderSearchProps
  /** Props repassadas para o Profile (avatarSrc, avatarAlt, children) */
  profileProps?: HeaderProfileProps
  /** Substitui o Search por conteúdo customizado */
  searchSlot?: ReactNode
  /** Substitui o Profile por conteúdo customizado */
  profileSlot?: ReactNode
  /** Callback quando o botão hamburger é clicado (apenas mobile) */
  onMenuToggle?: () => void
} & React.HTMLAttributes<HTMLElement>

export function Header({
  searchProps,
  profileProps,
  searchSlot,
  profileSlot,
  onMenuToggle,
  ...rest
}: HeaderProps) {
  return (
    <S.Wrapper role="banner" {...rest}>
      {onMenuToggle && (
        <S.MenuButton onClick={onMenuToggle} aria-label="Abrir menu">
          <Menu size={24} />
        </S.MenuButton>
      )}
      <S.SearchSlot>
        {searchSlot !== undefined ? (
          searchSlot
        ) : (
          <Search
            placeholder={searchProps?.placeholder ?? 'Buscar livros...'}
            value={searchProps?.value}
            onChange={searchProps?.onChange}
            onSearch={searchProps?.onSearch}
          />
        )}
      </S.SearchSlot>
      <S.ProfileSlot>
        {profileSlot !== undefined ? (
          profileSlot
        ) : (
          <Profile
            avatarSrc={profileProps?.avatarSrc}
            avatarAlt={profileProps?.avatarAlt}
            logoutLabel={profileProps?.logoutLabel}
            onLogout={profileProps?.onLogout}
          >
            {profileProps?.children}
          </Profile>
        )}
      </S.ProfileSlot>
    </S.Wrapper>
  )
}
