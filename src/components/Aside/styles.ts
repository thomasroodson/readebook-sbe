'use client'

import styled, { css } from 'styled-components'
import { theme } from '@/styles/theme'

const { asideWidth, breakpointMobile, radius } = theme.layout
const { bookCover } = theme.components

export const Wrapper = styled.aside`
  width: ${asideWidth};
  padding: ${theme.spacing[1.5]};
  border-radius: ${theme.spacing[1]};
  background: ${theme.colors.primary[500]};
  color: white;
  flex-shrink: 0;
  box-sizing: border-box;

  @media (max-width: ${breakpointMobile}) {
    width: 100%;
    padding: 1.25rem;
  }
`

export const Title = styled.h2`
  margin: 0 0 ${theme.spacing[0.5]} 0;
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.sub.size};
  font-weight: ${theme.typography.sub.weight};
  line-height: ${theme.typography.lineHeight.heading};
  color: inherit;
`

export const Description = styled.p`
  margin: 0 0 ${theme.spacing[1]} 0;
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.body.size};
  line-height: ${theme.typography.lineHeight.body};
  color: rgba(255, 255, 255, 0.95);
`

export const CoverWrapper = styled.div`
  width: 100%;
  margin-bottom: ${theme.spacing[1]};
  border-radius: ${radius.card};
  overflow: hidden;
  background: ${theme.colors.gray[200]};
  height: ${bookCover.heightDesktop};

  @media (max-width: ${breakpointMobile}) {
    height: ${bookCover.heightMobile};
  }
`

export const CoverImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`

const ctaBase = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${theme.components.buttonHeight};
  padding: 0 ${theme.spacing[1]};
  border: none;
  border-radius: ${radius.button};
  background: white;
  color: ${theme.colors.primary[600]};
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.body.size};
  font-weight: 600;
  line-height: ${theme.typography.lineHeight.body};
  cursor: pointer;
  transition: transform 0.2s ease;
  box-sizing: border-box;
  text-decoration: none;

  &:visited {
    color: ${theme.colors.primary[600]};
  }

  @media (min-width: ${breakpointMobile}) {
    &:hover {
      transform: translateY(-0.125rem);
    }
  }

  &:focus-visible {
    outline: 2px solid white;
    outline-offset: 2px;
  }
`

export const CtaButton = styled.button`
  ${ctaBase}
`

export const CtaLink = styled.a`
  ${ctaBase}
`
