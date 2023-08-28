/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'Pcolor' : '#292929',
        'Hcolor' : '#6a6a6a',
        'Scolor' : '#121111',
        'Bcolor' : '#F5F5F5',
        'bodyBg' : '#141414',
      },
      container: {
        center: true,
        screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1170px',
          '2xl': '1170px',
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true }),],
}