import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        maroon: '#8B1A1A',
        gold: '#C9A84C',
        'off-white': '#E8E6E1',
        'soft-gray': '#A8A5A0',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)'],
        'dm-sans': ['var(--font-dm-sans)'],
      },
      animation: {
        'gradient-mesh': 'gradient-mesh 15s ease infinite',
      },
      keyframes: {
        'gradient-mesh': {
          '0%': { backgroundPosition: '0% 0%' },
          '50%': { backgroundPosition: '100% 100%' },
          '100%': { backgroundPosition: '0% 0%' },
        },
      },
    },
  },
  plugins: [],
}
export default config
