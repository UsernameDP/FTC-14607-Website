/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        FTC_RED: "#e31c25",
        FTC_GREY: "#5c5a5a"
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"]
      }
    }
  },
  plugins: []
};
