import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#fcfcf8",
        navy: { DEFAULT: "#2a4a70", deep: "#223d5d", soft: "#3a5d86" },
        copper: { DEFAULT: "#c4854f", dark: "#a96d3a", label: "#b9733a" },
        ink: "#1f2a37",
        muted: "#5f6b7a",
        edge: "#e8e4da",
        tag: { bg: "#e6eaf0", fg: "#4a5c73" },
        good: "#2f9e6b",
      },
      fontFamily: {
        serif: ['"Source Serif 4"', "Georgia", "serif"],
        sans: ['"Source Sans 3"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
