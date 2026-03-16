'use client'

import { sanitizeTextInput } from '@/app/lib/sanitizeInput'
import * as S from './styles'

export type SearchProps = {
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  onSearch?: (value: string) => void
} & Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'onSubmit'
>

export function Search({
  placeholder = 'Buscar...',
  value,
  onChange,
  onSearch,
  ...rest
}: SearchProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const safe = sanitizeTextInput(e.target.value, { maxLength: 200 })
    onChange?.(safe)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.currentTarget.blur()
      const safe = sanitizeTextInput(e.currentTarget.value, { maxLength: 200 })
      onSearch?.(safe)
    }
  }

  return (
    <S.Wrapper>
      <S.Input
        type="search"
        role="searchbox"
        aria-label="Buscar"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        {...rest}
      />
    </S.Wrapper>
  )
}
