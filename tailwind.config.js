module.exports = {
  mode: 'jit',
  purge: ['./App.jsx', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screen: {
      sm: '480px',
      md: '768px',
      lg: '986px',
      lg: '1440px',
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        backgroundBlue: '#DBEAFE',
        buttonBlue: '#1F40AF',
        greenSpan: '#D1FAE4',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
