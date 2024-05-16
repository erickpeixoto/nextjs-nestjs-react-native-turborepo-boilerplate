
import type { Config } from "tailwindcss";

export const colors = {
  white: "#FDFCFB",

  gray: {
    900: "#202123",
    800: "#2A2B2D",
    700: "#323336",
    600: "#444547",
    400: "#9AA0A6",
  },
  orange: {
    800: "#5E4D4E",
    500: "#F28B81",
    300: "#F6AEA9",
  },
  yellow: {
    600: "#F5B400",
  },
  blue: {
    600: "#4285F4",
  },
  identity: "#F28B81",
}



export const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors,
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "meteor-effect": "meteor 5s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;