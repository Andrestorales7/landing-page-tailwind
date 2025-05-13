/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}', // si usas carpeta components
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['var(--font-rubik)', 'sans-serif'], // Rubik como base
        },
      },
    },
    plugins: [],
  }
  