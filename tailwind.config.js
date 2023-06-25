/** @type {import('tailwindcss').Config} */
module.exports = {
  //Specify the file formats where tailwind shoudl work
  content: [
    "./index.html",
    "./src/**/*.{html,vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '8rem',
        },
      },
    },
  },
  plugins: [],
}