/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cyanGlow: "#22d3ee",
        blueGlow: "#3b82f6",
        darkBg: "#020617",
      },
    },
  },
  plugins: [],
};
