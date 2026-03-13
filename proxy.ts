import { NextRequest, NextResponse } from 'next/server'

const PROTECTED_ROUTES = ['/minha-biblioteca']
const PUBLIC_ROUTES = ['/']
const JWT_COOKIE_NAME = 'sbe_jwt'

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  const isProtectedRoute = PROTECTED_ROUTES.includes(pathname)
  const isPublicRoute = PUBLIC_ROUTES.includes(pathname)

  const token = request.cookies.get(JWT_COOKIE_NAME)?.value
  const isAuthenticated = Boolean(token)

  if (isProtectedRoute && !isAuthenticated) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  if (isPublicRoute && isAuthenticated) {
    return NextResponse.redirect(new URL('/minha-biblioteca', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}

