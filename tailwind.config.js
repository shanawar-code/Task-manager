/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        "btn-gradient": ""
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

