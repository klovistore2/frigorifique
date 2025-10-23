import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // App Router scan
    "./components/**/*.{js,ts,jsx,tsx}", // Tes comps
    "./node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}", // Shadcn magic
  ],
  theme: {
    extend: {}, // Clean slate—ajoute que si need real vars later
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
