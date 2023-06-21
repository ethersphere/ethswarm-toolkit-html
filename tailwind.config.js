/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans],
        'display': ['Space Grotesk', ...defaultTheme.fontFamily.sans]
      },
      boxShadow: {
        card: "0px 2px 4px rgb(0 0 0 / 0.13), 3px 8px 18px rgb(0 0 0 / 0.1)"
      },
    },
  },
  plugins: [],
}