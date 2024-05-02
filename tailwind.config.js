/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#2f66aa",
        secondary: "#d11924",
        third: "#f3f3f3"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    }
  },
  plugins: [],
};