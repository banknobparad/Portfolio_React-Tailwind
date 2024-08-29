/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryTitle: "#defbfb ",
        primaryContent: "#0FC2C0 ",
        primarySubcontent: "#025159",
        primaryBase: "#038C8C",
        primaryAccent: "#efa143",
        primaryBg: "#021414",
        primaryBgbtn: "#052424",
        primaryBgHover: "#062626",
      },
    },
  },
  plugins: [],
};
