/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brandDark: "#2F3E46",
        brandGreen: "#52796F",
        brandLight: "#CAD2C5",
        brandSoft: "#A3B9A4",
        brandGlow: "#84A98C",
      },

      backgroundImage: {
        "projects-bg": "linear-gradient(to bottom, #CAD2C5, #A3B9A4, rgba(82,121,111,0.25))",
      },

      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
    },
  },
  plugins: [],
};
