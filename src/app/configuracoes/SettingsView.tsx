'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  Home,
  Library,
  LogOut,
  Settings,
  HelpCircle,
  ShoppingCart,
} from 'lucide-react'
import { useUser } from '@/contexts/UserContext'
import { useLogout } from '@/app/lib/auth'
import { sanitizeTextInput, sanitizeEmailInput } from '@/app/lib/sanitizeInput'
import { AppIcon } from '@/contexts/IconContext'
import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'
import {
  SidebarSkeleton,
  HeaderSkeleton,
} from '@/components/Skeleton'
import { theme } from '@/styles/theme'
import * as S from './styles'

const sidebarItems = [
  {
    label: 'Início',
    href: '/',
    isActive: false,
    icon: <AppIcon icon={Home} />,
  },
  {
    label: 'Minha biblioteca',
    href: '/minha-biblioteca',
    isActive: false,
    icon: <AppIcon icon={Library} />,
  },
  {
    label: 'Loja SBE',
    href: 'https://sbeshop.com.br',
    icon: <AppIcon icon={ShoppingCart} />,
    target: '_blank' as const,
  },
]

const getSidebarBottomItems = (onLogout: () => void) => [
  {
    label: 'Configurações',
    href: '/configuracoes',
    isActive: true,
    icon: <AppIcon icon={Settings} />,
  },
  {
    label: 'Ajuda',
    href: '/ajuda',
    icon: <AppIcon icon={HelpCircle} />,
  },
  {
    label: 'Sair',
    icon: <AppIcon icon={LogOut} />,
    onClick: onLogout,
  },
]

const logoContent = (
  <Link
    href="/"
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      textDecoration: 'none',
      color: 'inherit',
    }}
  >
    <Home size={20} aria-hidden />
    <strong>BookBase</strong>
  </Link>
)

