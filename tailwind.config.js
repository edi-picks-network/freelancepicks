/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        deep: {
          DEFAULT: '#0A0A1A',
          100: '#111128',
          200: '#1A1A3E',
          300: '#2D2D6B',
          400: '#8B5CF6',
          500: '#A78BFA',
        },
        muted: {
          DEFAULT: '#6B7280',
          light: '#C4B5FD',
        },
        surface: '#F0F0FF',
      },
      fontFamily: {
        nunito: ['Nunito', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
