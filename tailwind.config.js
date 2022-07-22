/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        base: "0px",
        mobile: "325px",
        tablet: "640px",
        laptop: "1024px",
        desktop: "1280px",
        tv: "1355px",
      },
    },
  },
  plugins: [],
};
