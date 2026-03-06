'use client'

import Link from 'next/link'
import styled from 'styled-components'
import { theme } from '@/styles/theme'

const { breakpointMobile } = theme.layout

export const PageWrapper = styled.div`
  min-height: 100vh;
  background: ${theme.colors.background.app};
`

export const Content = styled.main`
  max-width: 60rem;
  margin: 0 auto;
  padding: ${theme.spacing[2]};

  @media (max-width: ${breakpointMobile}) {
    padding: ${theme.spacing[1.5]};
  }
`

export const HeaderRow = styled.header`
  margin-bottom: ${theme.spacing[1.5]};
`

export const BookTitle = styled.h1`
  margin: 0;
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.section.size};
  font-weight: ${theme.typography.section.weight};
  line-height: ${theme.typography.lineHeight.heading};
  color: ${theme.colors.gray[900]};
`

export const BookAuthor = styled.p`
  margin: ${theme.spacing[0.25]} 0 0;
  font-family: ${theme.typography.typography};
  font-size: ${theme.typography.body.size};
  line-height: ${theme.typography.lineHeight.body};
  color: ${theme.colors.gray[600]};
`

export const ProgressWrapper = styled.div`
  margin-top: ${theme.spacing[1]};
`

export const ProgressLabelRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing[0.5]};
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.caption.size};
  color: ${theme.colors.gray[600]};
`

export const ProgressTrack = styled.div`
  width: 100%;
  height: 0.375rem;
  border-radius: ${theme.layout.radius.pill};
  background: ${theme.colors.gray[200]};
  overflow: hidden;
`

export const ProgressFill = styled.div<{ $progress: number }>`
  height: 100%;
  width: ${(p) => Math.min(100, Math.max(0, p.$progress))}%;
  border-radius: ${theme.layout.radius.pill};
  background: ${theme.colors.primary[500]};
  transition: width 0.2s ease;
`

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing[0.25]};
  margin-bottom: ${theme.spacing[1.5]};
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.body.size};
  color: ${theme.colors.primary[600]};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const ReadingArea = styled.section`
  margin-top: ${theme.spacing[2]};
  padding: ${theme.spacing[1.5]};
  border-radius: ${theme.layout.radius.card};
  background: ${theme.colors.background.card};
  box-shadow: ${theme.layout.shadow.card};
`

export const Paragraph = styled.p`
  margin: 0 0 ${theme.spacing[1]} 0;
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.body.sizeLarge};
  line-height: ${theme.typography.lineHeight.body};
  color: ${theme.colors.gray[800]};

  &:last-child {
    margin-bottom: 0;
  }
`

export const NotFoundMessage = styled.p`
  margin-top: ${theme.spacing[2]};
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.body.size};
  color: ${theme.colors.gray[600]};
`

