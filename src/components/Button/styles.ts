'use client'

import styled from 'styled-components'
import { theme } from '@/styles/theme'

export const Button = styled.button`
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

  &:hover {
    background: ${theme.colors.primary[600]};
  }
`
