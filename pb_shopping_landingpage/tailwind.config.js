/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'scroll-right': {
          '0%': { transform: 'translateX(-66.666%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'scroll-right': 'scroll-right 20s linear infinite',
      },
    },
  },
  plugins: [],
}

