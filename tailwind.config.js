const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      'xs': {'min':'319px', 'max': '639px'},
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
