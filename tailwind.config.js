/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/HTML/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'display': ['Poppins','Sans-serif'],
        'body':['Inter','sans-serif']
      },
    },
  },
  plugins: [],
}

