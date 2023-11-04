/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#122D60',
        'offwhite': '#F5F5F5'
      },
    },
  },
  plugins: [],
}