'use client'

import {
  createContext,
  useContext,
  useMemo,
  type ComponentType,
  type ReactNode,
} from 'react'

type IconComponentProps = {
  size?: number
  color?: string
  strokeWidth?: number
  className?: string
}

export type IconContextValue = {
  size?: number
  color?: string
  strokeWidth?: number
}

const defaultValue: IconContextValue = {
  size: 20,
  color: 'currentColor',
  strokeWidth: 2,
}

const IconContext = createContext<IconContextValue>(defaultValue)

export type IconProviderProps = {
  children: ReactNode
  size?: number
  color?: string
  strokeWidth?: number
}

export function IconProvider({
  children,
  size = defaultValue.size,
  color = defaultValue.color,
  strokeWidth = defaultValue.strokeWidth,
}: IconProviderProps) {
  const value = useMemo<IconContextValue>(
    () => ({ size, color, strokeWidth }),
    [size, color, strokeWidth]
  )
  return (
    <IconContext.Provider value={value}>{children}</IconContext.Provider>
  )
}

export function useIconContext(): IconContextValue {
  return useContext(IconContext)
}

export type AppIconProps = {
  icon: ComponentType<IconComponentProps>
  size?: number
  color?: string
  strokeWidth?: number
  className?: string
}

/**
 * Renderiza um ícone Lucide aplicando os valores do IconContext.
 * Props passadas sobrescrevem o contexto.
 */
export function AppIcon({
  icon: Icon,
  size,
  color,
  strokeWidth,
  className,
}: AppIconProps) {
  const context = useIconContext()
  return (
    <Icon
      size={size ?? context.size}
      color={color ?? context.color}
      strokeWidth={strokeWidth ?? context.strokeWidth}
      className={className}
    />
  )
}
