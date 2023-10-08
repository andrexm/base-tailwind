/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,php,js}"],
  theme: {
    extend: {
      colors: {
        'primary': colors.sky,
        'secondary': colors.blue,
        'dark': colors.neutral,
        ...colors
      },
    },
  },
  plugins: [],
}
