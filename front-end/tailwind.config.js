/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'regular': ['Signika-Regular'],
        'semibold': ['Signika-SemiBold'],
        'medium': ['Signika-Medium']
      },
      ringColor: {
        'primary': '#e2ffe2',
      },
      textColor: {
        'primary': '#008A00',
        'secondary': '#012E8B',
      },
      colors: {
        'primary': '#008A00',
        'primary-hover': '#165d04',
        'secondary': '#012E8B',
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
