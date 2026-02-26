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
        ink: '#1a1a2e',
        'sketch-gray': '#6b7280',
        'light-rule': '#e5e7eb',
        'mood-coral': '#F5764A',
        'mood-marigold': '#D94420',
        'mood-blush': '#fdf4f0',
        'mood-plum': '#2d1b2e',
        'mood-warm-white': '#fdfaf7',
        'mood-lavender': '#e8e0f0',
      },
    },
  },
  plugins: [],
};
