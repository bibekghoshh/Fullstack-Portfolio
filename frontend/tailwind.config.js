/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        newblue:"#0D43A0",
        bgcolor:"#4883E9"
      },
      fontFamily:{
        roboto:"'Roboto', sans-serif",
        montserrat:"Montserrat', sans-serif"
      }
    },
  },
  plugins: [],
}

