import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["Pretendard", "sans-serif"],
      },
      keyframes: {
        "left-right": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-10px)" },
        },
        "right-left": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(10px)" },
        },
      },
      animation: {
        "left-right": "left-right 2s ease-in-out infinite",
        "right-left": "right-left 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
