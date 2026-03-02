'use client'

import { useState, type FormEvent } from 'react'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import * as S from './styles'

export type ResetPasswordProps = {
  /** Token de redefinição (ex.: da query da URL após clicar no link do e-mail) */
  token?: string
  title?: string
  subtitle?: string
  submitLabel?: string
  backToLoginLabel?: string
  backToLoginHref?: string
  successMessage?: string
  onSubmit?: (token: string | undefined, newPassword: string) => void | Promise<void>
  loading?: boolean
}

export function ResetPassword({
  token,
  title = 'Redefinir senha',
  subtitle = 'Digite sua nova senha abaixo.',
  submitLabel = 'Salvar nova senha',
  backToLoginLabel = 'Voltar ao login',
  backToLoginHref = '#',
  successMessage = 'Senha redefinida com sucesso. Você já pode entrar com a nova senha.',
  onSubmit,
  loading = false,
}: ResetPasswordProps) {
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    if (!newPassword) {
      setError('Informe a nova senha.')
      return
    }
    if (newPassword.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres.')
      return
    }
    if (newPassword !== confirmPassword) {
      setError('A confirmação da senha não confere.')
      return
    }
    try {
      await onSubmit?.(token, newPassword)
      setSuccess(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao redefinir senha. Tente novamente.')
    }
  }

  if (success) {
    return (
      <S.Wrapper>
        <S.Card>
          <S.Title>{title}</S.Title>
          <S.SuccessMessage>{successMessage}</S.SuccessMessage>
          <S.BackLink href={backToLoginHref}>{backToLoginLabel}</S.BackLink>
        </S.Card>
      </S.Wrapper>
    )
  }

  return (
    <S.Wrapper>
      <S.Card>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
        <S.Form onSubmit={handleSubmit} noValidate>
          <Input
            type="password"
            name="newPassword"
            label="Nova senha"
            placeholder="Mínimo 6 caracteres"
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
