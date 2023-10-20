/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "rgba(46, 134, 171, 0.9)", // New primary color with 90% opacity
        secondary: "rgba(248, 241, 241, 0.9)", // New secondary color with 90% opacity
        tertiary: "rgba(255, 166, 43, 0.9)", // New tertiary color with 90% opacity
        "black-100": "rgba(16, 13, 37, 0.9)", // New black-100 color with 90% opacity
        "black-200": "rgba(9, 3, 37, 0.9)", // New black-200 color with 90% opacity
        "white-100": "rgba(243, 243, 243, 0.9)", // New white-100 color with 90% opacity
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35", // You can update this boxShadow as needed
      },
      screens: {
        xs: "450px", // You can update this screen size as needed
      },
      
    },
  },
  plugins: [],
};
