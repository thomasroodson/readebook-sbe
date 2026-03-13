'use client'

import styled from 'styled-components'
import { theme } from '@/styles/theme'

const { breakpointMobile } = theme.layout

export const LayoutWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background: ${theme.colors.background.app};
`

export const ContentColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
`

export const Main = styled.main`
  flex: 1;
  overflow: auto;
  min-width: 0;
  max-width: 90rem;
  margin: 0 auto;
  padding: ${theme.spacing[2]};

  @media (max-width: ${breakpointMobile}) {
    padding: ${theme.spacing[1]};
  }
`

export const PageHeader = styled.header`
  margin-bottom: ${theme.spacing[1.5]};
`

export const PageTitle = styled.h1`
  margin: 0;
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.section.size};
  font-weight: ${theme.typography.section.weight};
  line-height: ${theme.typography.lineHeight.heading};
  color: ${theme.colors.gray[900]};
`

export const PageSubtitle = styled.p`
  margin: ${theme.spacing[0.5]} 0 0 0;
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.body.sizeLarge};
  line-height: ${theme.typography.lineHeight.body};
  color: ${theme.colors.gray[600]};
`

export const ContentCard = styled.section`
  background: ${theme.colors.background.card};
  border-radius: ${theme.layout.radius.card};
  box-shadow: ${theme.layout.shadow.card};
  padding: ${theme.spacing[2]};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[2]};

  @media (max-width: ${breakpointMobile}) {
    padding: ${theme.spacing[1.5]};
  }
`

export const ProfileRow = styled.div`
  display: flex;
  gap: ${theme.spacing[1.5]};
  align-items: center;
  padding: ${theme.spacing[1.5]};
  border-radius: ${theme.layout.radius.card};
  background: ${theme.colors.gray[50]};

  @media (max-width: ${breakpointMobile}) {
    align-items: flex-start;
  }
`

export const AvatarWrapper = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  background: ${theme.colors.gray[200]};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const ProfileInfo = styled.div`
  flex: 1;
`

export const ProfileTitle = styled.h2`
  margin: 0 0 ${theme.spacing[0.25]} 0;
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.sub.size};
  font-weight: ${theme.typography.sub.weight};
  line-height: ${theme.typography.lineHeight.heading};
  color: ${theme.colors.gray[900]};
`

export const ProfileDescription = styled.p`
  margin: 0 0 ${theme.spacing[1]} 0;
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.body.size};
  line-height: ${theme.typography.lineHeight.body};
  color: ${theme.colors.gray[600]};
`

export const ProfileActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing[0.75]};
`

export const SectionBlock = styled.section`
  padding: ${theme.spacing[1.5]};
  border-radius: ${theme.layout.radius.card};
  background: ${theme.colors.gray[50]};
`

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[0.5]};
  margin-bottom: ${theme.spacing[1]};
`

export const SectionTitle = styled.h3`
  margin: 0;
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.sub.size};
  font-weight: ${theme.typography.sub.weight};
  line-height: ${theme.typography.lineHeight.heading};
  color: ${theme.colors.gray[900]};
`

export const SectionDivider = styled.hr`
  border: none;
  border-top: 1px solid ${theme.colors.gray[200]};
  margin: ${theme.spacing[1.5]} 0 ${theme.spacing[1]} 0;
`

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${theme.spacing[1]};

  @media (max-width: ${breakpointMobile}) {
    grid-template-columns: 1fr;
  }
`

export const FieldGroup = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[0.5]};
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.body.size};
  color: ${theme.colors.gray[700]};
`

export const FieldLabel = styled.span`
  font-weight: 500;
`

export const TextInput = styled.input`
  height: 2.75rem;
  padding: 0 ${theme.spacing[0.75]};
  border-radius: ${theme.layout.radius.button};
  border: 1px solid ${theme.colors.gray[200]};
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.body.size};
  color: ${theme.colors.gray[900]};
  background: ${theme.colors.background.card};
  box-sizing: border-box;

  &:focus-visible {
    outline: 2px solid ${theme.colors.primary[500]};
    outline-offset: 1px;
  }
`

