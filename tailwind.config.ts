/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      // ── FONTS ──────────────────────────────────────────────────
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],   // headings, titles
        body:    ['"DM Sans"', 'system-ui', 'sans-serif'],        // body text, UI
        accent:  ['"Dancing Script"', 'cursive'],                 // taglines, quotes
      },

      // ── FONT SIZES ─────────────────────────────────────────────
      fontSize: {
        'xs':   ['11px', { lineHeight: '1.6', letterSpacing: '0.05em' }],
        'sm':   ['13px', { lineHeight: '1.6', letterSpacing: '0.02em' }],
        'base': ['15px', { lineHeight: '1.7', letterSpacing: '0.01em' }],
        'md':   ['17px', { lineHeight: '1.7' }],
        'lg':   ['20px', { lineHeight: '1.6' }],
        'xl':   ['24px', { lineHeight: '1.4' }],
        '2xl':  ['30px', { lineHeight: '1.3' }],
        '3xl':  ['38px', { lineHeight: '1.2' }],
        '4xl':  ['48px', { lineHeight: '1.15' }],
        '5xl':  ['60px', { lineHeight: '1.1' }],
        '6xl':  ['76px', { lineHeight: '1.05' }],
      },

      // ── COLORS ─────────────────────────────────────────────────
     colors: {
  // ── NEW BRAND COLORS (APPUGE) ─────────────────────

  primary: '#A45F2E',        // main brand brown
  accent: '#D07E34',         // CTA / highlight
  gold: '#CBB681',           // soft gold
  peach: '#F8BB90',          // warm peach
  'peach-light': '#FDD2BA',  // light background tone
  blush: '#FFEDE7',          // main background

},

      // ── SPACING ────────────────────────────────────────────────
      spacing: {
        '18':  '72px',
        '22':  '88px',
        '26':  '104px',
        '30':  '120px',
        '34':  '136px',
        '38':  '152px',
        '42':  '168px',
        'section': '96px',    // standard section padding
        'section-sm': '64px', // smaller section padding
      },

      // ── BORDER RADIUS ──────────────────────────────────────────
      borderRadius: {
        'none':  '0',
        'sm':    '2px',
        DEFAULT: '4px',
        'md':    '6px',
        'lg':    '12px',
        'xl':    '20px',
        '2xl':   '32px',
        'organic': '60% 40% 55% 45% / 45% 55% 45% 55%', // blob shape
        'full':  '9999px',
      },

      // ── SHADOWS ────────────────────────────────────────────────
      boxShadow: {
        'warm-sm': '0 2px 12px rgba(92, 61, 46, 0.06)',
        'warm':    '0 8px 32px rgba(92, 61, 46, 0.10)',
        'warm-md': '0 16px 48px rgba(92, 61, 46, 0.12)',
        'warm-lg': '0 24px 64px rgba(92, 61, 46, 0.16)',
        'gold':    '0 8px 32px rgba(201, 169, 110, 0.20)',
        'rose':    '0 8px 32px rgba(201, 123, 107, 0.20)',
        'inset':   'inset 0 1px 3px rgba(92, 61, 46, 0.08)',
      },

      // ── TRANSITIONS ────────────────────────────────────────────
      transitionTimingFunction: {
        'warm':   'cubic-bezier(0.4, 0, 0.2, 1)',
        'gentle': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },

      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },

      // ── LETTER SPACING ─────────────────────────────────────────
      letterSpacing: {
        'tighter': '-0.03em',
        'tight':   '-0.01em',
        'normal':  '0em',
        'wide':    '0.04em',
        'wider':   '0.08em',
        'widest':  '0.16em',
        'ultra':   '0.24em',
      },

      // ── LINE HEIGHT ────────────────────────────────────────────
      lineHeight: {
        'tight':   '1.1',
        'snug':    '1.2',
        'normal':  '1.5',
        'relaxed': '1.7',
        'loose':   '1.9',
      },

      // ── BACKDROP BLUR ──────────────────────────────────────────
      backdropBlur: {
        'xs':  '4px',
        'sm':  '8px',
        DEFAULT: '16px',
        'lg':  '24px',
      },

      // ── Z-INDEX ────────────────────────────────────────────────
      zIndex: {
        'navbar':    '100',
        'dropdown':  '110',
        'overlay':   '120',
        'modal':     '130',
        'toast':     '140',
        'whatsapp':  '150',
      },

      // ── ANIMATION ──────────────────────────────────────────────
      keyframes: {
        // Fade up — for section reveals
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        // Fade in
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        // Gentle float — for decorative elements
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        // Heartbeat pulse — for CTA button
        'heartbeat': {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(201,123,107,0.4)' },
          '50%':      { transform: 'scale(1.02)', boxShadow: '0 0 0 8px rgba(201,123,107,0)' },
        },
        // Shimmer — for gold accents
        'shimmer': {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        // Slide in from right — mobile menu
        'slide-in-right': {
          '0%':   { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        // Underline draw — nav links
        'draw-line': {
          '0%':   { width: '0%', left: '50%' },
          '100%': { width: '100%', left: '0%' },
        },
      },

      animation: {
        'fade-up':         'fade-up 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
        'fade-up-slow':    'fade-up 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
        'fade-in':         'fade-in 0.5s ease both',
        'float':           'float 4s ease-in-out infinite',
        'float-slow':      'float 6s ease-in-out infinite',
        'heartbeat':       'heartbeat 2.5s ease-in-out infinite',
        'shimmer':         'shimmer 3s linear infinite',
        'slide-in-right':  'slide-in-right 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      },

    },
  },
  plugins: [],
}