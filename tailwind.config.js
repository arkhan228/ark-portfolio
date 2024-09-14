/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E8F7F9',
          100: '#D2EEF3',
          200: '#BBE6EE',
          300: '#99DAE5',
          400: '#77CDDC',
          500: '#55C1D4',
          600: '#14788A',
          700: '#116776',
          800: '#0E5663',
          900: '#072B31',
          950: '#031114',
        },
        accent: {
          50: '#FFEEEF',
          100: '#FFE6E7',
          200: '#FFCDCE',
          300: '#FFABAE',
          400: '#FF898E',
          500: '#FF7075',
          600: '#F25358',
          700: '#A6393C',
          800: '#73272A',
          900: '#591E21',
          950: '#260D0E',
        },
      },
      height: {
        screen: '100dvh',
      },
      maxWidth: {
        '8xl': '1440px',
      },
      screens: {
        sm: '600px',
      },
    },
  },
  plugins: [],
};
