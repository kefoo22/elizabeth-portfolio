/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000", // black
        secondary: "#1f1f1f", // dark grey
        accent: "#a3a3a3", // lighter grey
      },
    },
  },
  plugins: [],
}
