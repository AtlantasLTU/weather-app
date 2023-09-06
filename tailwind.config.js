/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'text': '#0d1b2aff',
      'background': '#1b263bff',
      'primary': '#415a77ff',
      'secondary': '#778da9ff',
      'accent': '#e0e1ddff',
    }
  },
  plugins: [],
}