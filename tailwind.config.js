/** @type {import('tailwindcss').Config} */
/* eslint-disable global-require */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,svg}'],
  theme: {
    extend: {
      colors: {
        'rsv-pink': '#e6007d',
        'rsv-pink-light': '#e6007d',
        'rsv-blau': '#0f65af',
        'rsv-blau-light': 'rgb(154, 204, 247)',
      },
    },
    fontFamily: { sans: ['Overpass', 'sans-serif'] },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
}
