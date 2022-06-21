// eslint-disable-next-line
const defaultColors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/helper/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: defaultColors,
  },
  plugins: [],
};
