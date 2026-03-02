'use client'

import { useState, type FormEvent } from 'react'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import * as S from './styles'

export type SignUpProps = {
  title?: string
  submitLabel?: string
  loginLabel?: string
  loginHref?: string
  onSubmit?: (name: string, email: string, password: string) => void | Promise<void>
  loading?: boolean
}

export function SignUp({
  title = 'Criar conta',
  submitLabel = 'Cadastrar',
  loginLabel = 'Já tem conta? Entrar',
  loginHref = '#',
  onSubmit,
  loading = false,
}: SignUpProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    if (!name.trim()) {
      setError('Informe seu nome.')
      return
    }
    if (!email.trim()) {
      setError('Informe o e-mail.')
      return
    }
    if (!password) {
      setError('Informe a senha.')
      return
    }
    if (password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres.')
      return
    }
    if (password !== confirmPassword) {
      setError('A confirmação da senha não confere.')
      return
    }
    try {
      await onSubmit?.(name.trim(), email.trim(), password)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao cadastrar. Tente novamente.')
    }
  }

  return (
    <S.Wrapper>
      <S.Card>
        <S.Title>{title}</S.Title>
        <S.Form onSubmit={handleSubmit} noValidate>
          <Input
            type="text"
            name="name"
            label="Nome"
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            disabled={loading}
          />
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
            placeholder="Mínimo 6 caracteres"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
            disabled={loading}
          />
          <Input
            type="password"
            name="confirmPassword"
            label="Confirmar senha"
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            autoComplete="new-password"
            disabled={loading}
          />
          {error && <S.ErrorMessage role="alert">{error}</S.ErrorMessage>}
          <Button type="submit" disabled={loading}>
            {loading ? 'Cadastrando...' : submitLabel}
          </Button>
        </S.Form>
        <S.Links>
          <S.Link href={loginHref}>{loginLabel}</S.Link>
        </S.Links>
      </S.Card>
    </S.Wrapper>
  )
}
