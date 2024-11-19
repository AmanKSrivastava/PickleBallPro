/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primaryTextColor: "#FFFFFF",
        secondaryTextColor: "#D77272",
        primaryButtonBackgroundColor: "#D77272",
        secondaryButtonBackgroundColor: "#CA6565",
      },
      fontFamily: {
        inter: ["inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
