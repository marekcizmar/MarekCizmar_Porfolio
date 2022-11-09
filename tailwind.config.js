const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      'base': '375px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif;"
      },
      colors: {
        'gradient1' : '#36935E',
        'gradient2' : '#51B0C4',
        'greenText' : '#379463',
      },
      lineHeight: {
        'extra-loose' : '3rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
