'use client'

import styled from 'styled-components'
import { theme } from '@/styles/theme'

const { breakpointMobile, radius, shadow } = theme.layout
const { bookCover } = theme.components

export const Card = styled.div`
  padding: ${theme.spacing[1.5]} ${theme.spacing[0.5]} 0px ${theme.spacing[0.5]};
  display: flex;
  flex-direction: column;
  width: min-content;
  border-radius: ${radius.card};
  box-shadow: ${shadow.card};
  background: ${theme.colors.background.card};
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-decoration: none;
  color: inherit;

  @media (min-width: ${breakpointMobile}) {
    &:hover {
      transform: scale(1.02) translateY(-0.25rem);
      box-shadow: ${shadow.cardHover};
    }
  }
`

export const CoverWrapper = styled.div`
  width: ${bookCover.widthDesktop};
  height: ${bookCover.heightDesktop};
  flex-shrink: 0;
  //border-radius: ${radius.card};
  overflow: hidden;
  background: ${theme.colors.gray[100]};

  @media (max-width: ${breakpointMobile}) {
    width: ${bookCover.widthMobile};
    height: ${bookCover.heightMobile};
  }
`

export const CoverImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`

export const Info = styled.div`
  padding: ${theme.spacing[0.75]} ${theme.spacing[0.5]} ${theme.spacing[0.5]};
  min-width: 0;
`

export const Title = styled.h3`
  margin: 0;
  font-size: ${theme.typography.body.size};
  font-weight: 600;
  line-height: ${theme.typography.lineHeight.heading};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-family: ${theme.typography.fontFamily};
`

export const Author = styled.p`
  margin: ${theme.spacing[0.25]} 0 0;
  font-size: ${theme.typography.caption.size};
  line-height: 1.4;
  color: ${theme.colors.gray[500]};
  font-family: ${theme.typography.fontFamily};
`
