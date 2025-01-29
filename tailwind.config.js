/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        scoobyTeal: '#4CB7A5',
        scoobyPurple: '#7C4DFF',
        scoobyOrange: '#FF8C42',
        scoobyGreen: '#A3D900',
        darkScoobyTeal: '#2F7E6E',
        darkScoobyPurple: '#5B2ECC',
        darkScoobyOrange: '#CC6E35',
        darkScoobyGreen: '#7BA300',
      },
    },
  },
  plugins: [],
};
