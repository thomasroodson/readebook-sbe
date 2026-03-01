# Project Pattern – ebook-sbe (Reading Dashboard)

## 1. Overview

- **Stack**: Next.js 15 (App Router), React 19, TypeScript, styled-components.
- **Purpose**: SaaS reading dashboard (books, categories, progress).
- **Principles**: Clean, minimal, productivity-focused UI; strict design system; type-safe; tested and documented in Storybook.

---

## 2. Architecture and Folder Structure

- **App Router**: All routes and layouts under `src/app/` (e.g. `layout.tsx`, `page.tsx`, `not-found.tsx`).
- **Components**: One folder per component under `src/components/`, with:
  - Main component: `ComponentName.tsx`
  - Public API: `index.ts` (re-export only)
  - Styles: `styles.ts` (styled-components; import as `import * as S from './styles'`)
  - Tests: `test.tsx`
  - Stories: `stories.tsx`
- **Styles**: Global styles and design tokens in `src/styles/` (e.g. `GlobalStyles.tsx`, `theme.ts`); component-level styles in `styles.ts` next to the component, using tokens from `@/styles/theme`.
- **Path alias**: Use `@/` for `src/` (e.g. `@/components/Button`, `@/styles/GlobalStyles`). Configure in `tsconfig.json` and mirror in Jest `moduleNameMapper`.

---

## 3. Next.js and React Conventions

- **Server by default**: Pages and layouts are Server Components unless they need client features.
- **Client boundary**: Add `'use client'` only when the component uses hooks, DOM, event handlers, or styled-components. Keep client trees as small as possible.
- **Metadata**: Set `metadata` (and optionally `generateMetadata`) in `layout.tsx` for SEO and consistency.
- **HTML/document**: Root layout sets `lang` (e.g. `pt-BR`), and uses `suppressHydrationWarning` on `<html>`/`<body>` only when required (e.g. extension-induced DOM changes), with a single, documented fix (e.g. inline script in a dedicated component).

---

## 4. Component Pattern

- **One component per folder**: e.g. `Button/Button.tsx` + `Button/index.ts` + `Button/styles.ts`. Export only through `index.ts`; other files import from `@/components/Button`.
- **Props**: Prefer extending native HTML/ARIA types (e.g. `ButtonHTMLAttributes<HTMLButtonElement>`) and spread the rest (`...props`) onto the root element.
- **Styling**: Keep styled-components in `styles.ts` in the component folder; in the component file use `import * as S from './styles'` and render `<S.Wrapper>`, `<S.Title>`, etc. Use design tokens from `@/styles/theme` in `styles.ts`; avoid magic numbers.
- **Naming**: PascalCase for components and files; kebab-case only for non-component files if the project adopts it (e.g. configs).

---

## 5. Design System (from context-app.md)

