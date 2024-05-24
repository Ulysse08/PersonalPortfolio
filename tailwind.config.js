/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}"
  ],
  presets: [require("@relume_io/relume-tailwind")],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'text': '#050315',
        'background': '#FBFBFE',
        'main': '#2F27CE',
        'secondary': '#DEDCFF',
        'accent': '#433BFF',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        text: ['Montserrat', 'sans-serif'],
        Logo: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'sm': 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;',
        'lg': 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;',
        'text': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'accent': '0 10px 15px rgba(67, 59, 255, 0.3)',
        'custom': '0 4px 2px -1px',   
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
