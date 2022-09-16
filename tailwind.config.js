/** @type {import('tailwindcss').Config} */
/* eslint-disable global-require */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,svg}'],
  theme: {
    extend: {
      colors: {
        'rs8-blue': '#2c62a9',
        'rs8-pink': '#d22d7c',
      },
    },
    fontFamily: { sans: ['Overpass', 'sans-serif'] },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['18px', '32px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    }

  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
}
