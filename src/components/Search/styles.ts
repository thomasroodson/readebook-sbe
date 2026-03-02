'use client'

import styled from 'styled-components'
import { theme } from '@/styles/theme'

const { buttonHeight } = theme.components
const { card: radiusCard } = theme.layout.radius

export const Wrapper = styled.div`
  flex: 1;
  max-width: 28rem;
`

export const Input = styled.input`
  width: 100%;
  height: ${buttonHeight};
  padding: 0 ${theme.spacing[1]};
  border-radius: ${radiusCard};
  background: ${theme.colors.gray[100]};
  border: none;
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.body.size};
  line-height: ${theme.typography.lineHeight.body};
  color: ${theme.colors.gray[800]};
  transition: background 0.2s ease, box-shadow 0.2s ease;
  box-sizing: border-box;

  &::placeholder {
    color: ${theme.colors.gray[500]};
  }

  &:focus {
    outline: none;
    background: ${theme.colors.gray[200]};
    box-shadow: 0 0 0 2px ${theme.colors.gray[300]};
  }
`
