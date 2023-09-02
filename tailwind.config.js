/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        FTC_RED: "#e31c25",
        FTC_GRAY: "#5c5a5a",
        FTC_LIGHT_GRAY: "#f6f7ff",
        FTC_LIGHTER_GRAY: "#5c5a5a"
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"]
      },
      screens: {
        "2xl": "1920px",
        "3xl": "2256px",
        "4xl": "3600px"
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem"
      },
      width: {
        18: "4.5rem"
      },
      height: {
        18: "4.5rem"
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};
