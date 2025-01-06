import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Roboto",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      colors: {
        "main-yellow": "#f5f5f0",
        "main-red": "#66edc7",
        "sub-red": "#4ad9b0",
        "main-black": "#3A343E",
        "sub-black": "#000000",
        "main-grey": "#9B9999",
      },
      backgroundImage: {
        "custom-radial":
          "radial-gradient(50% 50% at 50% 50%, rgba(217, 88, 252, 0.301961) 0%, rgba(250, 241, 142, 0) 92%)",
        "custom-dot": "radial-gradient(transparent 1px, #ffffff, #ffffff 1px);",
        "custom-dot-minth": "radial-gradient(transparent 1px, #79f9db 8px);",
      },
      boxShadow: {
        base: "0px 4px 4px rgba(0, 0, 0, 0.25);",
        card: "0px 2px 16px rgba(121, 249, 219, 0.28);",
      },
    },
  },
  plugins: [],
} satisfies Config;
