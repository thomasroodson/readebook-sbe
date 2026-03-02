'use client'

import styled from 'styled-components'
import { theme } from '@/styles/theme'

const { buttonHeight } = theme.components
const { card: radiusCard } = theme.layout

export const Wrapper = styled.div`
  width: 100%;
`

export const Label = styled.label`
  display: block;
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.body.size};
  font-weight: 600;
  color: ${theme.colors.gray[700]};
  margin-bottom: ${theme.spacing[0.5]};
`

export const Input = styled.input`
  width: 100%;
  height: ${buttonHeight};
  padding: 0 ${theme.spacing[1]};
  border-radius: ${radiusCard};
  background: ${theme.colors.gray[100]};
  border: 1px solid ${theme.colors.gray[200]};
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.body.size};
  line-height: ${theme.typography.lineHeight.body};
  color: ${theme.colors.gray[800]};
  transition: background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  box-sizing: border-box;

  &::placeholder {
    color: ${theme.colors.gray[500]};
  }

  &:focus {
    outline: none;
    background: ${theme.colors.background.card};
    border-color: ${theme.colors.primary[500]};
    box-shadow: 0 0 0 2px ${theme.colors.primary[100]};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

export const Error = styled.span`
  display: block;
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.caption.size};
  color: ${theme.colors.primary[500]};
  margin-top: ${theme.spacing[0.25]};
`
