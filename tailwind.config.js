/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2c2827',
        accent: '#f8ce00',
        secondary: '#FF6B6B',
        background: '#FFFFFF',
        text: '#1F1F1F',
        'text-light': '#4F4F4F',
        'text-lighter': '#E5E5E5'
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'display': ['48px', '1.1'],
        'h1': ['40px', '1.2'],
        'h2': ['32px', '1.3'],
        'base': ['16px', '1.5'],
        'sm': ['14px', '1.5']
      },
      spacing: {
        'section': '80px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
