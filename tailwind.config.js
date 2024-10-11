/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This targets all your component files inside the src folder
  ],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#293038",
      },
      screens: {
        xs: "300px",
      },
    },
  },
  plugins: [],
};
