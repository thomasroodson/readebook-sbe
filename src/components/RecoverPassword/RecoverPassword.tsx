'use client'

import { useState, type FormEvent } from 'react'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import * as S from './styles'

export type RecoverPasswordProps = {
  title?: string
  subtitle?: string
  submitLabel?: string
  backToLoginLabel?: string
  backToLoginHref?: string
  onSubmit?: (email: string) => void | Promise<void>
  loading?: boolean
}

export function RecoverPassword({
  title = 'Recuperar senha',
  subtitle = 'Informe seu e-mail e enviaremos um link para redefinir sua senha.',
  submitLabel = 'Enviar link',
  backToLoginLabel = 'Voltar ao login',
  backToLoginHref = '#',
  onSubmit,
  loading = false,
}: RecoverPasswordProps) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    if (!email.trim()) {
      setError('Informe o e-mail.')
      return
    }
    try {
      await onSubmit?.(email.trim())
      setSuccess(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao enviar. Tente novamente.')
    }
  }

  if (success) {
    return (
      <S.Wrapper>
        <S.Card>
          <S.Title>{title}</S.Title>
          <S.SuccessMessage>
            Se esse e-mail estiver cadastrado, você receberá um link para redefinir sua senha em instantes.
          </S.SuccessMessage>
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
            type="email"
            name="email"
            label="E-mail"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            disabled={loading}
          />
          {error && <S.ErrorMessage role="alert">{error}</S.ErrorMessage>}
          <Button type="submit" disabled={loading}>
            {loading ? 'Enviando...' : submitLabel}
          </Button>
        </S.Form>
        <S.BackLink href={backToLoginHref}>{backToLoginLabel}</S.BackLink>
      </S.Card>
    </S.Wrapper>
  )
}
