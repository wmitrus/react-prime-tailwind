/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        18: '66px',
        '100vh-h-12': 'calc(100vh - 3rem)',
        'h-navbar': 'h-48',
      },
    },
  },
  plugins: [],
};
