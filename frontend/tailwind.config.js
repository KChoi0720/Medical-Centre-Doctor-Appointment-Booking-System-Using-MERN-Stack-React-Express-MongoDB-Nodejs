/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  
  theme: {
    extend: {
      colors: {
        primary: "#1A5F7A",
        secondary: "#12883D",
        tertiary: "#F8F8F8",
        quaternary: "#EAF2EA",
      },
    },
  },
  plugins: [],
};
