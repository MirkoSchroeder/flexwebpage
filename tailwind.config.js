/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
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