export function SettingsView() {
  const logout = useLogout()
  const { user } = useUser()
  const [isLoading, setIsLoading] = useState(true)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [fullName, setFullName] = useState(user.name)
  const [email, setEmail] = useState(user.email)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false)
    }, 400)

    return () => clearTimeout(timeoutId)
  }, [])

  useEffect(() => {
    setFullName(user.name)
    setEmail(user.email)
  }, [user.name, user.email])

  // Em desktop, o sidebar sempre deve estar aberto
  useEffect(() => {
    const breakpointMobile = theme.layout.breakpointMobile
    const mediaQuery = window.matchMedia(`(min-width: ${breakpointMobile})`)

    const handleMediaChange = (
      e: MediaQueryListEvent | MediaQueryList,
    ) => {
      if (e.matches) {
        setIsSidebarOpen(true)
      } else {
        setIsSidebarOpen(false)
      }
    }

    handleMediaChange(mediaQuery)

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleMediaChange)
      return () =>
        mediaQuery.removeEventListener('change', handleMediaChange)
    }

    mediaQuery.addListener(handleMediaChange)
    return () => mediaQuery.removeListener(handleMediaChange)
  }, [])

  const handleMenuToggle = () => {
    setIsSidebarOpen((prev) => !prev)
  }

  const handleSidebarClose = () => {
    setIsSidebarOpen(false)
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
  }

  const avatarFallback =
    'https://api.dicebear.com/7.x/avataaars/svg?seed=settings'

  return (
    <S.LayoutWrapper>
      {isLoading ? (
        <SidebarSkeleton />
      ) : (
        <Sidebar
          logo={logoContent}
          items={sidebarItems}
          bottomItems={getSidebarBottomItems(logout)}
          isOpen={isSidebarOpen}
          onClose={handleSidebarClose}
        />
      )}
      <S.ContentColumn>
        {isLoading ? (
          <HeaderSkeleton />
        ) : (
          <Header
            profileProps={{
              avatarSrc: user.avatarUrl ?? undefined,
              avatarAlt: user.name,
              logoutLabel: 'Sair',
              onLogout: logout,
            }}
            onMenuToggle={handleMenuToggle}
          />
        )}
        <S.Main>
          <S.PageHeader>
            <S.PageTitle>Configurações da conta</S.PageTitle>
            <S.PageSubtitle>
              Atualize suas informações pessoais e preferências da conta.
            </S.PageSubtitle>
          </S.PageHeader>

          <form onSubmit={handleSubmit}>
            <S.ContentCard aria-labelledby="profile-settings-heading">
              <S.ProfileRow>
                <S.AvatarWrapper>
                  <S.AvatarImage
                    src={user.avatarUrl ?? avatarFallback}
                    alt={user.name}
                  />
                </S.AvatarWrapper>
                <S.ProfileInfo>
                  <S.ProfileTitle id="profile-settings-heading">
                    Foto do perfil
                  </S.ProfileTitle>
                  <S.ProfileDescription>
                    Essa foto será exibida no seu perfil e nas suas
                    avaliações de livros.
                  </S.ProfileDescription>
                  <S.ProfileActions>
                    <S.PrimaryButton type="button">
                      Enviar nova foto
                    </S.PrimaryButton>
                    <S.SecondaryButton type="button">
                      Remover
                    </S.SecondaryButton>
                  </S.ProfileActions>
                </S.ProfileInfo>
              </S.ProfileRow>

              <S.SectionBlock aria-labelledby="personal-info-heading">
                <S.SectionHeader>
                  <S.SectionTitle id="personal-info-heading">
                    Informações pessoais
                  </S.SectionTitle>
                </S.SectionHeader>
                <S.FormGrid>
                  <S.FieldGroup>
                    <S.FieldLabel>Nome completo</S.FieldLabel>
                    <S.TextInput
                      type="text"
                      name="fullName"
                      value={fullName}
                      onChange={(e) =>
                        setFullName(
                          sanitizeTextInput(e.target.value, { maxLength: 200 })
                        )
                      }
                    />
                  </S.FieldGroup>
                  <S.FieldGroup>
                    <S.FieldLabel>E-mail</S.FieldLabel>
                    <S.TextInput
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) =>
                        setEmail(sanitizeEmailInput(e.target.value))
                      }
                    />
                  </S.FieldGroup>
                </S.FormGrid>
              </S.SectionBlock>

              <S.SectionBlock aria-labelledby="security-heading">
                <S.SectionHeader>
                  <S.SectionTitle id="security-heading">
                    Segurança
                  </S.SectionTitle>
                </S.SectionHeader>

                <S.FormGrid>
                  <S.FieldGroup>
                    <S.FieldLabel>Senha atual</S.FieldLabel>
                    <S.TextInput
                      type="password"
                      name="currentPassword"
                      placeholder="********"
                    />
                  </S.FieldGroup>
                  <div />
                  <S.FieldGroup>
                    <S.FieldLabel>Nova senha</S.FieldLabel>
                    <S.TextInput
                      type="password"
                      name="newPassword"
                      placeholder="********"
                    />
                  </S.FieldGroup>
                  <S.FieldGroup>
                    <S.FieldLabel>Confirmar nova senha</S.FieldLabel>
                    <S.TextInput
                      type="password"
                      name="confirmNewPassword"
                      placeholder="********"
                    />
                  </S.FieldGroup>
                </S.FormGrid>
              </S.SectionBlock>

              <S.SectionBlock aria-labelledby="preferences-heading">
                <S.SectionHeader>
                  <S.SectionTitle id="preferences-heading">
                    Preferências
                  </S.SectionTitle>
                </S.SectionHeader>

                <S.PreferencesList>
                  <S.PreferenceItem type="button">
                    <S.PreferenceText>
                      <S.PreferenceTitle>Newsletter</S.PreferenceTitle>
                      <S.PreferenceDescription>
                        Receba recomendações de leitura e novidades da
                        loja por e-mail.
                      </S.PreferenceDescription>
                    </S.PreferenceText>
                    <S.PreferenceIndicator aria-hidden="true" />
                  </S.PreferenceItem>

                  <S.PreferenceItem type="button">
                    <S.PreferenceText>
                      <S.PreferenceTitle>Perfil público</S.PreferenceTitle>
                      <S.PreferenceDescription>
                        Permitir que outras pessoas vejam suas listas e
                        progresso de leitura.
                      </S.PreferenceDescription>
                    </S.PreferenceText>
                    <S.PreferenceIndicatorOff aria-hidden="true" />
                  </S.PreferenceItem>
                </S.PreferencesList>
              </S.SectionBlock>

              <S.DangerZone aria-labelledby="danger-zone-heading">
                <S.DangerTitle id="danger-zone-heading">
                  Zona de risco
                </S.DangerTitle>
                <S.DangerDescription>
                  Excluir sua conta é uma ação permanente e não pode ser
                  desfeita. Todos os seus dados e histórico de leitura
                  serão removidos.
                </S.DangerDescription>
                <S.DangerActions>
                  <S.GhostButton type="button">
                    Saiba mais sobre privacidade
                  </S.GhostButton>
                  <S.DangerButton type="button">
                    Excluir conta
                  </S.DangerButton>
                </S.DangerActions>
              </S.DangerZone>
            </S.ContentCard>

            <S.ButtonRow>
              <S.SecondaryButton type="button">Cancelar</S.SecondaryButton>
              <S.PrimaryButton type="submit">
                Salvar alterações
              </S.PrimaryButton>
            </S.ButtonRow>
          </form>
        </S.Main>
      </S.ContentColumn>
    </S.LayoutWrapper>
  )
}

