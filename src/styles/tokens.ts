// ================================================================
// APPUGE — DESIGN TOKENS (TypeScript)
// Use these in components for consistent styling
// ================================================================

// ── COLORS ──────────────────────────────────────────────────────
export const colors = {
  rose:        '#C97B6B',
  roseLight:   '#EDD5CC',
  roseDark:    '#B5604F',
  cream:       '#FAF3E8',
  creamDark:   '#F2E6D0',
  gold:        '#C9A96E',
  goldLight:   '#E8D4A8',
  goldDark:    '#9A7738',
  mocha:       '#5C3D2E',
  mochaLight:  '#8C6A54',
  mochaDark:   '#38231B',
  blush:       '#FDF6F0',
  blushDark:   '#F5EBE3',
  muted:       '#9B7B6A',
  text:        '#3E2A1E',
} as const

// ── FONTS ────────────────────────────────────────────────────────
export const fonts = {
  display: '"Cormorant Garamond", Georgia, serif',
  body:    '"DM Sans", system-ui, sans-serif',
  accent:  '"Dancing Script", cursive',
} as const

// ── FONT USAGE GUIDE ─────────────────────────────────────────────
//
//  font-display  → h1, h2, h3, hero titles, section headings
//                  Cormorant Garamond — elegant, editorial, poetic
//                  className: "font-display"
//
//  font-body     → p, labels, buttons, nav links, inputs
//                  DM Sans — clean, modern, readable
//                  className: "font-body" (default body)
//
//  font-accent   → taglines, pull quotes, decorative text only
//                  Dancing Script — handwritten, personal, warm
//                  className: "font-accent"
//                  ⚠️  Use sparingly — only for 1–2 lines max

// ── FONT WEIGHT GUIDE ────────────────────────────────────────────
//
//  Cormorant Garamond:
//    font-light    (300) → large decorative headings
//    font-normal   (400) → standard headings, body in display
//    font-medium   (500) → section titles (recommended default)
//    font-semibold (600) → emphasis in headings
//    font-bold     (700) → hero headlines only
//    + italic variants for poetic/accent text
//
//  DM Sans:
//    font-light    (300) → large supporting text
//    font-normal   (400) → body text, nav links
//    font-medium   (500) → buttons, labels, UI elements
//    font-semibold (600) → strong labels, CTAs
//
//  Dancing Script:
//    font-normal   (400) → subtle accent text
//    font-medium   (500) → taglines (recommended)
//    font-semibold (600) → featured quotes

// ── TYPOGRAPHY SCALE ─────────────────────────────────────────────
export const typography = {
  // Display — Cormorant Garamond
  heroTitle:      'font-display text-5xl md:text-6xl font-medium text-mocha leading-tight tracking-tight',
  sectionTitle:   'font-display text-3xl md:text-4xl font-medium text-mocha leading-snug',
  cardTitle:      'font-display text-xl md:text-2xl font-medium text-mocha',
  quoteText:      'font-display text-2xl md:text-3xl font-light italic text-mocha',

  // Accent — Dancing Script
  tagline:        'font-accent text-xl text-rose',
  accentQuote:    'font-accent text-2xl text-muted',

  // Body — DM Sans
  bodyLg:         'font-body text-md text-muted leading-relaxed',
  body:           'font-body text-base text-muted leading-relaxed',
  bodySm:         'font-body text-sm text-muted leading-relaxed',
  label:          'font-body text-xs font-medium tracking-widest uppercase text-gold-dark',
  navLink:        'font-body text-xs font-normal tracking-wider uppercase text-mocha',
  buttonText:     'font-body text-xs font-medium tracking-widest uppercase',
  caption:        'font-body text-xs text-muted tracking-wide',
} as const

// ── SPACING ──────────────────────────────────────────────────────
export const spacing = {
  sectionPy:   'py-24',
  sectionPySm: 'py-16',
  containerPx: 'px-10',
  containerPxSm: 'px-5',
} as const

// ── COMMON CLASS COMBINATIONS ────────────────────────────────────
export const ui = {
  // Section wrapper
  section:        'py-24 md:py-32',
  sectionSm:      'py-16 md:py-24',
  container:      'max-w-7xl mx-auto px-5 md:px-10',
  containerSm:    'max-w-3xl mx-auto px-5 md:px-10',

  // Section header
  sectionHeader:  'text-center mb-16 md:mb-20',

  // Divider
  divider:        'border-t border-gold/20',
  dividerY:       'my-16 border-t border-gold/20',
} as const