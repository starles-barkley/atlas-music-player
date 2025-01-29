/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "scooby-teal": "#4CB7A5",
        "scooby-purple": "#7C4DFF",
        "scooby-orange": "#FF8C42",
        "scooby-green": "#A3D900",
      },
    },
  },
  plugins: [],
};
