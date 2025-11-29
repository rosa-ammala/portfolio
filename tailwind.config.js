/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        handwritten: ['var(--font-reenie-beanie)', 'cursive'],
        sans: ['Open Sans', 'sans-serif'],
        serif: ['Averia Serif Libre', 'serif'],
      },
    },
  },
  plugins: [],
}

