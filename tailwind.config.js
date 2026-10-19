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
        graphite: {
          950: "#090c10", // Primary deepest background
          900: "#0e131b", // Section / main canvas background
          850: "#141a24", // Surface / card background
          800: "#1a2230", // Elevated surface / card hover
          750: "#222c3d", // Borders & subtle outlines
          700: "#2d394e", // Active border / mute separator
          600: "#45536b", // Low emphasis icon/borders
          500: "#64748b", // Subtle text / placeholder
          400: "#94a3b8", // Secondary text
          300: "#cbd5e1", // Primary muted text
          200: "#e2e8f0", // High contrast text
          100: "#f1f5f9", // Off-white primary text
          50: "#f8fafc",  // Crisp white accent text
        },
        emerald: {
          950: "#022c22",
          900: "#064e3b",
          800: "#065f46",
          700: "#047857",
          600: "#059669",
          500: "#10b981", // Accent primary
          400: "#34d399", // Accent hover & vibrant highlight
          300: "#6ee7b7", // Soft accent text
          200: "#a7f3d0",
          100: "#d1fae5",
          50: "#ecfdf5",
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
        "card": "0 4px 20px -2px rgba(0, 0, 0, 0.45)",
        "card-hover": "0 10px 30px -4px rgba(0, 0, 0, 0.6), 0 0 15px -2px rgba(16, 185, 129, 0.15)",
        "emerald-glow": "0 0 25px -5px rgba(16, 185, 129, 0.25)",
        "emerald-sm": "0 0 12px -2px rgba(16, 185, 129, 0.3)",
      },
    },
  },
  plugins: [],
};
