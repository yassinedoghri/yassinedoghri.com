const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Atkinson Hyperlegible"', ...defaultTheme.fontFamily.sans],
        sans: ['"Atkinson Hyperlegible"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
