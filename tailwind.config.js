/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./bettinaswimwear/*.html"],
  theme: {
    extend: {
      colors: {
        cream: '#F2EFEA',
        olive: '#7A795A',
        terracotta: '#8D5B3A',
        dark: '#333333',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    }
  },
  plugins: [],
}