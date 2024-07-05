/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        lightBlue: "#1096FE",
        darkBlue: "#151723",
        lightGray: "#434959"
      }
    },
  },
  plugins: [],
}