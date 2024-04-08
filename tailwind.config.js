/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          'custom-blue' : '#4baae8',
          'custom-indigo' : '#1c4571' 
        }
      }
    },
  },
  plugins: [],
}