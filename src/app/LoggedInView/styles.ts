'use client'

import styled from 'styled-components'
import { theme } from '@/styles/theme'

const { breakpointMobile } = theme.layout

export const Main = styled.main`
  padding: ${theme.spacing[2]};
  background: ${theme.colors.background.app};
  min-height: 100vh;
`

export const Section = styled.section`
  margin-top: ${theme.spacing[3]};
`

export const SectionTitle = styled.h2`
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.section.size};
  font-weight: ${theme.typography.section.weight};
  line-height: ${theme.typography.lineHeight.heading};
  color: ${theme.colors.gray[800]};
  margin: 0 0 ${theme.spacing[1.5]} 0;
`

export const BookGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(9rem, 1fr));
  gap: ${theme.spacing[1.5]};

  @media (max-width: ${breakpointMobile}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing[0.75]};
  }
`
