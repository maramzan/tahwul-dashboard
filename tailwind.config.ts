import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        background: "var(--color-background)",
        success: "var(--color-success)",
        "success-dark": "var(--color-success-dark)",
        warning: "var(--color-warning)",
        danger: "var(--color-danger)",
        error: "var(--color-error)",
        info: "var(--color-info)",
      },
    },
  },
  plugins: [],
};

export default config;
