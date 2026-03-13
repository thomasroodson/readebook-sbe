/**
 * Tipos para usuário logado e biblioteca (livros em leitura).
 * Compatível com BookCard (title, author, coverImage, progress, páginas).
 */

export type User = {
  id: string
  name: string
  email: string
  avatarUrl: string | null
}

export type LibraryBook = {
  id: string
  title: string
  author: string
  coverImage: { src: string; alt?: string }
  /** Porcentagem de leitura (0–100). */
  progress: number
  href?: string
  /** Página atual e total de páginas (opcional). */
  currentPage?: number
  totalPages?: number
}
