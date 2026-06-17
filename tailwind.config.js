/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  safelist: [
    'md:grid-cols-2', 'md:grid-cols-3', 'md:grid-cols-4',
    // OI theme — dynamic via theme.js (template literals need safelist)
    'bg-oi-navy', 'bg-oi-dark', 'bg-oi-primary', 'bg-oi-pale', 'bg-oi-100',
    'text-oi-primary', 'text-oi-light', 'text-oi-100',
    'border-oi-100', 'border-oi-primary',
    'hover:bg-oi-mid', 'hover:bg-oi-primary',
    'bg-white', 'text-white',
    // iOS-style icon backgrounds — OI brand only
    'bg-oi-bright', 'bg-oi-mid', 'bg-oi-light',
    // Feature story count badge
    'bg-gray-100',
  ],
  theme: {
    extend: {
      colors: {
        // Onsite Insight brand
        'oi-navy':    '#01343F',
        'oi-dark':    '#024758',
        'oi-primary': '#035A71',
        'oi-mid':     '#046D89',
        'oi-bright':  '#0584A4',
        'oi-light':   '#33B7CF',
        'oi-100':     '#CCEDF3',
        'oi-pale':    '#EDFAFC',
        // Amalgama (footer only)
        'am-navy':       '#01164d',
        'am-blue':       '#4f80ff',
        'am-blue-mid':   '#3366ff',
        'am-blue-light': '#95b3ff',
        'am-blue-pale':  '#edf2ff',
        'am-grey':       '#ECEFF4',
        'am-grey-light': '#F6F7FA',
      },
      fontFamily: {
        body:    ['Inter', 'sans-serif'],
        display: ['Commissioner', 'sans-serif'],
        label:   ['Commissioner', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
