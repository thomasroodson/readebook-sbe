# ebook-sbe – Reading Dashboard

SaaS de dashboard de leitura (livros, categorias, progresso). Interface limpa e minimalista, com design system definido, TypeScript em modo strict, testes com Jest e documentação em Storybook.

## Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript 5**
- **styled-components** (com compiler do Next.js)
- **Jest** + **React Testing Library** + **jest-styled-components**
- **Storybook 8** com `@storybook/nextjs`
- **ESLint** (flat config) + **Prettier**
- **EditorConfig**
- **Husky** + **lint-staged** (pre-commit)

## Comandos

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento em `localhost:3000` |
| `npm run build` | Build de produção |
| `npm run start` | Servidor com build de produção |
| `npm run lint` | Executa o ESLint |
| `npm run lint:fix` | ESLint com correção automática |
| `npm run test` | Testes com Jest |
| `npm run test:watch` | Testes em modo watch |
| `npm run test:ci` | Testes em modo CI (runInBand) |
| `npm run storybook` | Storybook em `localhost:6006` |
| `npm run build-storybook` | Build estático do Storybook |

## Estrutura

```
src/
├── app/                    # App Router (layout, page, not-found)
├── components/              # Componentes reutilizáveis
│   ├── BookCard/           # Card de livro (capa, título, autor)
│   │   ├── BookCard.tsx
│   │   ├── styles.ts
│   │   ├── index.ts
│   │   ├── test.tsx
│   │   └── stories.tsx
│   ├── Button/
│   ├── Sidebar/
│   └── HydrationFix.tsx
└── styles/
    ├── GlobalStyles.tsx     # Reset e estilos globais
    └── theme.ts            # Design tokens (cores, espaçamento, tipografia, layout)
```

Cada componente segue o padrão: pasta com `ComponentName.tsx`, `styles.ts` (styled-components com `import * as S from './styles'`), `index.ts` (barrel), `test.tsx` e `stories.tsx`. Os estilos usam tokens de `@/styles/theme`.

## Desenvolvimento

1. Instale as dependências: `npm install`
2. Rode o projeto: `npm run dev`
3. Abra [http://localhost:3000](http://localhost:3000)

No pre-commit (Husky + lint-staged): ESLint --fix e Jest nos arquivos alterados em `src/**/*.{ts,tsx}`.

Para inspecionar os componentes: `npm run storybook` e abra [http://localhost:6006](http://localhost:6006).

## Referências

- [Next.js Documentation](https://nextjs.org/docs)
- [styled-components](https://styled-components.com/)
- [Storybook for Next.js](https://storybook.js.org/docs/get-started/frameworks/nextjs)
- [Jest with Next.js](https://nextjs.org/docs/app/building-your-application/testing/jest)
