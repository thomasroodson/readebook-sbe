'use client'

import { useRef, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import * as S from './styles'

export type ProfileProps = {
  /** URL da imagem do avatar; se não informado, mostra iniciais ou ícone */
  avatarSrc?: string | null
  /** Texto alternativo do avatar */
  avatarAlt?: string
  /** Conteúdo extra à direita do avatar (ex: ícone de notificação) */
  children?: ReactNode
  /** Rótulo do item de logout no submenu */
  logoutLabel?: string
  /** Callback ao clicar em Logout */
  onLogout?: () => void
} & React.HTMLAttributes<HTMLDivElement>

export function Profile({
  avatarSrc,
  avatarAlt = 'Perfil do usuário',
  children,
  logoutLabel = 'Sair',
  onLogout,
  ...rest
}: ProfileProps) {
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [open])

  const handleAvatarClick = () => setOpen((prev) => !prev)
  const handleLogout = () => {
    setOpen(false)
    onLogout?.()
  }

  return (
    <S.Wrapper
      ref={wrapperRef}
      role="region"
      aria-label="Área do perfil"
      {...rest}
    >
      <S.Avatar
        type="button"
        aria-label={avatarAlt}
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={handleAvatarClick}
      >
        {avatarSrc ? (
          <S.AvatarImage src={avatarSrc} alt={avatarAlt} />
        ) : (
          <span aria-hidden>?</span>
        )}
      </S.Avatar>
      {children}
      {open && (
        <S.Submenu role="menu" aria-label="Menu do perfil">
          <S.LogoutItem
            type="button"
            role="menuitem"
            onClick={handleLogout}
          >
            {logoutLabel}
          </S.LogoutItem>
        </S.Submenu>
      )}
    </S.Wrapper>
  )
}
