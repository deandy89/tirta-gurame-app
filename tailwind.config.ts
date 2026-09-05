import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
        script: ["var(--font-script)", "cursive"],
      },
      colors: {
        parchment: "#f7f4ed",
        parchmentDark: "#eee7d8",
        primaryTeal: "#0f3c3a",
        deepTeal: "#092322",
        waterBlue: "#134e5e",
        accentOrange: "#e75b28",
        accentGold: "#d69e2e",
      },
      animation: {
        "float-slow": "floatSlow 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2.5s infinite",
        "ripple": "ripple 4s linear infinite",
        "subtle-swim": "subtleSwim 5.5s ease-in-out infinite",
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(0.5deg)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.9", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(1.2)" },
        },
        ripple: {
          "0%": { transform: "scale(0.8)", opacity: "1" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
        subtleSwim: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-7px) rotate(0.4deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
