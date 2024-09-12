/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./src/**/*.{html,js,jsx}",
        "./dev_modules/@ocdla/global-components/**/*.{html,js,jsx}",
        "./node_modules/@ocdla/global-components/**/*.{html,js,jsx}"
    ],
    theme: {
        colors: {
            "wb-black": "rgb(47,42,42)"
        },
        extend: {
            fontFamily: {
                sans: ["Open Sans", "Verdana", ...defaultTheme.fontFamily.sans]
            }
        }
    },
    plugins: [require("@tailwindcss/forms")]
};
