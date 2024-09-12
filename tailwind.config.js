/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./dev_modules/@ocdla/global-components/**/*.{html,js,jsx}",
    "./node_modules/@ocdla/global-components/**/*.{html,js,jsx}",
  ],
  theme: {
    colors: {
      "wb-brown": "#794850", // ferra
      "wb-red": "#D0375C", // brick red
      "wb-lime": "#B5E179", // yellow green
      "wb-blue": "#394657", // oxford blue
      "wb-orange": "#F68544", // jaffa
      "wb-black": "rgb(47,42,42)",
      "wb-white": "rgb(255,255,255)",
    },
    extend: {
      fontFamily: {
        sans: ["Open Sans", "Verdana", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
