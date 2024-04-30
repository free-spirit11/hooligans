/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      gridTemplateColumns: {
        '40/60': '40% 60%',
      },
      gridTemplateRows: {
        '60/30': '60% 30%',
        '45/45': '45% 45%',
        '30/60': '30% 60%',
        '40/60': '40% 60%',
      },
      height: {
        '850px': '53rem',
      },
      width: {
        '450px': '28rem',
      },
      colors: {
        'custom-blue': '#10069f',
        'custom-orange': '#ffaa4d',
        'custom-gray': '#f3f1f3',
        'custom-gray-2': '#e5e1e67a',
      },
    },
  },
  plugins: [],
};
