import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "mb-light-gray": "#F4F4F4",
        "mb-dark-gray": "#202020",
        "mb-dust-gray": "#979797",
        "mb-dark-teal": "#344054",
        "mb-lila": "#9C7DDF",
        "mb-green": "#BFFF74",
        "mb-pink": "#FF4A9B",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-dm-mono)"],
        serif: ["var(--font-gowun-batang)"],
      },
    },
  },
  plugins: [],
};
export default config;
