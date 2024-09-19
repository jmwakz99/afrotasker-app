/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#195ADC",
        secondary: "#FEC847",
        black: "#141414",
        white: "#FFFFFF",
        grey: "#454545",
      },
    },
  },
  plugins: [],
};
