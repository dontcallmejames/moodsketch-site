import { fontFamily } from 'tailwindcss/defaultTheme';
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['DM Sans', ...fontFamily.sans],
        sans: ['Inter', ...fontFamily.sans],
        mood: ['Syne', ...fontFamily.sans],
      },
      colors: {
        ink: '#1C1C2E',
        chalk: '#F7F7F5',
        'sketch-gray': '#6b7280',
        'light-rule': '#e5e7eb',
        'deep-ink': '#0F0F1A',
        'mood-coral': '#F5764A',
        'mood-marigold': '#D94420',
        'mood-blush': '#FFE4E1',
        'mood-plum': '#2D1B69',
        'mood-warm-white': '#FFF8F0',
        'mood-lavender': '#C3B1E1',
        'mood-soft-blush': '#FFE4E1',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
