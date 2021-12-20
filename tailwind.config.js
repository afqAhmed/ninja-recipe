module.exports = {
  content: ['./index.html', './src/**/*.{jsx, js}'],
  darkMode: 'class',
  theme: {
    extend: {
      gridTemplateColumns: {
        'fit': 'repeat(auto-fit, minmax(450px, 1fr))'
      }
    },
  },
  plugins: [],
}
