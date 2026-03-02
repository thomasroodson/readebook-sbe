'use client'

import styled from 'styled-components'
import { theme } from '@/styles/theme'

const { card: radiusCard, navItem: radiusNavItem } = theme.layout.radius

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${theme.spacing[0.75]};
`

export const Avatar = styled.button`
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  border: none;
  background: ${theme.colors.gray[200]};
  cursor: pointer;
  overflow: hidden;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: ${theme.colors.gray[300]};
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.primary[500]};
    outline-offset: 2px;
  }
`

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Submenu = styled.div`
  position: absolute;
  top: calc(100% + ${theme.spacing[0.5]});
  right: 0;
  min-width: 10rem;
  padding: ${theme.spacing[0.5]};
  background: ${theme.colors.background.card};
  border-radius: ${radiusCard};
  box-shadow: ${theme.layout.shadow.card};
  border: 1px solid ${theme.colors.gray[200]};
  z-index: 100;
`

export const SubmenuItem = styled.button`
  width: 100%;
  height: ${theme.layout.navItemHeight};
  padding: 0 ${theme.spacing[0.75]};
  border: none;
  border-radius: ${radiusNavItem};
  background: transparent;
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.body.size};
  line-height: ${theme.typography.lineHeight.body};
  color: ${theme.colors.gray[700]};
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${theme.spacing[0.5]};
  transition: background 0.2s ease, color 0.2s ease;
  box-sizing: border-box;

  &:hover {
    background: ${theme.colors.gray[100]};
    color: ${theme.colors.gray[900]};
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.primary[500]};
    outline-offset: -2px;
  }
`

export const LogoutItem = styled.button`
  width: 100%;
  height: ${theme.layout.navItemHeight};
  padding: 0 ${theme.spacing[0.75]};
  border: none;
  border-radius: ${radiusNavItem};
  background: transparent;
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.body.size};
  line-height: ${theme.typography.lineHeight.body};
  color: ${theme.colors.primary[600]};
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${theme.spacing[0.5]};
  transition: background 0.2s ease, color 0.2s ease;
  box-sizing: border-box;

  &:hover {
    background: ${theme.colors.primary[100]};
    color: ${theme.colors.primary[600]};
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.primary[500]};
    outline-offset: -2px;
  }
`
