/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sidebar: '#171E37',
        sidebaractive: '#1F2849',
        'darkblue-26': '#151A2E',
        'darkblue-24': '#1C243F',
        'darkblue-32': '#2E4B85',
        primarygreen: '#0BB885',
        lightgreen: '#98FFE0',
        'black-46': '#6C747D',
        orange: '#FF814A',
        timelineborder: '#5C6CA5',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [],
  },
};
