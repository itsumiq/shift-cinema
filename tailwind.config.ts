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
          brand: "#9534D2",
        },
        text: {
          primary: "#344051",
          tertiary: "##637083",
        },
        indicator: {
          light: "#CED2DA",
          attention: "#FFB219",
          medium: "#97A1AF",
        },
      },
    },
  },
  plugins: [],
};
export default config;