- **Base unit**: 1rem = 16px; spacing on a 0.5rem (8px) grid.
- **Colors**: Primary palette (e.g. #ff0000) with 100/500/600 variants; neutrals gray-50–900; app background gray-50, cards white.
- **Typography**: Inter (or system fallback); scale (e.g. hero 1.75rem/700, section 1.375rem/600, body 0.875–1rem, caption 0.75rem); line-height headings 1.3, body 1.6.
- **Layout**: Desktop three-column (sidebar 15rem, main flex, aside 20rem); mobile single column, breakpoint 48rem; sidebar becomes drawer or behind menu; aside becomes full-width card.
- **Components**: Buttons height 2.75rem, radius 0.75rem; cards radius 0.75rem, subtle shadow; desktop hover lift/scale; mobile tap-only, no hover animation.
- **Mood**: Modern SaaS, minimal, structured, calm; avoid clutter, heavy shadows, and playful/marketing style.

All tokens (colors, spacing, typography, breakpoints, shadows, radii) live in `@/styles/theme`; import and use them in `styles.ts` so UI stays consistent.

---

## 6. Styling (styled-components)

- **Global styles**: Single `GlobalStyles` (e.g. `createGlobalStyle`) for reset/base (box-sizing, body margin/font). Injected once in root layout.
- **Next.js config**: Enable styled-components compiler with `displayName: true` and `ssr: true` for debuggable class names and correct SSR.
- **Co-location**: Styles live in `styles.ts` in the component folder; component file imports with `import * as S from './styles'` and uses `S.*` for all styled elements.
- **No inline for layout/theme**: Use inline styles only for one-off overrides (e.g. layout padding on a single page); layout and theme belong in the design system and styled-components.

---

## 7. Testing

- **Framework**: Jest + React Testing Library; `jest-styled-components` for snapshot consistency.
- **Placement**: `test.tsx` in the component folder (next to `ComponentName.tsx`).
- **Scope**: Prefer behavior and accessibility (queries by role/label); avoid testing implementation details. Use `userEvent` for interactions.
- **Coverage**: Include `src/**/*.{ts,tsx}`; exclude stories, layout, and non-component files. Run in CI with a single worker or `--runInBand` if needed for stability.
- **Setup**: Centralize RTL matchers and styled-components in `jest.setup.ts`; use Next’s `next/jest` and the same `@/` mapping as the app.

---

## 8. Documentation and Design Review (Storybook)

- **Stories**: One `stories.tsx` per component in the component folder; use CSF3 (default export meta, named exports for stories). Map to design system (e.g. `title: 'Components/Button'`).
- **Docs**: Enable `tags: ['autodocs']` and document `argTypes` (e.g. control type, description).
- **Preview**: Apply `GlobalStyles` (and theme if any) in Storybook decorators so stories match the app.
- **Framework**: Use `@storybook/nextjs` so Next.js behavior (e.g. App Router) is respected where relevant.

---

## 9. Code Quality and Formatting

- **ESLint**: Extend `next/core-web-vitals`, `next/typescript`, and `prettier`; ignore build artifacts, `node_modules`, and Storybook static output.
- **Prettier**: Single quotes, semicolons, 2 spaces, trailing commas (e.g. ES5), print width 80. Commit a shared config (e.g. `.prettierrc`) and ignore generated/build folders.
- **EditorConfig**: Indent 2 spaces, LF, UTF-8, trim trailing whitespace, final newline. Keeps style consistent across editors.

---

## 10. Git and Automation

- **Pre-commit**: Husky + lint-staged. On staged `src/**/*.{ts,tsx}` run `eslint --fix` and `jest --findRelatedTests --bail` so only affected tests run and broken code is not committed.
- **Scripts**: `dev` / `build` / `start` for Next.js; `lint` / `lint:fix`; `test` / `test:watch` / `test:ci`; `storybook` / `build-storybook`; `prepare` for Husky.

---

## 11. Hydration and Scripts

- **Hydration issues**: If third-party scripts (e.g. browser extensions) inject DOM and cause hydration mismatches, use a single, minimal fix: e.g. a small inline script in a dedicated component (e.g. `HydrationFixScript`), executed as early as possible in `<body>`, and document the reason. Prefer fixing the root cause (e.g. suppressing only where needed) over broad `suppressHydrationWarning`.
- **Script placement**: Keep such scripts in a component and render them in the root layout so behavior is explicit and reusable.

---

## 12. TypeScript

- **Strict mode**: Keep `strict: true` in `tsconfig.json`.
- **Types**: Prefer explicit types for component props and public APIs; use `type` for object shapes and props, `interface` only if you need extension.
- **Imports**: Use `import type` for type-only imports to keep bundles clear.

---

## 13. Summary Checklist

- Next.js App Router; Server Components by default; `'use client'` only when needed.
- One folder per component; barrel export via `index.ts`; co-located tests and stories.
- Path alias `@/*` → `src/*` everywhere (app, tests, Storybook).
- Design system (context-app.md) applied in styled-components and global styles.
- Styled-components with Next compiler (SSR + displayName); global styles in layout and Storybook.
- Jest + RTL + jest-styled-components; Storybook with Next and GlobalStyles.
- ESLint + Prettier + EditorConfig; Husky + lint-staged on `src/**/*.{ts,tsx}`.
- One documented hydration fix component if needed; TypeScript strict and `import type` where appropriate.
