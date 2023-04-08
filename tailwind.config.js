/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
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
        "dark-overlay": "rgba(0, 0, 0, 0.5)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        robotoSlab: ["Roboto Slab", "serif"],
        robotoMono: ["Roboto Mono", "monospace"],
      },
      keyframes: {
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        contentShow: {
          from: { opacity: 0, transform: "translate(-50%, -48%) scale(0.96)" },
          to: { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
        },
      },
      animation: {
        overlayShow: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        contentShow: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
