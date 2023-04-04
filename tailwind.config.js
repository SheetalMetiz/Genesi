/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      extend: {
        screens: {
          'sm': '576px',
          'md': '960px',
          'lg': '1440px',
        },
        gridTemplateColumns: {
          sidebar: "300px auto", //for sidebar layout
        },
        gridTemplateRows: {
          header: "64px auto", //for the navbar layout
        },
      },
    },
  },
  plugins: [],
}

