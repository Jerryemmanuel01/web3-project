/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#2f27ce",
      secondary: "#dedcff",
      accent: "#433bff",
    },
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(to left, #7479fa, #2f27ce)",
      },
      backgroundColor: {
        white: "#ffffff",
      },
    },
    fontFamily: {
      bricolage: ["Bricolage Grotesque", "sans-serif"],
      dela: ["Dela Gothic One", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    plugins: [],
  },
};
