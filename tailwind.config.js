/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      backgroundImage: {
        'color-gradient': 'linear-gradient(to right bottom, #09031c, #0d081c, #110d1c, #14111c, #16141c, #16141c, #16141b, #16141b, #14111a, #110d19, #0d0819, #090318);'
      },
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
  
      colors: {
        "bg-clr": "#FCFAFC",
        "primary": "#50BABE",
        "secondary": "#B6A0DC",
        "accent": "#C07DCF"
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      screens: {
        "wide": "1440px",
        "large-custom": "1700px",
        "md-custom": "1350px",
      },
    },
  },
  plugins: [],
}