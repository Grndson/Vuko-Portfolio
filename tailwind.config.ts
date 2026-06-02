import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        red: {
          DEFAULT: "#cc0000",
          dim: "#a50000",
        },
        dark: {
          DEFAULT: "#090d0c",
          2: "#0d1210",
          3: "#111815",
          4: "#161f1c",
          5: "#1c2926",
        },
      },
      animation: {
        "float": "float 4s ease-in-out infinite",
        "blink": "blink 1s step-end infinite",
        "ring": "ring-pulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
