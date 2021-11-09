const colors = require("tailwindcss/colors");

module.exports = {
  theme: {
    colors: {
      ...colors,
      background: "#f0f0f0",
      customBlue: "#13c5eb",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["disabled"],
      cursor: ["disabled"],
      opacity: ["disabled"],
    },
  },
  plugins: [],
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./sections/**/*.{js,ts,jsx,tsx}",
    ],
  },
};
