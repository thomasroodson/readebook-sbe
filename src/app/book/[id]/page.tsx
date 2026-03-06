'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import {
  Home,
  Library,
  LogOut,
  Settings,
  HelpCircle,
} from 'lucide-react'
import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'
import { AppIcon } from '@/contexts/IconContext'
import { useUser } from '@/contexts/UserContext'
import { theme } from '@/styles/theme'
import * as LayoutS from '@/app/minha-biblioteca/styles'
import * as S from './styles'

const sidebarItems = [
  { label: 'Início', href: '/', isActive: false, icon: <AppIcon icon={Home} /> },
  {
    label: 'Minha biblioteca',
    href: '/minha-biblioteca',
    isActive: true,
    icon: <AppIcon icon={Library} />,
  },
]
const sidebarBottomItems = [
  { label: 'Configurações', href: '/configuracoes', icon: <AppIcon icon={Settings} /> },
  { label: 'Ajuda', href: '/ajuda', icon: <AppIcon icon={HelpCircle} /> },
  { label: 'Sair', href: '/', icon: <AppIcon icon={LogOut} /> },
]
const logoContent = (
  <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'inherit' }}>
    <Home size={20} aria-hidden />
    <strong>BookBase</strong>
  </Link>
)

const LOREM_PARAGRAPHS: string[] = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl ut aliquam ultricies, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl. Integer euismod, nisl vitae aliquam aliquam, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl.',
  'Suspendisse potenti. Mauris euismod, nisl vitae aliquam aliquam, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl. Integer euismod, nisl vitae aliquam aliquam, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl.',
  'Curabitur euismod, nisl vitae aliquam aliquam, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl. Integer euismod, nisl vitae aliquam aliquam, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl.',
]

export default function BookPage() {
  const params = useParams<{ id: string }>()
  const { user, library } = useUser()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${theme.layout.breakpointMobile})`)
    const handle = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) setIsSidebarOpen(true)
      else setIsSidebarOpen(false)
    }
    handle(mq)
    mq.addEventListener?.('change', handle)
    return () => mq.removeEventListener?.('change', handle)
  }, [])

  const bookIdFromRoute = params?.id

  const book = useMemo(
    () =>
      library.find((item) => {
        if (!bookIdFromRoute) return false
        const numericId = Number(bookIdFromRoute)
        if (!Number.isNaN(numericId)) {
          return item.id === `book-${numericId}` || item.href === `/book/${numericId}`
        }
        return item.id === bookIdFromRoute
      }),
    [library, bookIdFromRoute]
  )

  return (
    <LayoutS.LayoutWrapper>
      <Sidebar
        logo={logoContent}
        items={sidebarItems}
        bottomItems={sidebarBottomItems}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <LayoutS.ContentColumn>
        <Header
          profileProps={{
            avatarSrc: user.avatarUrl ?? undefined,
            avatarAlt: user.name,
            logoutLabel: 'Sair',
            onLogout: () => {},
          }}
          onMenuToggle={() => setIsSidebarOpen((o) => !o)}
        />
        <S.Content>
          <S.BackLink href="/minha-biblioteca">
            &larr; Voltar para a biblioteca
          </S.BackLink>

          {book == null ? (
          <S.NotFoundMessage>
            Não encontramos este livro na sua biblioteca.
          </S.NotFoundMessage>
        ) : (
          <>
            <S.HeaderRow>
              <S.BookTitle>{book.title}</S.BookTitle>
              <S.BookAuthor>{book.author}</S.BookAuthor>

              <S.ProgressWrapper>
                <S.ProgressLabelRow>
                  <span>Progresso de leitura</span>
                  <span>{book.progress}%</span>
                </S.ProgressLabelRow>
                <S.ProgressTrack
                  role="progressbar"
                  aria-valuenow={book.progress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <S.ProgressFill $progress={book.progress} />
                </S.ProgressTrack>
              </S.ProgressWrapper>
            </S.HeaderRow>

            <S.ReadingArea>
              {LOREM_PARAGRAPHS.map((paragraph) => (
                <S.Paragraph key={paragraph}>{paragraph}</S.Paragraph>
              ))}
            </S.ReadingArea>
          </>
        )}
        </S.Content>
      </LayoutS.ContentColumn>
    </LayoutS.LayoutWrapper>
  )
}

