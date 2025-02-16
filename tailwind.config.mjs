/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-1': '#0082FF',
        'light-2': '#FF9400',
        'dark-1': '#0082FF',
        'dark-2': '#FF9400',
      },
    },
  },
  plugins: [],
};
