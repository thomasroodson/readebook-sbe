import type { Metadata } from 'next'
import { HydrationFixScript } from '@/components/HydrationFix'
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
    <html lang="pt-BR" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <HydrationFixScript />
        <GlobalStyles />
        {children}
      </body>
    </html>
  )
}
