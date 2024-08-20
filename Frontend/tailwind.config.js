/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-dark-blue': 'rgb(5, 3, 35)',
      },
      boxShadow: {
        'custom': '0 1px 10px #e0dddb',
      },
      keyframes: {
        'slide-right': {
          '0%': { transform: 'translateX(-35%)' },
          '100%': { transform: 'translateX(50px)' },
        },
        'slide-left': {
          '0%': { transform: 'translateX(55%)' },
          '100%': { transform: 'translateX(0)' },
        },
        fade: {
          '0%': { opacity: '0.4' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'slide-right': 'slide-right 1s forwards',
        'slide-left': 'slide-left 1s forwards',
        'fade': 'fade 1s ease-in-out',
      },
    },
  },
  plugins: [],
};
