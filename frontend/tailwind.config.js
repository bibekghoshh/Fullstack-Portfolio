/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          '0%': { width: '0%' },
          '50%': { width: '100%' },
          '100%': { width: '0%' }, // Reset to 0% to repeat typing effect
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: '#333' }, // Adjust color as needed
        },
      },
      animation: {
        typing: 'typing 3s steps(20, end) infinite', // Infinite typing effect
        blink: 'blink 0.75s step-end infinite',       // Infinite blink effect
      },
      colors: {
        newblue: "#0D43A0",
        bgcolor: "#4883E9"
      },
      fontFamily: {
        roboto: "'Roboto', sans-serif",
        montserrat: "'Montserrat', sans-serif"
      }
    },
  },
  plugins: [],
};
