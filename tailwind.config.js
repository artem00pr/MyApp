/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#FF4500",
        secondary: "#FF8C00",
        accent: "#FFD700",
        dark: "#1C1C1E",
        light: "#F9F5F0",
        card: "#FFFFFF",
        muted: "#9B9B9B",
        surface: "#FFF8F0",
      },
      fontFamily: {
        "quicksand-light": ["Quicksand-Light"],
        "quicksand-regular": ["Quicksand-Regular"],
        "quicksand-medium": ["Quicksand-Medium"],
        "quicksand-semibold": ["Quicksand-SemiBold"],
        "quicksand-bold": ["Quicksand-Bold"],
      },
    },
  },
  plugins: [],
};
