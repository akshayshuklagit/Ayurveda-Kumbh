/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
      },
      colors: {
        primary: {
          DEFAULT: "#FF7722", // Saffron
          dark: "#E05F00",
          light: "#FF9955",
        },
        secondary: {
          DEFAULT: "#8D6E63", // Earthy brown
          dark: "#6D4C41",
          light: "#A1887F",
        },
        accent: {
          DEFAULT: "#4CAF50", // Green for Ayurvedic herbs
          dark: "#388E3C",
          light: "#66BB6A",
        },
        background: {
          DEFAULT: "#FFF8E1", // Light cream background
          dark: "#FFECB3",
          paper: "#FFFFFF",
        },
      },
      fontFamily: {
        sanskrit: ["Sanskrit Text", "serif"],
        heading: ["Poppins", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1)",
        button: "0 2px 4px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/banner.png')",
        texture: "url('/src/assets/texture.png')",
      },
    },
  },
  plugins: [],
};
