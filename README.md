# Next.js Boilerplate

Boilerplate Next.js atualizado com App Router, TypeScript, styled-components, Jest, Storybook, ESLint, Prettier, EditorConfig e Husky.


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
| `npm run dev` | Sobe o servidor de desenvolvimento em `localhost:3000` |
| `npm run build` | Gera o build de produção |
| `npm run start` | Inicia o servidor com o build de produção |
| `npm run lint` | Executa o ESLint em todo o projeto |
| `npm run lint:fix` | Executa o ESLint com correção automática |
| `npm run test` | Executa os testes com Jest |
| `npm run test:watch` | Executa os testes em modo watch |
| `npm run test:ci` | Executa os testes em modo CI (runInBand) |
| `npm run storybook` | Inicia o Storybook em `localhost:6006` |
| `npm run build-storybook` | Gera o build estático do Storybook (pode haver conflito de versão Webpack com Next.js; use `npm run storybook` para desenvolvimento) |

## Estrutura

```
src/
├── app/              # App Router (layout, page, not-found)
├── components/       # Componentes reutilizáveis
└── styles/           # Estilos globais (styled-components)
```

## Desenvolvimento

1. Instale as dependências: `npm install`
2. Rode o projeto: `npm run dev`
3. Abra [http://localhost:3000](http://localhost:3000)

Os hooks do Husky rodam no pre-commit: lint (ESLint --fix) e testes relacionados aos arquivos alterados (lint-staged + Jest).

## Referências

- [Next.js Documentation](https://nextjs.org/docs)
- [styled-components](https://styled-components.com/)
- [Storybook for Next.js](https://storybook.js.org/docs/get-started/frameworks/nextjs)
- [Jest with Next.js](https://nextjs.org/docs/app/building-your-application/testing/jest)
