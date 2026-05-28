/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-primary':   '#09090E',
        'bg-secondary': '#0D0D14',
        'bg-card':      '#101018',
        'tp':           '#EFECE6',
        'ts':           '#7A7986',
        'tt':           '#3C3C4A',
        'gold':         '#C8A566',
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        mono:    ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
