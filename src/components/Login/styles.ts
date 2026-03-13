'use client'

import styled from 'styled-components'
import { theme } from '@/styles/theme'

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background: #e8eef2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing[2]};
  box-sizing: border-box;
`

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 56rem;
  min-height: 28rem;
  background: ${theme.colors.background.card};
  border-radius: ${theme.layout.radius.card};
  box-shadow: ${theme.layout.shadow.card};
  overflow: hidden;

  @media (max-width: ${theme.layout.breakpointMobile}) {
    flex-direction: column;
    max-width: 24rem;
    min-height: auto;
  }
`

export const PanelVisual = styled.div`
  flex: 1;
  min-width: 0;
  position: relative;
  background-image: url('/assets/images/bg-login.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
    pointer-events: none;
  }

  @media (max-width: ${theme.layout.breakpointMobile}) {
    min-height: 12.5rem;
  }
`

export const QuoteBlock = styled.div`
  position: relative;
  z-index: 1;
  padding: ${theme.spacing[3]};
`

export const Quote = styled.p`
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.body.sizeLarge};
  font-style: italic;
  line-height: ${theme.typography.lineHeight.body};
  color: #fff;
  margin: 0 0 ${theme.spacing[0.5]};
`

export const Author = styled.span`
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.body.size};
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
`

export const PanelForm = styled.div`
  flex: 1;
  min-width: 0;
  background: ${theme.colors.background.card};
  padding: ${theme.spacing[3]};
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${theme.layout.breakpointMobile}) {
    padding: ${theme.spacing[2]};
  }
`

export const Title = styled.h1`
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.hero.size};
  font-weight: ${theme.typography.hero.weight};
  line-height: ${theme.typography.lineHeight.heading};
  color: ${theme.colors.gray[900]};
  margin: 0 0 ${theme.spacing[0.75]};
`

export const WelcomeText = styled.p`
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.body.size};
  line-height: ${theme.typography.lineHeight.body};
  color: ${theme.colors.gray[600]};
  margin: 0 0 ${theme.spacing[2]};
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[1.5]};
`

export const SecureAccess = styled.p`
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.caption.size};
  color: ${theme.colors.gray[500]};
  margin: ${theme.spacing[1]} 0 0;
`

export const SubmitButton = styled.button`
  height: ${theme.components.buttonHeight};
  padding: 0 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  font-family: ${theme.typography.fontFamily};
  color: #fff;
  background: ${theme.colors.primary[500]};
  border: none;
  border-radius: ${theme.layout.radius.button};
  cursor: pointer;
  transition: background 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing[0.5]};

  &:hover:not(:disabled) {
    background: ${theme.colors.primary[600]};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
`

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[0.5]};
  margin-top: ${theme.spacing[1]};
  text-align: center;
`

export const Link = styled.a`
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.body.size};
  color: ${theme.colors.primary[500]};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${theme.colors.primary[600]};
    text-decoration: underline;
  }
`

export const ErrorMessage = styled.span`
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.body.size};
  color: ${theme.colors.primary[500]};
`

export const InputRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[0.5]};

  svg {
    flex-shrink: 0;
    color: ${theme.colors.gray[500]};
  }
`
