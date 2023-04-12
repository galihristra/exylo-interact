/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        sidebar: '#171E37',
        sidebaractive: '#1F2849',
        'darkblue-26': '#151A2E',
        'darkblue-24': '#1C243F',
        primarygreen: '#0BB885',
        lightgreen: '#98FFE0',
        'black-46': '#6C747D',
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
};
