module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      padding: {
        '1/3': '33.3333%',
        '2/3': '66.6667%'
      },
      maxWidth: {
       '1/4': '25%',
       '1/2': '50%',
       '3/4': '75%',
       '8xl': '90rem'
      },
      maxHeight: {
        '100': '30rem'
      },
      minHeight:{
        'screen-xl': '200vh'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif']
      },
      colors: {
        'darkGray': '#243142'
      },
      zIndex: {
        '100': 100
      } 
    },
  },
  variants: {
    extend: {
      animation: ['motion-safe'],
      maxHeight: ['focus'],
    },
    
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('tailwind-scrollbar')
  ],
}
