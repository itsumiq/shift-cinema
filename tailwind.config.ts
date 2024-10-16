import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#FFFFFF",
          secondary: "#F5F5F8",
          brand: "#9534d2",
        },
        indicator: {
          light: "#CED2DA",
          normal: "#141C24",
        },
        text: {
          primary: "#141C24",
          secondary: "#344051",
          tertiary: "#637083",
        },
      },
      screens: {
        desktop: "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
