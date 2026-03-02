'use client'

import { useId, type InputHTMLAttributes } from 'react'
import * as S from './styles'

export type InputProps = {
  label?: string
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

export function Input({
  label,
  error,
  id,
  className,
  ...rest
}: InputProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId
  return (
    <S.Wrapper className={className}>
      {label && (
        <S.Label htmlFor={inputId}>{label}</S.Label>
      )}
      <S.Input id={inputId} aria-invalid={!!error} aria-describedby={error ? `${inputId}-error` : undefined} {...rest} />
      {error && (
        <S.Error id={`${inputId}-error`} role="alert">
          {error}
        </S.Error>
      )}
    </S.Wrapper>
  )
}
