/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        indigo: { DEFAULT: '#4F46E5', dark: '#3730C0', light: '#818CF8' },
        navy: '#0F0E2A',
        glacier: '#F0F0FF',
        lavender: '#E5E7FF'
      },
      fontFamily: {
        grotesk: ['Space Grotesk', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
      boxShadow: {
        card: '0 4px 24px rgba(79, 70, 229, 0.08)',
        hover: '0 8px 40px rgba(79, 70, 229, 0.18)'
      }
    },
  },
  plugins: [],
}
