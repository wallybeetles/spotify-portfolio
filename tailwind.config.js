const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      scale: {
        101: '1.01',
        105: '1.05',
        107: '1.07',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      black: colors.black,
      red: colors.red,
      orange: colors.orange,
      blue: '#2e77d0',
      gray: {
        100: '#b3b3b3',
        200: '#3e3e3e',
        300: '#282828',
        400: '#181818',
        500: '#121212',
      },
      green: {
        spotify: '#1db954',
      },
      purple: {
        light: '#b497af',
        DEFAULT: '#664c61',
        dark: '#210a1e',
      },
    },
  },
  variants: {
    extend: {
      backdropGrayscale: ['hover', 'focus'],
      display: ['group-hover'],
      translate: ['group-hover'],
    },
  },
  plugins: [],
};
