/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Midnight & Champagne Gold palette
        // Background: #0B0F1A
        // Cards: #131929
        // Text: #F2EEE6
        // Muted text: #A9B2C3
        // Gold accent: #C9A96A
        graphite: {
          950: "#0B0F1A", // Background (Midnight)
          900: "#0E1422", // Surface
          850: "#131929", // Cards / Containers
          800: "#1A2236", // Elevated cards
          750: "#222B42", // Borders
          700: "#2C3752", // Active borders
          600: "#4B5975",
          500: "#7A869E",
          400: "#A9B2C3", // Brighter Muted text (#A9B2C3)
          300: "#C2CAD8",
          200: "#DFDBCE",
          100: "#F2EEE6", // Primary text (#F2EEE6)
          50: "#FAF7F2",
        },
        emerald: {
          950: "#201A0E",
          900: "#382D16",
          800: "#5B4820",
          700: "#7F652B",
          600: "#A5853B",
          500: "#C9A96A", // Soft Champagne Gold (#C9A96A)
          400: "#D6BC83", // Gold highlight
          300: "#E3CF9F", // Light gold
          200: "#EFE2BF",
          100: "#FAF3E0",
          50: "#FDFBF5",
        },
        gold: {
          950: "#201A0E",
          900: "#382D16",
          800: "#5B4820",
          700: "#7F652B",
          600: "#A5853B",
          500: "#C9A96A", // Soft Champagne Gold (#C9A96A)
          400: "#D6BC83",
          300: "#E3CF9F",
          200: "#EFE2BF",
          100: "#FAF3E0",
          50: "#FDFBF5",
        },
      },
      fontFamily: {
        serif: [
          "'Fraunces'",
          "Georgia",
          "Cambria",
          "'Times New Roman'",
          "Times",
          "serif",
        ],
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "'Helvetica Neue'",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "'JetBrains Mono'",
          "'Fira Code'",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      boxShadow: {
        "card": "0 4px 20px -2px rgba(0, 0, 0, 0.55)",
        "card-hover": "0 10px 30px -4px rgba(0, 0, 0, 0.7), 0 0 16px -2px rgba(201, 169, 106, 0.22)",
        "emerald-glow": "0 0 25px -5px rgba(201, 169, 106, 0.35)",
        "emerald-sm": "0 0 12px -2px rgba(201, 169, 106, 0.4)",
      },
    },
  },
  plugins: [],
};
