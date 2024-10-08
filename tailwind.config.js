/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'custom-shadow': '0 0 24px 0 rgba(0, 0, 0, 0.12)',

      },
      fontFamily: {
        open: ['Open Sans'],
        railway: ['Raleway']
      }
    },
  },
  plugins: [],
}

