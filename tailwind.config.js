// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textDark: "#191919", // font color
        active: "#F2EFEC", // active
        hoverBg: "rgba(0,0,0,0.20)", // while hovering
        // Add more as needed
      },

      fontFamily: {
        amiri: ["Amiri", "serif"],
        publicSans: ['"Public Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
