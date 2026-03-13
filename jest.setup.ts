import '@testing-library/jest-dom'
import 'jest-styled-components'

// Polyfill mínimo para Request usado internamente pelo Next em ambiente de teste
// evita erros como "ReferenceError: Request is not defined"
if (typeof (global as any).Request === 'undefined') {
  ;(global as any).Request = class Request {} as unknown as Request
}

if (typeof (global as any).Response === 'undefined') {
  ;(global as any).Response = class Response {} as unknown as Response
}
