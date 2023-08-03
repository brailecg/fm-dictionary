/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        fmblack: {
          one: "#050505",
          two: "#1F1F1F",
          three: "#2D2D2D",
          four: "#3A3A3A",
        },
        fmgrey: {
          one: "#757575",
          two: "#e9e9e9",
          three: "#f4f4f4",
        },
        component: {
          purple: "#a445ed",
          red: "#ff5252",
        },
      },
    },
  },
  plugins: [],
};
