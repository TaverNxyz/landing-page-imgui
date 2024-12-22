/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#1A1A1A',
          sidebar: '#171717',
          border: '#2A2A2A',
          hover: '#1E1E1E',
          text: '#9CA3AF',
          accent: '#8B5CF6'
        }
      }
    },
  },
  plugins: [],
};