/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center : true,
      screens : {
        lg: '1060px',
      }
    },
    fontFamily: {
      Oswald: "var(--Oswald)",
      JosefinSans: "var(--JosefinSans)",
    },
    extend: {
      colors: {
        textColorOne: "var(--textColorOne)",
        mainBg: "var(--mainBg)",
        textColorTwo: "var(--textColorTwo)",
        textColorThree: "var(--textColorThree)",
      },
      backgroundImage: {
        bgColor: "var(--bgColor)",
        bgColortwo: "var(--bgColortwo)",
      },
    },

  },
  plugins: [],
};
