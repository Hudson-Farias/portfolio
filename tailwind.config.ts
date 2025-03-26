import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      fontFamily: {
        dmSans: ["DM Sans", "serif"]
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
} satisfies Config;
