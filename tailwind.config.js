/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      screens: {
        'xs': '396px',
      },
      fontFamily: {
        'fc': ['Roboto', 'sans']
      },
      colors: {
        'fc-blue-light': '#1E2A47',
        'fc-blue-dark': '#0D1B2A',
        'fc-white': '#EAEAEA',
      },
    }
  },
  plugins: [
    function({ addBase }) {
      addBase({
        '@font-face': {
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: 'normal',
          src: "url('assets/fonts/Roboto-Regular.woff') format('woff')",
        },
      });
    },
    function({ addComponents }) {
      addComponents({
        '.fc-card': {
          '@apply flex flex-col gap-5 p-8 rounded-md shadow-lg bg-fc-blue-dark': {},
        },
        '.fc-label': {
          '@apply mb-1 block text-sm text-fc-white font-medium': {},
        },
        '.fc-error': {
          '@apply mt-2 text-sm text-red-600': {},
        },
        '.fc-input': {
          '@apply w-full p-2 border border-gray-700 rounded-md bg-fc-blue-dark text-fc-white focus:outline-none focus:border-cyan-600 focus:ring-2 transition duration-200': {},
        },
        '.fc-button': {
          '@apply w-full inline-block py-2 bg-cyan-600 rounded-md text-center text-fc-white font-semibold hover:bg-cyan-700 cursor-pointer transition duration-300': {}
        },
      });
    },
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
