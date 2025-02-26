import { FONTNAME } from './config/config'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx,svg,astro}',
    './config/**/*.{ts,tsx,svg,astro}',
    './shared/**/*.{ts,tsx,svg,astro}',
  ],
  theme: {
    extend: {
      fontSize: {
        sm: ['14px', '20px'],
        base: ['18px', '32px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      },
    },
    fontFamily: { sans: [FONTNAME, 'sans-serif'] },
  },
  plugins: [require('@tailwindcss/typography')],
}
