/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: '#6e4627', // Example brown color hex
      },
      padding: {
        '1/2': '50%',
        full: '100%',
      },
      fontFamily: {
        custom: ['Gabarito', 'sans-serif']
      },
      fontWeight: {
        regular: 400,   // Regular weight
        medium: 500,    // Medium weight
        semibold: 600,  // SemiBold weight
        bold: 700,      // Bold weight
        extrabold: 800, // ExtraBold weight
        black: 900,     // Black weight
      },
      fontSize: {
        "heading": ['4rem', {
          lineHeight: '2.25rem',
          letterSpacing: '-0.02em',
          fontWeight: '700',
        }],
      },
    },
  },
  plugins: [],
}
