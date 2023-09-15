const defaultTheme = require('tailwindcss/defaultTheme');

const zIndex = {
  1: 1,
  2: 2,
};

const fontFamily = {
  sans: ['Inter', ...defaultTheme.fontFamily.sans],
};

module.exports = { fontFamily, zIndex };
