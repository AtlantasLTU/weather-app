"use client";
function autoWH() {
const [width, setWidth] = useState(0);
const [height, setHeight] = useState(0);

useEffect(() => {
  // Set dimensions once the component mounts on the client side
  setWidth(window.innerWidth);
  setHeight(window.innerHeight);

  // Update dimensions on window resize
  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  // Attach the event listener
  window.addEventListener('resize', handleResize);

  // Clean up the event listener when the component is unmounted
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

  return width, height;
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      height: {
        'autoHeight': autoWH.height,
        'autoWidth': autoWH.width,
      }
    },
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