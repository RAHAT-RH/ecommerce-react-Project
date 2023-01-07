// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        openSans: "'Open Sans', sans-serif",
        poppins: "'Poppins', sans-serif",
        montserrat: "'Montserrat', sans-serif",
        fontForth: "'Moon Dance', cursive"
      },
      container: {
        center: true,
      },
      colors: {
        'primary': '#7F17D0',
        'secondary': '#3A4855',
        'footerColor': '#e9e9e9'
      }
    },
  },
  variants: {
    extend: {
      display: ['group-hover']
    },
  },
  daisyui: {
    themes: [
      {
        winter: {
          ...require("daisyui/src/colors/themes")["[data-theme=winter]"],
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};