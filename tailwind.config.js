// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textDark: "#000C25", // font color
        active: "#F2EFEC", // active
        timerBg: "rgba(221,229,255,0.50)", // while hovering
        // Add more as needed
      },

      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg,rgba(245,247,255,0.80) 0%,rgba(214,220,255,0.80) 100%)",
        "hero-pattern": "url('/src/assets/bg.jpg')",
      },

      fontFamily: {
        amiri: ["Amiri", "serif"],
        publicSans: ['"Public Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
