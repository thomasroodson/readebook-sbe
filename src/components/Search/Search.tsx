'use client'

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
    onChange?.(e.target.value)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.currentTarget.blur()
      onSearch?.(e.currentTarget.value)
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
