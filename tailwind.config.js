/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#0767B2',
        'secondary':'#6B7280'
      },
      borderColor:{
        'primary': '#0767B2'
      }
    },
  },
  plugins: [],
}

