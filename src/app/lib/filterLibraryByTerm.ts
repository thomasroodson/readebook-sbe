import type { LibraryBook } from '@/types/user'

/**
 * Normaliza texto para comparação: minúsculas e sem acentos.
 */
function normalizeForSearch(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
}

/**
 * Filtra a lista de livros por termo de busca (título ou autor).
 * Só aplica o filtro quando o termo tem 3 ou mais caracteres (após trim).
 */
export function filterLibraryByTerm(
  books: LibraryBook[],
  term: string
): LibraryBook[] {
  const trimmed = term.trim()
  if (trimmed.length < 3) {
    return books
  }
  const normalizedTerm = normalizeForSearch(trimmed)
  return books.filter((book) => {
    const titleMatch = normalizeForSearch(book.title).includes(normalizedTerm)
    const authorMatch = normalizeForSearch(book.author).includes(normalizedTerm)
    return titleMatch || authorMatch
  })
}
