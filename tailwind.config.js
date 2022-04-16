module.exports = {
  content: [
    "./pages/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,tsx,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'home': '#1d1d1b',
        'btn-gradient1': '#252734',
        'btn-gradient2': '#ef4a99',
        'rarity': '#131313',
        'main': '#000000'
      },
      fontFamily: {
        nunito: 'Nunito',
        chunky: 'Chunky'
      },
      backgroundImage: {
        'hero-pattern': "url('/asset/img/bg-hero.jpg')",
        'hero-mobile': "url('/asset/img/m_logo.jpg')",
        'roadmap-bg': "url('/asset/img/roadmap-bg-hero.jpg')",
        'rarity-hero': "url('/asset/img/rarity-hero.webp')"
      }
    },
  },
  plugins: [],
}
