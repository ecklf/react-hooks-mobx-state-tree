module.exports = {
  theme: {
    fontFamily: {
      display: [
        "Inter",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ]
    },
    customForms: theme => ({
      default: {
        input: {
          backgroundColor: theme("colors.gray.900"),
          "&::placeholder": {
            color: theme("colors.gray.500"),
            opacity: "1"
          },
          "&:focus": {
            outline: "none",
            boxShadow: theme("boxShadow.none"),
            borderColor: theme("colors.orange.500")
          }
        }
      }
    }),
    extend: {}
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")]
};
