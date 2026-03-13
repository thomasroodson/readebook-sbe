'use client'

import { useState, type FormEvent } from 'react'
import { Mail, Lock, ArrowRight } from 'lucide-react'
import { Input } from '@/components/Input'
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
        <S.PanelVisual>
          <S.QuoteBlock>
            <S.Quote>
              A room without books is like a body without a soul.
            </S.Quote>
            <S.Author>— Cicero</S.Author>
          </S.QuoteBlock>
        </S.PanelVisual>

        <S.PanelForm>
          <S.Title>{title}</S.Title>
          <S.WelcomeText>
            Bem-vindo de volta ao seu santuário de leitura. Faça login para acessar sua coleção.
          </S.WelcomeText>
          <S.Form onSubmit={handleSubmit} noValidate>
            <S.InputRow>
              <Mail size={18} aria-hidden />
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
            </S.InputRow>
            <S.InputRow>
              <Lock size={18} aria-hidden />
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
            </S.InputRow>
            {error && <S.ErrorMessage role="alert">{error}</S.ErrorMessage>}
            <S.SubmitButton type="submit" disabled={loading}>
              {loading ? 'Entrando...' : submitLabel}
              {!loading && <ArrowRight size={18} aria-hidden />}
            </S.SubmitButton>
          </S.Form>
          <S.SecureAccess>
            Acesso seguro • Gerenciado pelo seu bibliotecário local
          </S.SecureAccess>
          <S.Links>
            <S.Link href={recoverPasswordHref}>{recoverPasswordLabel}</S.Link>
            <S.Link href={signUpHref}>{signUpLabel}</S.Link>
          </S.Links>
        </S.PanelForm>
      </S.Card>
    </S.Wrapper>
  )
}
