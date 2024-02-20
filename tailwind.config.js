/** @type {import('tailwindcss').Config} */
export default {
  
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [require("daisyui"), require('@tailwindcss/forms')],
  darkMode: false,
  daisyui: {
    darkTheme: false,
  },
  
}

