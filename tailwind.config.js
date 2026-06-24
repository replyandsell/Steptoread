/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#E8746F',
        accentAlt: '#B4D4F1',
        success: '#C8E6A0',
        light: '#F9F8F6',
        dark: '#1A1A1A',
      },
    },
  },
  plugins: [],
}
