'use client'

import styled from 'styled-components'
import { theme } from '@/styles/theme'

const { topbarHeight, topbarPaddingX, breakpointMobile } = theme.layout

export const Wrapper = styled.header`
  height: ${topbarHeight};
  padding: 0 ${topbarPaddingX};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${theme.spacing[1.5]};
  background: ${theme.colors.background.card};
  border-bottom: 1px solid ${theme.colors.gray[200]};
  flex-shrink: 0;
  box-sizing: border-box;

  @media (max-width: ${breakpointMobile}) {
    height: ${theme.layout.topbarHeightMobile};
    padding: 0 ${theme.layout.topbarPaddingXMobile};
  }
`

export const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: ${theme.spacing[0.5]};
  color: ${theme.colors.gray[700]};
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease;

  &:hover {
    color: ${theme.colors.gray[900]};
  }

  @media (max-width: ${breakpointMobile}) {
    display: flex;
  }
`

export const SearchSlot = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  justify-content: end;

  @media (max-width: ${breakpointMobile}) {
    justify-content: flex-start;
  }
`

export const ProfileSlot = styled.div`
  flex-shrink: 0;
`
