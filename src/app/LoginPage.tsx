'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ApolloError, useMutation } from '@apollo/client'
import { Login } from '@/components/Login'
import { LOGIN_MUTATION } from '@/graphql/mutations'
import { setJwtToken } from './lib/auth'

export function LoginPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const [loginMutation] = useMutation(LOGIN_MUTATION)

  const handleSubmit = async (email: string, password: string) => {
    setLoading(true)
    try {
      const { data } = await loginMutation({
        variables: {
          identifier: email,
          password,
        },
      })

      const token = data?.login?.jwt as string | undefined

      if (!token) {
        throw new Error('Não foi possível entrar. Tente novamente em instantes.')
      }

      setJwtToken(token)
      router.push('/minha-biblioteca')
    } catch (error) {
      const statusCode =
        error instanceof ApolloError &&
        error.networkError &&
        'statusCode' in error.networkError
          ? (error.networkError as { statusCode: number }).statusCode
          : undefined

      const mensagem =
        statusCode === 401 || statusCode === 403
          ? 'E-mail ou senha incorretos. Verifique e tente novamente.'
          : 'Não foi possível entrar. Tente novamente em instantes.'

      throw new Error(mensagem)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Login
      title="Entrar"
      submitLabel="Entrar"
      signUpLabel="Criar conta"
      recoverPasswordLabel="Esqueci minha senha"
      signUpHref="/cadastro"
      recoverPasswordHref="/recuperar-senha"
      onSubmit={handleSubmit}
      loading={loading}
    />
  )
}

