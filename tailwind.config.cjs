/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Playfair Display', 'sans-serif'],},
    extend: {},
  },
  plugins: [require("daisyui")],
}
