/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        noga: {
          navy: '#02006F',
          navyDark: '#07005F',
          navyCard: '#1F2366',
          navyLight: '#292D6C',
          yellow: '#FFC000',
          yellowHover: '#FFD34D',
          lightBg: '#F7F8FC',
          soft: '#EEF1FF',
          textDark: '#111827',
          muted: '#667085'
        }
      },
      fontFamily: {
        sans: ['DM Sans', 'Inter', 'sans-serif'],
        display: ['Outfit', 'Manrope', 'sans-serif']
      }
    },
  },
  plugins: [],
}
