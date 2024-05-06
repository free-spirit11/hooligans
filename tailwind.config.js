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
        'button-blue': '#2864A2',
        'button-blue-hover': '#1E4C7A',
      },
      backgroundImage: {
        'gradient-opacity':
          'linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(255, 255, 255, 0.2))',
        'gradient-opacity-hover':
          'linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(255, 255, 255, 0.2))',
      },
    },
  },
  plugins: [],
};
