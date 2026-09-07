/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.js',
    './pages/**/*.ts',
    './pages/**/*.jsx',
    './pages/**/*.tsx',
    './components/**/*.js',
    './components/**/*.ts',
    './components/**/*.jsx',
    './components/**/*.tsx',
    './app/**/*.js',
    './app/**/*.ts',
    './app/**/*.jsx',
    './app/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: {
            DEFAULT: '#060D19',
            deep: '#030810',
            light: '#0B172B',
            card: '#0E1E38',
            border: 'rgba(255, 255, 255, 0.08)',
          },
          gold: {
            DEFAULT: '#C5A880',
            light: '#E5D3B3',
            dark: '#9E8055',
            glow: 'rgba(197, 168, 128, 0.25)',
          },
          cyan: {
            DEFAULT: '#38BDF8',
            glow: 'rgba(56, 189, 248, 0.2)',
          },
          offwhite: '#F8FAFC',
          muted: '#94A3B8',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
        'gold-shimmer': 'linear-gradient(135deg, #C5A880 0%, #F5E9D6 50%, #C5A880 100%)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};
