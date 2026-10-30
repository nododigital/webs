/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./bettinaswimwear/*.html"],
  theme: {
    extend: {
      colors: {
        cream: '#F2EFEA',
        olive: '#7A7258',
        terracotta: '#80583A',
        dark: '#2D2B26',
        'border-delicate': 'rgba(122, 114, 88, 0.3)',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    }
  },
  plugins: [],
}
