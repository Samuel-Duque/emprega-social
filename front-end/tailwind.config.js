/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js" // add this line
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
      textColor: {
        'primary': '#000000',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

