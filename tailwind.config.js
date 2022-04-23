const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['DM Sans', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      borderRadius: {
        '5xl': '60px',
      },
    },
  },
  plugins: [],
}
