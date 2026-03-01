import type { Metadata } from 'next'
import { GlobalStyles } from '@/styles/GlobalStyles'

export const metadata: Metadata = {
  title: 'Next.js Boilerplate',
  description: 'Boilerplate Next.js com App Router, TypeScript e styled-components',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <GlobalStyles />
        {children}
      </body>
    </html>
  )
}
