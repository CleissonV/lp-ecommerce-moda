export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        fashion: {
          bg: '#faf9f7', dark: '#111111', taupe: '#9a8c6e', cream: '#f5f0e8',
          rose: '#d4a0a0', border: '#e8e2d8', muted: '#8a8274'
        }
      },
      fontFamily: {
        serif: ['"Bodoni Moda"', 'serif'],
        sans: ['"Josefin Sans"', 'sans-serif']
      }
    }
  },
  plugins: []
}
