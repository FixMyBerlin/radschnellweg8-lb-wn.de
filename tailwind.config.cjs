/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'rs8-blue': '#2c62a9',
        'rs8-pink': '#d22d7c',
      },
    },
    fontFamily: { sans: ['OverpassVariable', 'sans-serif'] },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['18px', '32px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/line-clamp'),
  ],
}
