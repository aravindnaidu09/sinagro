/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html',   // Make sure this points to the location of your HTML files
    './src/**/*.css',       // This points to your custom CSS with Tailwind imports
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D1D4A2', // Light olive green
        secondary: '#706B43', // Muted brown
      },
      fontFamily: {
        sans: ['Maven Pro', 'sans-serif'], // Adding Maven Pro font
      },
    },
  },
  plugins: [],
};
