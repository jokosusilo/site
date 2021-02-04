const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["DM Sans", defaultTheme.fontFamily.sans],
    },
    extend: {
      typography: theme => ({
        DEFAULT: {
          css: {
            color: "#2d3748",
            a: {
              // color: theme("colors.indigo.500"),
              textDecoration: "none",
              borderBottomWidth: "1px",
              borderColor: theme("colors.gray.400"),
              "&:hover": {
                fontWeight: "medium",
                // color: theme("colors.indigo.700"),
                borderColor: theme("colors.gray.800"),
              },
            },
            "figure figcaption": {
              textAlign: "center",
            },
            // code: {
            //   color: theme("colors.purple.600"),
            //   fontWeight: 400,
            // },
          },
        },
      }),
    },
  },
  variants: {
    borderColor: ["responsive", "hover", "focus", "group-hover"],
  },
  plugins: [require("@tailwindcss/typography")],
}
