/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        processPrimary: "#00DA7C"
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
}

