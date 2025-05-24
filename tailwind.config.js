/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
       fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
 plugins: [
    require("@tailwindcss/container-queries"),
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          margin: "auto",

          "@screen xl": {
            paddingLeft: "7rem",
            paddingRight: "7rem",
            maxWidth: "1440px",
            margin: "auto",
          },
          "@screen 2xl": {
            maxWidth: "1536px",
            margin: "auto",
          },
        },
      })
    },
  ],
};
