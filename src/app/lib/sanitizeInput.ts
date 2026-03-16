/**
 * Caracteres removidos para reduzir risco de XSS e injeção em atributos/HTML.
 * Inclui ângulos, aspas, barra invertida, backtick e caracteres de controle.
 */
const DANGEROUS_PATTERN = /[<>"'`\\\x00-\x1F\x7F]/g

export type SanitizeTextOptions = {
  /** Comprimento máximo (após sanitização). Padrão: sem limite. */
  maxLength?: number
}

/**
 * Remove caracteres que podem ser usados em XSS ou injeção de código em
 * inputs de texto. Mantém letras, números, acentos, espaços e pontuação comum.
 */
export function sanitizeTextInput(
  value: string,
  options?: SanitizeTextOptions
): string {
  const cleaned = value.replace(DANGEROUS_PATTERN, '')
  const maxLen = options?.maxLength
  if (maxLen != null && cleaned.length > maxLen) {
    return cleaned.slice(0, maxLen)
  }
  return cleaned
}

/**
 * Sanitiza valor de campo de e-mail: mesmo critério de sanitizeTextInput,
 * com limite de tamanho adequado para e-mail.
 */
export function sanitizeEmailInput(
  value: string,
  options?: SanitizeTextOptions
): string {
  return sanitizeTextInput(value, { maxLength: 255, ...options })
}
