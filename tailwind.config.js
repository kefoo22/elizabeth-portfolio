/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a0a0a',    // Dark black background
        secondary: '#1f1f1f',  // Dark grey sections
        accent: '#fbbf24',     // Soft gold accent
        light: '#d1d5db',      // Light grey for text
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],

}
