const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      'xs': {'min':'320px', 'max': '425px'},
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        violeta: {
          100: "#9340ff",
          800: "#101728"
        },
        verde: {
          100: "#6EB023"
        },

      }
    },
  },
  plugins: [],
}
