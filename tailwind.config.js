/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-1000": "#151619",
        "dark-900": "#1D1F22",
        "dark-800": "#2B2D31",
        "dark-700": "#35393F",
        "dark-600": "#5A6069",
        "dark-500": "#7C8187",
        "dark-400": "#C1C4CB",
        "dark-300": "#E4E4E4",
        "dark-200": "#F5F5F5",
        "dark-100": "#FFFFFF",
        orange: "#E46643",
        "orange-hover": "#F39765",
      },
    },
  },
  plugins: [],
};
