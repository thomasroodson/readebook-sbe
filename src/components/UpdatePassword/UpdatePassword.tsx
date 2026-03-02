'use client'

import { useState, type FormEvent } from 'react'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import * as S from './styles'

export type UpdatePasswordProps = {
  title?: string
  submitLabel?: string
  backToLoginLabel?: string
  backToLoginHref?: string
  onSubmit?: (currentPassword: string, newPassword: string) => void | Promise<void>
  loading?: boolean
}

export function UpdatePassword({
  title = 'Atualizar senha',
  submitLabel = 'Salvar nova senha',
  backToLoginLabel = 'Voltar ao login',
  backToLoginHref = '#',
  onSubmit,
  loading = false,
}: UpdatePasswordProps) {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    if (!currentPassword) {
      setError('Informe a senha atual.')
      return
    }
    if (!newPassword) {
      setError('Informe a nova senha.')
      return
    }
    if (newPassword.length < 6) {
      setError('A nova senha deve ter pelo menos 6 caracteres.')
      return
    }
    if (newPassword !== confirmPassword) {
      setError('A confirmação da senha não confere.')
      return
    }
    try {
      await onSubmit?.(currentPassword, newPassword)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao atualizar senha. Tente novamente.')
    }
  }

  return (
    <S.Wrapper>
      <S.Card>
        <S.Title>{title}</S.Title>
        <S.Form onSubmit={handleSubmit} noValidate>
          <Input
            type="password"
            name="currentPassword"
            label="Senha atual"
            placeholder="••••••••"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            autoComplete="current-password"
            disabled={loading}
          />
          <Input
            type="password"
            name="newPassword"
            label="Nova senha"
            placeholder="••••••••"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            autoComplete="new-password"
            disabled={loading}
          />
          <Input
            type="password"
            name="confirmPassword"
            label="Confirmar nova senha"
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            autoComplete="new-password"
            disabled={loading}
          />
          {error && <S.ErrorMessage role="alert">{error}</S.ErrorMessage>}
          <Button type="submit" disabled={loading}>
            {loading ? 'Salvando...' : submitLabel}
          </Button>
        </S.Form>
        <S.BackLink href={backToLoginHref}>{backToLoginLabel}</S.BackLink>
      </S.Card>
    </S.Wrapper>
  )
}
