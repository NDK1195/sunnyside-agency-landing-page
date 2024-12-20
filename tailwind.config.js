/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        fraunces: ["Fraunces", "serif"],
        barlow: ["Barlow", "serif"],
      },
      colors: {
        "soft-red": "hsl(7, 99%, 70%)",
        yellow: "hsl(51, 100%, 49%)",
        "dark-desaturated-cyan-(graphic-design-text)": "hsl(167, 40%, 24%)",
        "dark-blue-(photography-text)": "hsl(198, 62%, 26%)",
        "dark-moderate-cyan-(footer)": "hsl(168, 34%, 41%)",
        "very-dark-desaturated-blue": "hsl(212, 27%, 19%)",
        "very-dark-grayish-blue": "hsl(213, 9%, 39%)",
        "dark-grayish-blue": "hsl(232, 10%, 55%)",
        "grayish-blue": "hsl(210, 4%, 67%)",
      },
      backgroundImage: {
        "header-desktop": 'url("../images/desktop/image-header.jpg")',
        "header-mobile": 'url("../images/mobile/image-header.jpg")',
      },
    },
  },
  plugins: [],
};
