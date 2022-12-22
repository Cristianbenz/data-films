/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#30292f',
        secondary: '#FF8427',
        fontPrimary: '#D3D4D9',
        fontSecondary: '#30292f'
      }
    },
  },
  plugins: [],
}
