/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["cupcake", "halloween", "retro"],
    darkTheme: "halloween", // name of one of the included themes for dark mode
    lightTheme: "cupcake", // name of one of the included themes for light mode
  },
};
