'use client'

import { useState, type FormEvent } from 'react'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import * as S from './styles'

export type LoginProps = {
  title?: string
  submitLabel?: string
  signUpLabel?: string
  recoverPasswordLabel?: string
  signUpHref?: string
  recoverPasswordHref?: string
  onSubmit?: (email: string, password: string) => void | Promise<void>
  loading?: boolean
}

export function Login({
  title = 'Entrar',
  submitLabel = 'Entrar',
  signUpLabel = 'Criar conta',
  recoverPasswordLabel = 'Esqueci minha senha',
  signUpHref = '#',
  recoverPasswordHref = '#',
  onSubmit,
  loading = false,
}: LoginProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    if (!email.trim()) {
      setError('Informe o e-mail.')
      return
    }
    if (!password) {
      setError('Informe a senha.')
      return
    }
    try {
      await onSubmit?.(email.trim(), password)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao entrar. Tente novamente.')
    }
  }

  return (
    <S.Wrapper>
      <S.Card>
        <S.Title>{title}</S.Title>
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
          <Input
            type="password"
            name="password"
            label="Senha"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            disabled={loading}
          />
          {error && <S.ErrorMessage role="alert">{error}</S.ErrorMessage>}
          <Button type="submit" disabled={loading}>
            {loading ? 'Entrando...' : submitLabel}
          </Button>
        </S.Form>
        <S.Links>
          <S.Link href={recoverPasswordHref}>{recoverPasswordLabel}</S.Link>
          <S.Link href={signUpHref}>{signUpLabel}</S.Link>
        </S.Links>
      </S.Card>
    </S.Wrapper>
  )
}
