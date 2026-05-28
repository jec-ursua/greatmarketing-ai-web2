import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './content/**/*.{md,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#C5A24A',
          'gold-light': '#E5C97A',
          'gold-dark': '#9B7F30',
          cream: '#F5F0E6',
          dark: '#1A1A1A',
        },
      },
      fontFamily: {
        display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'slide-left': 'slideLeft 0.3s ease-out',
        'slide-right': 'slideRight 0.3s ease-out',
      },
      keyframes: {
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { transform: 'translateY(20px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
        slideLeft: { '0%': { transform: 'translateX(24px)', opacity: '0' }, '100%': { transform: 'translateX(0)', opacity: '1' } },
        slideRight: { '0%': { transform: 'translateX(-24px)', opacity: '0' }, '100%': { transform: 'translateX(0)', opacity: '1' } },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#374151',
            a: { color: '#C5A24A', textDecoration: 'underline', '&:hover': { color: '#9B7F30' } },
            h2: { fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: '700', color: '#1A1A1A', marginTop: '2.5rem', marginBottom: '1rem' },
            h3: { fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: '700', color: '#1A1A1A' },
            strong: { color: '#1A1A1A', fontWeight: '700' },
            blockquote: { borderLeftColor: '#C5A24A', backgroundColor: '#F5F0E6', padding: '1rem 1.5rem', borderRadius: '0.5rem', fontStyle: 'normal' },
            img: { borderRadius: '0.75rem' },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
