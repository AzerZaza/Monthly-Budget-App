import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-dark-base": "#1E1E1E",
        "main-dark-main-20": "#A3A3A3",
        "compl-opt-1": "#FFE600",
        "compl-opt-2": "#51D289",
        "extras-box-color-light": "#FFFDE7",
      },
    },
  },
  plugins: [],
};

export default config;