export const PreferencesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[0.75]};
`

export const PreferenceItem = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing[1]};
  border-radius: ${theme.layout.radius.card};
  border: 1px solid ${theme.colors.gray[200]};
  background: ${theme.colors.background.card};
  cursor: pointer;
  text-align: left;
  font-family: ${theme.typography.fontFamily};
  color: ${theme.colors.gray[800]};

  &:hover {
    border-color: ${theme.colors.primary[500]};
  }
`

export const PreferenceText = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[0.25]};
`

export const PreferenceTitle = styled.span`
  font-size: ${theme.typography.body.size};
  font-weight: 500;
`

export const PreferenceDescription = styled.span`
  font-size: ${theme.typography.caption.size};
  color: ${theme.colors.gray[600]};
`

export const PreferenceIndicator = styled.span`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: ${theme.layout.radius.card};
  border: 2px solid ${theme.colors.primary[500]};
  background: ${theme.colors.primary[500]};
`

export const PreferenceIndicatorOff = styled.span`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: ${theme.layout.radius.card};
  border: 2px solid ${theme.colors.gray[300]};
  background: ${theme.colors.background.card};
`

export const DangerZone = styled.section`
  margin-top: ${theme.spacing[2]};
  padding: ${theme.spacing[1.5]};
  border-radius: ${theme.layout.radius.card};
  background: ${theme.colors.primary[100]};
  border: 1px solid ${theme.colors.primary[500]};
`

export const DangerTitle = styled.h3`
  margin: 0 0 ${theme.spacing[0.5]} 0;
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.sub.size};
  font-weight: ${theme.typography.sub.weight};
  color: ${theme.colors.primary[600]};
`

export const DangerDescription = styled.p`
  margin: 0 0 ${theme.spacing[1]} 0;
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.body.size};
  line-height: ${theme.typography.lineHeight.body};
  color: ${theme.colors.gray[800]};
`

export const DangerActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: ${theme.spacing[1]};
`

export const ButtonRow = styled.div`
  margin-top: ${theme.spacing[2]};
  display: flex;
  justify-content: flex-end;
  gap: ${theme.spacing[1]};

  @media (max-width: ${breakpointMobile}) {
    flex-direction: column-reverse;
    align-items: stretch;
  }
`

export const PrimaryButton = styled.button`
  height: ${theme.components.buttonHeight};
  padding: 0 ${theme.spacing[1.5]};
  border-radius: ${theme.layout.radius.button};
  border: none;
  background: ${theme.colors.primary[500]};
  color: ${theme.colors.background.card};
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.body.size};
  font-weight: 600;
  cursor: pointer;
  box-shadow: ${theme.layout.shadow.card};
  transition: background 0.2s ease, transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    background: ${theme.colors.primary[600]};
    transform: translateY(-1px);
    box-shadow: ${theme.layout.shadow.cardHover};
  }
`

export const SecondaryButton = styled.button`
  height: ${theme.components.buttonHeight};
  padding: 0 ${theme.spacing[1.5]};
  border-radius: ${theme.layout.radius.button};
  border: 1px solid ${theme.colors.gray[300]};
  background: transparent;
  color: ${theme.colors.gray[800]};
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.body.size};
  font-weight: 500;
  cursor: pointer;
`

export const GhostButton = styled.button`
  height: ${theme.components.buttonHeight};
  padding: 0 ${theme.spacing[1.5]};
  border-radius: ${theme.layout.radius.button};
  border: 1px solid transparent;
  background: transparent;
  color: ${theme.colors.primary[600]};
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.body.size};
  font-weight: 500;
  cursor: pointer;
`

export const DangerButton = styled.button`
  height: ${theme.components.buttonHeight};
  padding: 0 ${theme.spacing[1.5]};
  border-radius: ${theme.layout.radius.button};
  border: none;
  background: ${theme.colors.primary[500]};
  color: ${theme.colors.background.card};
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.body.size};
  font-weight: 600;
  cursor: pointer;
`

