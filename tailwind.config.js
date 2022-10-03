/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '100': '42rem',
        '98':"32rem",
      }
    },
  },
  plugins: [],
}
