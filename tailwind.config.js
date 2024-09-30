/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mint: {
          light: '#aaf0d1',
          DEFAULT: '#98ff98',
          dark: '#32cd32',
        },
        coral: {
          light: '#FF7F50',
          DEFAULT: '#FF6347',
          dark: '#E5533D',
        },
        lavender: {
          light: '#E6E6FA',
          DEFAULT: '#B57EDC',
          dark: '#7C4DFF',
        },
      },
    },
  },
  plugins: [],
}
