/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkblue: '#171E37',
        darkblueactive: '#1F2849',
        lightgray: '#6C747D',
        primarygreen: '#0BB885',
        lightgreen: '#98FFE0',
      },
    },
  },
  plugins: [],
};
