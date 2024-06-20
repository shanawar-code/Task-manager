/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      backgroundImage: {
        'btn-gradient': 'linear-gradient(90deg, #F33F41 0%, #FB6D72 100%)',
      },
      colors: {
        "btn-gradient": "",
        gray: {
          1: "#333333",
          4: "#828282"

        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
  theme: {
    extend: {
      screens: {
        'xs': '420px',
      },
    },
  },
}

