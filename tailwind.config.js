/** @type {import('tailwindcss').Config} */
/* eslint-disable global-require */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,svg}'],
  theme: {
    extend: {
      fontSize: {
        sm: ['14px', '20px'],
        base: ['18px', '32px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      },
      colors: {
        'rs8-blue': '#2C62A9',
        'rs8-pink': '#E5007D',
      },
    },
    fontFamily: { sans: ['Overpass Variable', 'sans-serif'] },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}
