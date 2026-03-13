'use client'

import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  from,
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { setContext } from '@apollo/client/link/context'
import { useMemo } from 'react'
import { getJwtToken, clearJwtToken } from './lib/auth'

type ApolloProvidersProps = {
  children: React.ReactNode
}

export function ApolloProviders({ children }: ApolloProvidersProps) {
  const client = useMemo(() => {
    const httpLink = new HttpLink({
      uri: `${process.env.NEXT_PUBLIC_EBOOKS_API_URL}/graphql`,
    })

    const authLink = setContext((_, { headers }) => {
      const token = getJwtToken()

      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : '',
        },
      }
    })

    const errorLink = onError(({ networkError, operation }) => {
      if (
        networkError &&
        'statusCode' in networkError &&
        (networkError.statusCode === 401 || networkError.statusCode === 403)
      ) {
        // Não tratar 401/403 da mutation de login como logout global,
        // para permitir exibir a mensagem de erro na tela de login.
        if (operation.operationName === 'Login') {
          return
        }

        clearJwtToken()
        if (typeof window !== 'undefined') {
          window.location.href = '/'
        }
      }
    })

    return new ApolloClient({
      link: from([errorLink, authLink, httpLink]),
      cache: new InMemoryCache(),
    })
  }, [])

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

