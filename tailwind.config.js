/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'mono': ['JetBrains Mono', 'monospace'],
    },
    extend: {
      keyframes: {
        fadeInDown: {
          '0%': { opacity: '0', bottom: '10%' },
          '100%': { opacity: '1', bottom: '0' },
        }
      }
    },
  },
  plugins: [],
}

