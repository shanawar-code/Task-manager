/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ["Poppins"],
        "inter": ["Inter"],
        "open-sans": ["Open Sans"],
        "lato": ["Lato"],
        "dm-sans": ["DM Sans"],
        "Work-sans": ["Work Sans"],
        "hk-grotesk": ["Hanken Grotesk"],
        "plus-jakarta-sans": ["Plus Jakarta Sans"],
        "public-sans": ["Public Sans"],
        "mulish": ["Mulish"],
        "epilogue":["Epilogue"]
      },
      backgroundImage: {
                "btn-gradient": "linear-gradient(90deg, #F33F41 0%, #FB6D72 100%)",
                'gradient-r': 'linear-gradient(to right, #F33F41 20%, #FEC93E)', 
              },       
     
      colors: {
        "custom-red": "#F43A3A",
        "custom-blue": "#6F9CFF",
        "custom-green": "#3EB14A",
        "custom-gray": "#F5F5F5",
        gray: {
          "1": "#333333",
          "2": "#4F4F4F",
          "4": "#828282",
          "5": "#E0E0E0"
        },

      },
    },
  },
  plugins: [],
}