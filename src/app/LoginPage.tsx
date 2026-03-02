'use client'

import { useRouter } from 'next/navigation'
import { Login } from '@/components/Login'

export function LoginPage() {
  const router = useRouter()

  return (
    <Login
      title="Entrar"
      submitLabel="Entrar"
      signUpLabel="Criar conta"
      recoverPasswordLabel="Esqueci minha senha"
      signUpHref="/cadastro"
      recoverPasswordHref="/recuperar-senha"
      onSubmit={async () => {
        router.push('/minha-biblioteca')
      }}
    />
  )
}
