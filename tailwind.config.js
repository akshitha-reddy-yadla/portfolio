/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        organic: "#6A6F4C",
        butter: "#CBB89D",
        coconut: "#EDE1D2",
        natural: "#806044",
        palm: '#5D2510',
        cocoa: "#412F26",
        primary: "#6A6F4C",
        secondary: "#CBB89D",
        tertiary: "#EDE1D2",
        quanternary: "#806044",
        fifth: "#5D2510",
        sixth: "#412F26",
      },
      fontSize: {
        "heading": ['4rem', {
          lineHeight: '2.25rem',
          letterSpacing: '-0.02em',
          fontWeight: '700',
        }],
      }
    },
  },
  plugins: [],
}
