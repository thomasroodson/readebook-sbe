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

export const MainAsideRow = styled.div`
  display: flex;
  flex: 1;
  gap: ${theme.spacing[1.5]};
  padding: ${theme.spacing[2]};
  padding-top: ${theme.spacing[1]};

  @media (max-width: ${breakpointMobile}) {
    flex-direction: column;
  }
`

export const Main = styled.main`
  flex: 1;
  overflow: auto;
  min-width: 0;
  padding-bottom: ${theme.spacing[1]};
`

export const Section = styled.section`
  margin-top: ${theme.spacing[1.5]};
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
  grid-template-columns: repeat(6, minmax(auto, max-content));
  gap: ${theme.spacing[1.5]};
  justify-content: center;

  @media (max-width: ${breakpointMobile}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing[0.75]};
  }
`

export const PaginationWrapper = styled.nav`
  margin-top: ${theme.spacing[1]};
  display: flex;
  justify-content: center;
  gap: ${theme.spacing[0.5]};
  font-family: ${theme.typography.fontFamily};
`

export const PaginationButton = styled.button<{ $active?: boolean }>`
  min-width: 2rem;
  padding: ${theme.spacing[0.25]} ${theme.spacing[0.5]};
  border-radius: ${theme.layout.radius.pill};
  border: 1px solid
    ${(props) =>
      props.$active ? theme.colors.primary[500] : theme.colors.gray[300]};
  background: ${(props) =>
    props.$active ? theme.colors.primary[500] : theme.colors.background.card};
  color: ${(props) =>
    props.$active ? theme.colors.background.card : theme.colors.gray[800]};
  font-size: ${theme.typography.caption.size};
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`
