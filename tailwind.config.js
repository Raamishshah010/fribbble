/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'pacifico': ['Pacifico', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        'mona': ['Mona-Sans', 'sans-serif'],
        'poppins': ['Poppins', 'sans'],
        'shadows': ['Shadows Into Light', 'sans'],
        'markers': ['Permanent Marker', 'sans'],
        'cardo': ['Cardo', 'sans'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
