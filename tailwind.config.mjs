import { fontFamily } from 'tailwindcss/defaultTheme';
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['DM Sans', 'system-ui', ...fontFamily.sans],
        sans: ['DM Sans', 'system-ui', ...fontFamily.sans],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        handwriting: ['Caveat', 'cursive'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        // New dusty rose palette
        cream: '#FAF8F5',
        rose: '#B87070',
        'rose-soft': '#E8CFC8',
        'rose-deep': '#9A5A5A',
        ink: '#2A2320',
        muted: '#7A6560',
        'card-bg': '#E8CFC8',
        // Keep legacy names for compat
        'mood-coral': '#B87070',
        'mood-warm-white': '#FAF8F5',
        'mood-blush': '#F0E3DE',
        'sketch-gray': '#7A6560',
        'light-rule': '#D9C5BE',
      },
    },
  },
  plugins: [],
};
