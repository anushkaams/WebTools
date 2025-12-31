/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // important for dark:text-white to work
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
