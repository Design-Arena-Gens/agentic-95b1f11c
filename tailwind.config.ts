import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: '#000000',
        secondary: '#666666',
        tertiary: '#999999',
        border: '#E5E5E5',
        background: '#FFFFFF',
        surface: '#F8F8F8',
      },
    },
  },
  plugins: [],
}
export default config
