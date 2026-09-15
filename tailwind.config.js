/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050507",
        panel: "#0b0b10",
        line: "#1c1c24",
        accent: {
          DEFAULT: "#a855f7",
          soft: "#c084fc",
          pale: "#e9d5ff",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};
