/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navBg: "#F9FAFB",
        navBorder: "#D1D5DB",
        bodyBg: "#F3F4F6",
        darkBlack: "#374151",
        lightGray: "#737373",
        futureDesc: "#6B7280",
        cardBorder: "#E5E7EB",
        forecastMode: "#A3A3A3",
      },

      maxWidth: {
        customWidth: "1232px",
      },

      boxShadow: {
        navShadow:
          "0px 1px 2px -1px rgba(0, 0, 0, 0.10), 0px 1px 3px 0px rgba(0, 0, 0, 0.10)",
        cardShadow:
          "0px 4px 6px -4px rgba(0, 0, 0, 0.10), 0px 10px 15px -3px rgba(0, 0, 0, 0.10)",
        futureShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
