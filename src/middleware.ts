import { NextRequest, NextResponse } from 'next/server'

const JWT_COOKIE_NAME = 'sbe_jwt'
const LIBRARY_PATH = '/minha-biblioteca'

/**
 * Verifica se o token JWT existe e não está vazio.
 * Em produção, use uma lib como `jose` para decodificar e checar `exp`.
 */
function isValidToken(token: string | undefined): boolean {
  if (!token || typeof token !== 'string') return false
  return token.trim().length > 0
}

/**
 * Rotas que exigem autenticação: /minha-biblioteca e ebooks (/book/...).
 * Quem não tiver token válido é redirecionado para / (login).
 */
function isProtectedPath(pathname: string): boolean {
  return (
    pathname === LIBRARY_PATH ||
    pathname.startsWith(LIBRARY_PATH + '/') ||
    pathname.startsWith('/book') ||
    pathname === '/book'
  )
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const token = request.cookies.get(JWT_COOKIE_NAME)?.value
  const hasValidToken = isValidToken(token)

  // / = login: se já autenticado, redireciona para a biblioteca
  if (pathname === '/') {
    if (hasValidToken) {
      return NextResponse.redirect(new URL(LIBRARY_PATH, request.url))
    }
    return NextResponse.next()
  }

  // Rota protegida sem token válido → redirect para / (login), antes de qualquer render
  if (isProtectedPath(pathname) && !hasValidToken) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/minha-biblioteca', '/minha-biblioteca/:path*', '/book', '/book/:path*'],
}
