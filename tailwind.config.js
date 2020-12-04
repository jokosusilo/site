const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'sans': ['Lato', defaultTheme.fontFamily.sans]
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: "#2d3748",
            a: {
              textDecoration: "none",
              borderBottomWidth: "1px",
              borderColor: defaultTheme.colors.gray[800],
            },
            "figure figcaption": {
              textAlign: "center",
            },
          },
        },
      },
    }
  },
  variants: {
    borderColor: ["responsive", "hover", "focus", "group-hover"],
  },
  plugins: [require("@tailwindcss/typography")],
}
