const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#19b092',
        textdark: '#19281e',
        textlight: '#117b66',
        background: '#E5FFF7',
        accent: '#FFA17A',
        redcross: '#b01937',
        buttonpress: '#5ec7b2'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')],
}
