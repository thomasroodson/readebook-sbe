/**
 * Design tokens do Reading Dashboard.
 * Baseado em .cursor/context-app.md – cores, espaçamento, tipografia, layout.
 */

export const theme = {
  colors: {
    primary: {
      100: '#ffe5e5',
      500: '#ff0000',
      600: '#e60000',
    },
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },
    background: {
      app: '#f9fafb',
      card: '#ffffff',
    },
  },
  spacing: {
    0.25: '0.25rem',
    0.5: '0.5rem',
    0.75: '0.75rem',
    1: '1rem',
    1.5: '1.5rem',
    2: '2rem',
    3: '3rem',
    4: '4rem',
  },
  typography: {
    fontFamily: 'Inter, system-ui, sans-serif',
    hero: { size: '1.75rem', weight: 700 },
    section: { size: '1.375rem', weight: 600 },
    sub: { size: '1.125rem', weight: 600 },
    body: { size: '0.875rem', sizeLarge: '1rem' },
    caption: { size: '0.75rem' },
    lineHeight: {
      heading: 1.3,
      body: 1.6,
    },
  },
  layout: {
    breakpointMobile: '48rem',
    sidebarWidth: '15rem',
    asideWidth: '20rem',
    navItemHeight: '2.5rem',
    navItemPadding: '0 0.75rem',
    navItemGap: '0.75rem',
    radius: {
      card: '0.75rem',
      button: '0.75rem',
      pill: '62.5rem',
      navItem: '0.625rem',
    },
    shadow: {
      card: '0 0.25rem 0.5rem rgba(0, 0, 0, 0.08)',
      cardHover: '0 0.5rem 1rem rgba(0, 0, 0, 0.12)',
    },
  },
  components: {
    buttonHeight: '2.75rem',
    bookCover: {
      widthDesktop: '8.75rem',
      heightDesktop: '12.5rem',
      widthMobile: '7rem',
      heightMobile: '10rem',
    },
  },
} as const

export type Theme = typeof theme
