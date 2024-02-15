module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sfpro: [
        'SF-Pro-Regular',
        'SF-Pro-Bold',
        'SF-Pro-Italic',
        'sans-serif',
      ],
      mono: ['Noto Sans Mono']
    },
    colors: {
      bc: "#2b2c40",
      primary: "#d1dff0",
      secondary: "#474863",
      tertiary: "#84d3c6",
      danger: "#052540",
      lightGrey: "#C9D5EE",
      customc: "#474863"
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
