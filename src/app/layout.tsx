import type { Metadata } from 'next'
import './globals.css'
import { HydrationFixScript } from '@/components/HydrationFix'
import { IconProvider } from '@/contexts/IconContext'
import { UserProvider } from '@/contexts/UserContext'
import { GlobalStyles } from '@/styles/GlobalStyles'
import StyledComponentsRegistry from './lib/styled-registry'

export const metadata: Metadata = {
  title: 'Dashboard SBE Shop',
  description: 'Reading Ebooks SBE',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <StyledComponentsRegistry>
          <HydrationFixScript />
          <GlobalStyles />
          <IconProvider>
            <UserProvider>
              {children}
            </UserProvider>
          </IconProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
