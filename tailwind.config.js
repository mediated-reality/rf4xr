/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./docs/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Space Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        serif: ['Spectral', 'Georgia', 'serif'],
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0.99)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.25s forwards',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
