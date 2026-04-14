import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'ag-black':    '#0A0A0A',
        'ag-white':    '#FFFFFF',
        'ag-gray-100': '#F5F5F5',
        'ag-gray-200': '#E5E5E5',
        'ag-gray-300': '#CCCCCC',
        'ag-gray-500': '#888888',
        'ag-gray-700': '#444444',
        'ag-gray-800': '#222222',
        'ag-gray-900': '#111111',
      },
      fontFamily: {
        display: ['var(--font-big-shoulders)', 'sans-serif'],
        sans:    ['var(--font-manrope)', 'sans-serif'],
        mono:    ['var(--font-dm-mono)', 'monospace'],
      },
      transitionTimingFunction: {
        'ag':      'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'ag-flip': 'cubic-bezier(0.76, 0, 0.24, 1)',
      },
      animation: {
        'marquee': 'marquee 28s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
export default config
