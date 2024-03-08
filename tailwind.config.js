/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      xs: { min: "320px", max: "440px" },
      ss: { min: "440px", max: "640px" },
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1024px",
      xxl: "1200px",
      img: { min: "1200px", max: "1376px" },
    },
    extend: {
      colors: {
        primary: "#131424",
        secondary: "#393A47",
        accent: "#F13024",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        fontFamily: {},
        fontSize: {},
        fontWeight: {},
        lineHeight: {},
        borderRadius: {},
        colors: {},
        spacing: {},
        width: {},
        minWidth: {},
        maxWidth: {},
        height: {},
        minHeight: {},
        maxHeight: {},
      },
      backgroundImage: {
        explosion: 'url("/")',
        circles: 'url("/")',
        circleStar: 'url("/")',
        site: 'url("/")',
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
      },
      fontFamily: {
        poppins: [`var(--font-poppins)`, "sans-serif"],
        sora: [`var(--font-sora)`, "sans-serif"],
      },
    },
  },
  container: {
    padding: {
      DEFAULT: "15px",
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
