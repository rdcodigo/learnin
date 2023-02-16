/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center: true
    },
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '18px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      'xl': ['24px', '32px'],
      '2xl': ['32px', '40px'],
      '3xl': ['48px', '56px'],
    },
    extend: {
      colors: {
        color1: '#0B0E16',
        color2: '#F4F6FF',
        color3: {
          10: '#BB2E57',
          20: '#AF053F',
          30: '#300219'
        },
        color4: {
          10: '#B1B4BD',
          20: '#91949D',
          30: '#696C74'
        }
      }
    },
  },
  plugins: [],
}