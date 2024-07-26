/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: { min: "640px", max: "1024px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },

      lg: { min: "1025px" },
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "27px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      spacing: {
        1: "8px",
        2: "12px",
        3: "16px",
        4: "24px",
        5: "32px",
        6: "48px",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      colors: {
        slate: {
          10: "#f1f3f4",
        },
        green: {
          50: "#30AF5B",
          90: "#292c27",
        },
        gray: {
          10: "#EEEEEE",
          20: "#A2A2A2",
          30: "#7B7B7B",
          50: "#585858",
          90: "#1411414",
        },
        "black-100": "#2B2C35",
        darkText: "#242424",
        lightText: "#a5a5a5",
        bgLight: "#1010100d",
        bodyColor: "#fbfaf7",
        "primary-blue": {
          DEFAULT: "#2B59FF",
          100: "#F5F8FF",
        },
        "secondary-orange": "#f79761",
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)",
          100: "rgba(59,60,152,0.02)",
        },
        grey: "#747A88",
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },

      screens: {
        xs: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
    },
  },
  plugins: [],
};
