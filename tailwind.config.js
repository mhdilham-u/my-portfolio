/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        darker: ["Darker Grotesque", "sans-serif"],
      },
      colors: {
        primary: "var(--primary-color)",
        title: "var(--title-color)",
        paragraph: "var(--paragraph-color)",
        body: "var(--body-color)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
          xl: "4rem",
          "2xl": "6rem",
        },
      },
      boxShadow: {
        "3xl": "0 1px 4px 0 rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
