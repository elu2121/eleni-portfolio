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
        // Midnight and champagne gold theme
        // Background: #0B0F1A
        // Cards: #131929
        // Text: #F2EEE6
        // Muted text: #9AA3B5
        // Accent: #D4B26A
        graphite: {
          950: "#0B0F1A", // Deepest background / Midnight
          900: "#0E1422", // Section canvas background
          850: "#131929", // Surface / card background
          800: "#1A2236", // Elevated card / hover surface
          750: "#222B42", // Borders & subtle outlines
          700: "#2C3752", // Active borders / separators
          600: "#4B5975", // Low emphasis icons/borders
          500: "#6F7B95", // Subtle text
          400: "#9AA3B5", // Muted text (Warm grey-blue)
          300: "#B5BDCE", // Light muted text
          200: "#D7D4CB", // Warm light text
          100: "#F2EEE6", // Primary text (Warm off-white)
          50: "#FAF7F2",  // Brightest warm off-white
        },
        emerald: {
          950: "#231C0C", // Deepest warm gold tone
          900: "#3D3014",
          800: "#614D1E",
          700: "#876B28",
          600: "#B38E37",
          500: "#D4B26A", // Accent Primary: Soft Champagne Gold
          400: "#E0C480", // Vibrant Champagne Gold highlight
          300: "#EBD6A2", // Soft Champagne Gold text
          200: "#F4E8C5",
          100: "#FAF3DF",
          50: "#FDFBF4",
        },
        gold: {
          950: "#231C0C",
          900: "#3D3014",
          800: "#614D1E",
          700: "#876B28",
          600: "#B38E37",
          500: "#D4B26A", // Soft Champagne Gold
          400: "#E0C480",
          300: "#EBD6A2",
          200: "#F4E8C5",
          100: "#FAF3DF",
          50: "#FDFBF4",
        },
      },
      fontFamily: {
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
        "card-hover": "0 10px 30px -4px rgba(0, 0, 0, 0.7), 0 0 16px -2px rgba(212, 178, 106, 0.22)",
        "emerald-glow": "0 0 25px -5px rgba(212, 178, 106, 0.35)",
        "emerald-sm": "0 0 12px -2px rgba(212, 178, 106, 0.4)",
      },
    },
  },
  plugins: [],
};
