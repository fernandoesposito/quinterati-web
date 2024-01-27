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
        "gray-200": "#EAECF0",
        "gray-300": "#E0DDDD",
        "gray-400": "#D0D5DD",
        "gray-500": "#4F4C4C",
        "gray-600": "#667085",
      },
      fontSize: {
        header: "2.5rem",
      },
      animation: {
        "spin-xs": "spin 20s linear infinite",
        "spin-s": "spin 15s linear infinite",
        "spin-normal": "spin 12s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
