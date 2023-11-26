/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      minWidth: {
        '1/2': '50%',
        '1/5': '20%',
        '4/5': '80%',
      },
      maxWidth: {
        '1/2': '50%',
        '1/5': '20%',
        '4/5': '80%',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
