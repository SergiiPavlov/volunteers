/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1F75FE",
        accent: "#FFC107",
        success: "#22C55E",
        danger: "#EF4444",
        neutral: {
          900: "#0B1220",
          700: "#334155",
          500: "#64748B",
          300: "#CBD5E1",
          100: "#F1F5F9"
        }
      },
      borderRadius: {
        xs: "6px", sm: "10px", md: "14px", lg: "20px", xl: "28px"
      },
      boxShadow: {
        sm: "0 1px 2px rgba(0,0,0,0.06)",
        md: "0 6px 18px rgba(0,0,0,0.08)",
        lg: "0 14px 38px rgba(0,0,0,0.12)"
      },
      fontFamily: {
        sans: ["Roboto", "system-ui", "Arial", "sans-serif"],
        heading: ["Montserrat", "system-ui", "Arial", "sans-serif"]
      }
    },
  },
  plugins: [],
};
