/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      height: {
        '1/4vh': '25vh',
        '1/2vh': '50vh',
        '3/4vh': '75vh',
        'fullvh': '100vh',
      },
      fontFamily: {
        'flight': ['Signika-Light'],
        'regular': ['Signika-Regular'],
        'semibold': ['Signika-SemiBold'],
        'medium': ['Signika-Medium']
      },
      ringColor: {
        'primary': '#CCE8CC',
        'secondary': '#99ABD1',
      },
      textColor: {
        'primary': '#008A00',
        'secondary': '#012E8B',
      },
      colors: {
        'primary': '#008A00',
        'primary2': '#00b500',
        'primary-hover': '#165d04',
        'secondary': '#012E8B',
        'tertiary': '#F2D524',
        'secondary-hover': '#012e89',
        'cgray': '#888888',
        'cgray-light': '#DFDFDF',
        'cgray-dark': '#F5F5F5',
        'erro': '#FF2828'
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        fadeInDelay: 'fadeIn 1.5s ease-in-out',
        bounce: 'bounce 2s infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        bounce: {
          '0%, 20%, 50%, 80%, 100%': {
            transform: 'translateY(0)'
          },
          '40%': {
            transform: 'translateY(-30px)'
          },
          '60%': {
            transform: 'translateY(-15px)'
          }
        }
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
