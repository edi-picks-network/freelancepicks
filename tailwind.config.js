/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        leaf: {
          DEFAULT: '#2D8A4E',
          light: '#4CAF50',
          lighter: '#81C784',
          subtle: '#E8F5E9',
          dark: '#1B5E20',
        },
        warm: {
          bg: '#F5F9F0',
          card: '#FCFDF9',
          cream: '#FFFDF5',
          sand: '#F0EDE4',
        },
        earth: {
          DEFAULT: '#8D6E63',
          gold: '#D4A843',
        },
        text: {
          primary: '#1A2E1D',
          secondary: '#4A6B4F',
          muted: '#7A9A7F',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.25rem',
      },
    },
  },
  plugins: [],
};
