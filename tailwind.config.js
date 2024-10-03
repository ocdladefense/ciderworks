/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./dev_modules/@ocdla/global-components/**/*.{html,js,jsx}",
    "./node_modules/@ocdla/global-components/**/*.{html,js,jsx}",
  ],
  theme: {
    screens: {
      'phone': '320px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px'
    },
    extend: {
        fontFamily: {
            sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
            serif: ["Tienne", ...defaultTheme.fontFamily.serif],
            "wb-paragraph": ["Tienne"]
        },
        colors: {
            "wb-brown": "#794850", // ferra
            "wb-cordovan": "#7D4F52",
            "wb-red": "#D0375C", // brick red
            "wb-lime": "#B5E179", // yellow green
            "wb-blue": "#394657", // oxford blue
            "wb-orange": "#F68544", // jaffa
            "wb-black": "#2F2A2A",//"rgb(47,42,42)",
            "wb-paragraph-black": "rgba(35, 35, 35, 0.8)",
            "wb-gray": "#F5F6F8",
            "wb-white": "rgb(255,255,255)",
            "wb-stone": "rgb(168 162 158)"
        }
    }
  },
  plugins: [require("@tailwindcss/forms")]
};
