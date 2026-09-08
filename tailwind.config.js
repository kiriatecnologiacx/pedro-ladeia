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
            DEFAULT: '#0B1B33',
            deep: '#06101E',
            surface: '#0E223D',
            card: '#122A4A',
            border: 'rgba(255, 255, 255, 0.08)',
          },
          black: {
            DEFAULT: '#0A0A0A',
            deep: '#050505',
            surface: '#121212',
          },
          beige: {
            DEFAULT: '#D8CBB7',
            light: '#F7F4EE',
            sand: '#EDE8DF',
            muted: '#C4B59D',
            dark: '#8C7A60',
            card: '#EFECE4',
          },
          charcoal: {
            DEFAULT: '#222220',
            light: '#333330',
            dark: '#161615',
          },
          offwhite: '#FDFBF7',
          muted: '#8E8B82',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
};
