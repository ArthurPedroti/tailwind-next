/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr',
        profile: 'max-content 1fr max-content',
        form: 'minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0, 15rem)',
      },

      borderWidth: {
        6: '6px',
      },

      colors: {
        violet: {
          25: '#fcfaff',
        },
      },

      maxWidth: {
        app: '700px',
      },

      keyframes: {
        slideDownAndFade: {
          from: { opacity: 0, transform: 'translateY(-2px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        'collapsible-open': {
          from: { height: 0 },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        'collapsible-close': {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: 0 },
        },
        // slideUpAndFade: {
        //   from: { opacity: 1 },
        //   to: { opacity: 0 },
        // },
      },

      animation: {
        slideDownAndFade:
          'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        'collapsible-open': 'collapsible-open 0.2s ease-out',
        'collapsible-close': 'collapsible-close 0.2s ease-out',
        // slideUpAndFade: 'slideUpAndFade 1s linear',
      },
    },
  },
  plugins: [],
}
