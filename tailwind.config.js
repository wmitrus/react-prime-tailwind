/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        '100vh-h-12': 'calc(100vh - 3rem)',
      },
    },
  },
  plugins: [],
};
