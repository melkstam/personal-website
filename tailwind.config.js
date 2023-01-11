/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.tsx',
    './components/**/*.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Fira code', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
