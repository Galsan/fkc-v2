export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textShadow: {
        "all-hover":
          "0 0 4px rgb(134, 206, 17), 0 0 4px rgb(134, 206, 17), 0 0 4px rgb(134, 206, 17), 0 0 4px rgb(134, 206, 17)", // Custom text shadow for hover
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow-all-hover": {
          textShadow:
            "0 0 4px rgb(134, 206, 17), 0 0 4px rgb(134, 206, 17), 0 0 4px rgb(134, 206, 17), 0 0 4px rgb(134, 206, 17)",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
