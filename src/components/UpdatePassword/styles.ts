'use client'

import styled from 'styled-components'
import { theme } from '@/styles/theme'

export const Wrapper = styled.div`
  width: 100%;
  max-width: 24rem;
  margin: 0 auto;
`

export const Card = styled.div`
  background: ${theme.colors.background.card};
  border-radius: ${theme.layout.radius.card};
  box-shadow: ${theme.layout.shadow.card};
  padding: ${theme.spacing[2]};
`

export const Title = styled.h1`
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.hero.size};
  font-weight: ${theme.typography.hero.weight};
  line-height: ${theme.typography.lineHeight.heading};
  color: ${theme.colors.gray[900]};
  margin: 0 0 ${theme.spacing[1.5]};
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[1.5]};
`

export const BackLink = styled.a`
  display: inline-block;
  margin-top: ${theme.spacing[1]};
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
