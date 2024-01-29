import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        main: "#F9F8F8",
        primary: "#001E3B",
        secondary: "#007BB2",
        subtitle: "#0C0C0C",
        support: "#344054",
        line: "#E9E9E9",
        orbit: "#CDCDCD",
        planet: "#D9D9D9",
        smoke: "rgba(0,0,0,0.5)",
        "gray-100": "#F2F2F2",
        "gray-200": "#EAECF0",
        "gray-300": "#E0DDDD",
        "gray-400": "#D0D5DD",
        "gray-500": "#4F4C4C",
        "gray-600": "#667085",
        "gray-700": "#D6D6D6",
      },
      fontSize: {
        header: "2.5rem",
      },
      animation: {
        "spin-xs": "spin 20s linear infinite",
        "spin-s": "spin 15s linear infinite",
        "spin-normal": "spin 12s linear infinite",
        "rotation-balance": "balance 6s linear infinite",
        rotateY: "rotateAnimation 12s steps(1) infinite",
      },
      keyframes: {
        balance: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(-180deg)",
          },
        },
        rotateAnimation: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(-180deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
