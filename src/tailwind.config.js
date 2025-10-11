// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // adjust if needed
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"], // 👈 Register Lato
      },
    },
  },
  plugins: [],
};
