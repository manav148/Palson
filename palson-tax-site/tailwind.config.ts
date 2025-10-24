import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        navy: {
          DEFAULT: "#0B1E3B",
          50: "#E8EBF0",
          100: "#D1D7E1",
          200: "#A3AFC3",
          300: "#7587A5",
          400: "#475F87",
          500: "#0B1E3B",
          600: "#091832",
          700: "#071229",
          800: "#050C20",
          900: "#030617",
        },
        slate: {
          DEFAULT: "#1F2937",
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
        teal: {
          DEFAULT: "#0EA5A6",
          50: "#E6F7F7",
          100: "#CCEFEF",
          200: "#99DFDF",
          300: "#66CFCF",
          400: "#33BFBF",
          500: "#0EA5A6",
          600: "#0B8485",
          700: "#086364",
          800: "#064243",
          900: "#032122",
        },
        emerald: {
          DEFAULT: "#22C55E",
          50: "#F0FDF4",
          100: "#DCFCE7",
          200: "#BBF7D0",
          300: "#86EFAC",
          400: "#4ADE80",
          500: "#22C55E",
          600: "#16A34A",
          700: "#15803D",
          800: "#166534",
          900: "#14532D",
        },
        indigo: {
          DEFAULT: "#6366F1",
          50: "#EEF2FF",
          100: "#E0E7FF",
          200: "#C7D2FE",
          300: "#A5B4FC",
          400: "#818CF8",
          500: "#6366F1",
          600: "#4F46E5",
          700: "#4338CA",
          800: "#3730A3",
          900: "#312E81",
        },
        // Semantic Colors
        success: "#16A34A",
        warning: "#F59E0B",
        error: "#EF4444",
        // Surface Colors
        surface: {
          DEFAULT: "#F9FAFB",
          card: "#FFFFFF",
          subtle: "#F3F4F6",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "2xs": "0.75rem",    // 12px
        xs: "0.875rem",      // 14px
        sm: "1rem",          // 16px
        base: "1.125rem",    // 18px
        lg: "1.25rem",       // 20px
        xl: "1.5rem",        // 24px
        "2xl": "1.875rem",   // 30px
        "3xl": "2.25rem",    // 36px
        "4xl": "3rem",       // 48px
        "5xl": "3.75rem",    // 60px
      },
      spacing: {
        "4": "0.25rem",
        "8": "0.5rem",
        "12": "0.75rem",
        "16": "1rem",
        "24": "1.5rem",
        "32": "2rem",
        "48": "3rem",
        "64": "4rem",
        "96": "6rem",
        "128": "8rem",
      },
      borderRadius: {
        sm: "0.25rem",
        DEFAULT: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
        glow: "0 0 20px rgb(14 165 166 / 0.3)",
        "glow-hover": "0 0 30px rgb(14 165 166 / 0.5)",
      },
      backgroundImage: {
        "trustwave": "linear-gradient(45deg, #0B1E3B 0%, #6366F1 100%)",
        "mint-glow": "linear-gradient(30deg, #0EA5A6 0%, #22C55E 100%)",
      },
      transitionDuration: {
        "150": "150ms",
        "200": "200ms",
        "250": "250ms",
      },
      transitionTimingFunction: {
        "ease-out": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "slide-in": "slide-in 0.3s ease-out",
      },
    },
  },
  plugins: [],
};
export default config;
