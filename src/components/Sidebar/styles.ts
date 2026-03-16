'use client'

import styled from 'styled-components'
import { theme } from '@/styles/theme'

const { sidebarWidth, navItemHeight, navItemPadding, navItemGap, radius, breakpointMobile } =
  theme.layout

export const Overlay = styled.div`
  display: none;

  @media (max-width: ${breakpointMobile}) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 998;
  }

  @media (min-width: calc(${breakpointMobile} + 0.01rem)) {
    display: none !important;
  }
`

export const Wrapper = styled.nav<{ $isOpen?: boolean }>`
  width: ${sidebarWidth};
  padding: ${theme.spacing[1.5]};
  background: ${theme.colors.background.card};
  border-right: 1px solid ${theme.colors.gray[200]};
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 999;

  @media (max-width: ${breakpointMobile}) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '-100%')});
    transition: transform 0.3s ease-in-out;
    z-index: 999;
  }

  @media (min-width: calc(${breakpointMobile} + 0.01rem)) {
    transform: translateX(0) !important;
  }
`

export const LogoContainer = styled.div`
  margin-bottom: ${theme.spacing[3]};
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
