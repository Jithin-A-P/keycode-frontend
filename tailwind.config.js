const colors = require('./src/styles/colors');
const customStyles = require('./src/styles/customStyles');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors,
      ...customStyles,
    },
  },
  plugins: [],
};
