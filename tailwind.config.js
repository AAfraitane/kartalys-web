const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./pages/*.js",
    "./pages/**/*.js",
    "./components/*.js",
    "./components/**/*.js",
  ],
  theme: {
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      t: "0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      orange: "0px 20px 20px -15px rgba(245,56,56,0.81) ",
      blue: "0px 20px 20px -15px rgba(47,128,237,0.81) ",
      "orange-md": "0px 20px 40px -15px rgba(245,56,56,0.81) ",
      "blue-md": "0px 20px 40px -15px rgba(47,128,237,0.81) ",
      none: "none",
    },
    colors: {
      transparent: "transparent",
      gray: {
        100: '#EBF1F5',
        200: '#D9E3EA',
        300: '#C5D2DC',
        400: '#9BA9B4',
        500: '#707D86',
        600: '#55595F',
        700: '#33363A',
        800: '#25282C',
        900: '#151719',
      },
      black: {
        500: "#4F5665",
        600: "#0B132A",
      },
      orange: {
        100: 'rgb(255 237 213)',
        200: 'rgb(254 215 170)',
        300: 'rgb(253 186 116)',
        400: 'rgb(251 146 60)',
        500: 'rgb(249 115 22)',
        600: 'rgb(234 88 12)',
        700: 'rgb(194 65 12)',
        800: 'rgb(154 52 18)',
        900: 'rgb(124 45 18)',
      },
      red: {
        100: 'rgb(254 202 202)',
        200: 'rgb(252 165 165)',
        300: 'rgb(248 113 113)',
        400: 'rgb(239 68 68)',
        500: 'rgb(220 38 38)',
        600: 'rgb(185 28 28)',
        700: '#910C00',
        800: 'rgb(127 29 29)',
        900: 'rgb(69 10 10)',
        kartalys: '#910C00',
      },
      blue: {
        100: "#E6F2FF",
        500: "#2F80ED",
      },
      green: {
        200: "#E3FCEF",
        500: "#2FAB73",
        800: "#1A4731",
      },
      yellow: {
        100: "#FFFBEA",
        500: "#F59E0B",
        700: "#B45309",
      },
      white: {
        100: "#ffffff",
        300: "#F8F8F8",
        500: "#fff",
      },
    },
    extend: {
      colors: {
        red: {
          700: "#910C00",
        },
      },
      listStyleImage: {
        checklist: 'url("/public/assets/checklist.svg")',
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["active", "hover"],
    },
  },
  plugins: [],
});
