'use client'

import styled from 'styled-components'
import { theme } from '@/styles/theme'

const { sidebarWidth, navItemHeight, navItemPadding, navItemGap, radius } =
  theme.layout

export const Wrapper = styled.nav`
  width: ${sidebarWidth};
  padding: ${theme.spacing[1.5]};
  background: ${theme.colors.background.card};
  border-right: 1px solid ${theme.colors.gray[200]};
  display: flex;
  flex-direction: column;
`

export const LogoContainer = styled.div`
  margin-bottom: ${theme.spacing[1.5]};
`

export const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[0.5]};
`

export const NavItem = styled.div<{ $isActive?: boolean }>`
  height: ${navItemHeight};
  padding: ${navItemPadding};
  border-radius: ${radius.navItem};
  display: flex;
  align-items: center;
  gap: ${navItemGap};
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.body.size};
  line-height: ${theme.typography.lineHeight.body};
  color: ${({ $isActive }) =>
    $isActive ? theme.colors.primary[600] : theme.colors.gray[700]};
  background: ${({ $isActive }) =>
    $isActive ? theme.colors.primary[100] : 'transparent'};
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;
  box-sizing: border-box;

  &:hover {
    background: ${({ $isActive }) =>
      $isActive ? theme.colors.primary[100] : theme.colors.gray[100]};
  }
`

export const Separator = styled.div`
  margin: ${theme.spacing[1.5]} 0;
  border-top: 1px solid ${theme.colors.gray[200]};
`
