/** @type {import('tailwindcss').Config} */
/* eslint-disable global-require */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,svg}'],
  theme: {
    extend: {
      colors: {

      },
    },
    fontFamily: {
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
}
