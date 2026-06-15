/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,jsx}", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 18px rgba(94, 234, 212, 0.22), inset 0 0 18px rgba(255,255,255,0.05)",
      },
    },
  },
  plugins: [],
};
