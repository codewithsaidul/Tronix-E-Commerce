/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#F46B5B",
        "gray": "#A7A7A7"
      },
      fontFamily: {
        "title": "'Montserrat', sans-serif",
        "body": '"Poppins", sans-serif'
      }
    },
  },
  plugins: [],
}

