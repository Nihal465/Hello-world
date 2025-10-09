/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef8ff',
          100: '#d6efff',
          200: '#b1e0ff',
          300: '#7cc9ff',
          400: '#45aeff',
          500: '#1b92f3',
          600: '#0f74ce',
          700: '#0c5ca6',
          800: '#0f4b83',
          900: '#113f6b',
        },
        teal: {
          500: '#25c2a0',
        },
      },
      fontFamily: {
        inter: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        poppins: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.06)'
      }
    },
  },
  plugins: [],
}
