/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pearl: {
          50: '#FFFFFF',
          100: '#F8FAFC',
          200: '#F1F5F9',
          300: '#E2E8F0',
          400: '#CBD5E1',
        },
        navy: {
          950: '#070E24',
          900: '#0A132C',
          800: '#0F1C42',
          700: '#16295C',
          600: '#1E3A8A',
        },
        gold: {
          300: '#FDE68A',
          400: '#FCD34D',
          500: '#F59E0B',
          600: '#D97706',
          accent: '#C59B27',
          luxury: '#B38728',
          warm: '#E6CA65',
        },
        fresh: {
          sky: '#0284C7',
          mint: '#059669',
          indigo: '#4F46E5',
          violet: '#7C3AED',
          rose: '#E11D48',
          amber: '#D97706',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'Plus Jakarta Sans', 'Outfit', 'system-ui', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
        serif: ['Cinzel', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'aurora-soft': 'aurora-soft 16s ease infinite alternate',
        'aurora-soft-rev': 'aurora-soft-rev 20s ease infinite alternate',
        'float-gentle': 'float-gentle 6s ease-in-out infinite',
        'float-delayed': 'float-gentle 7s ease-in-out 3s infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        'aurora-soft': {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(50px, -40px) scale(1.15)' },
          '100%': { transform: 'translate(-30px, 30px) scale(0.95)' },
        },
        'aurora-soft-rev': {
          '0%': { transform: 'translate(0px, 0px) scale(1.1)' },
          '50%': { transform: 'translate(-50px, 40px) scale(0.9)' },
          '100%': { transform: 'translate(40px, -30px) scale(1.05)' },
        },
        'float-gentle': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      }
    },
  },
  plugins: [],
};