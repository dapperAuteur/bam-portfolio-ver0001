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
        // Define your custom brand colors here
        primary: {
          DEFAULT: '#2563EB', // Blue 600
          light: '#DBEAFE', // Blue 100
          dark: '#1E40AF', // Blue 800 for darker variations
        },
        accent: '#10B981', // Emerald 500
        page: {
          background: '#181a1b', // Dark background
          text: '#46484d',       // Dark primary text
        },
        card: {
          background: '#51565c', // A bit lighter card background for more contrast
          border: '#3a3e40',     // Subtle border for cards
          text: '#46484d',       // Light text for cards
        },
        // General text for descriptions, etc.
        secondaryText: '#a0a3a6', // Dimmer light text for descriptions, etc.
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      // Keep other extends if they were already there for gradients etc.
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;