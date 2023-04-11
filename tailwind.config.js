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
        mainbackground: '#151A2E',
        lightgray: '#6C747D',
        primarygreen: '#0BB885',
        lightgreen: '#98FFE0',
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
};
