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
        blackGradient:
          "background: radial-gradient(circle at 10% 20%, rgb(0, 0, 0) 0%, rgb(64, 64, 64) 90.2%);",
        pinkGradient:
          "linear-gradient(180deg, rgba(190,24,93,1) 39%, rgba(255,255,255,1) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
