'use client'

import {
  createContext,
  useContext,
  useMemo,
  type ReactNode,
} from 'react'
import type { User, LibraryBook } from '@/types/user'
import { mockLoggedUser, mockUserLibrary } from '@/mocks/loggedUser'

export type UserContextValue = {
  user: User
  library: LibraryBook[]
}

const defaultValue: UserContextValue = {
  user: mockLoggedUser,
  library: mockUserLibrary,
}

const UserContext = createContext<UserContextValue>(defaultValue)

export type UserProviderProps = {
  children: ReactNode
}

export function UserProvider({ children }: UserProviderProps) {
  const value = useMemo<UserContextValue>(
    () => ({
      user: mockLoggedUser,
      library: mockUserLibrary,
    }),
    []
  )
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser(): UserContextValue {
  const context = useContext(UserContext)
  if (context == null) {
    return defaultValue
  }
  return context
}
