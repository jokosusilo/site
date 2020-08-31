const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    mode: "all",
    content: [
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.ts",
      "./src/**/*.tsx",
    ],
  },
  theme: {
    typography: {
      default: {
        css: {
          // color: "#2d3748",
          a: {
            textDecoration: "none",
            borderBottomWidth: "1px",
            borderColor: defaultTheme.colors.gray[800]
          },
          "figure figcaption": {
            textAlign: "center",
          },
        },
      },
    },
  },
  variants: {
    borderColor: ["responsive", "hover", "focus", "group-hover"],
  },
  plugins: [require("@tailwindcss/typography")],
}
