/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'green': '#D4FF5C',
      'purple': '#8B3CFF',
      'gray': '#868B8E',
      'black': '#181818',
      'orange': '#F28752',
    },
    extend: {
      fontFamily: {
       chipen: ['var(--font-chipen)'],
       blackpast: ['var(--font-blackpast)'],
       simplifica: ['var(--font-simplifica)'],

      },
    },
  },
  plugins: [],
}
