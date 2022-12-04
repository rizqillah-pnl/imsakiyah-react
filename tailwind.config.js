/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00703D",
        secondary: "#FF6B18",
        shadow: "#2FB765",
        spanBolder: "#338D64",
        borderSdg: "#CCE2D8",
        hoverColor: "#FFE1D1",
        borderCardFeatures: "#E0E0E0",
        cardText: "#616161",
        articleTitle: "#404040",
        cardFeaturesHover: "#CCE2D8",
        nameColor: "#404040",
        phoneColor: "#9E9E9E",
        postLabel: "#757575",
        stepColor: "#3D8A000F",
        blurBorder: "#F5F5F5",
      },
      spacing: {
        99: "7.5rem",
        111: "12.375rem",
      },
      boxShadow: {
        costumeShadow: "0px 20px 26px 0px rgba(54, 53, 53, 0.16)",
      },
    },
    // screens: {
    //   lmd: "960px",
    // },
  },
  plugins: [],
};
