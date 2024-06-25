/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:  ['Gilroy', 'sans-serif'],
        oddlini: ['Oddlini', 'sans-serif'],
        september: ['September Morning', 'sans-serif'],
        jost: ['Jost', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        Montserrat: ["Montserrat", "sans-serif"],
        crusivefont:["Font"]
      },
      colors: {
        'violet': '#6500FF'
      }
    },
  },
  plugins: [
    require("rippleui")
  ],
}
