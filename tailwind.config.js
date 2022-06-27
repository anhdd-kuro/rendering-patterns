/* eslint-disable */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
/* eslint-enable */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/helper/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: colors,
    extend: {},
  },
  plugins: [],
};
