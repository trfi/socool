const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      fontWeight: ['hover', 'focus'],
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        purple: {
          DEFAULT: '#7A44EF'
        },
        gray: {
          dark: '#687684',
          light: '#98A2AB'
        }
      }
    },
  },
  variants: {},
  plugins: []
};
