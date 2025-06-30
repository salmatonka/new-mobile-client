/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
          
        // primary: '#111827',  
        // primary: '#1D4C9E',  
        // primary: '#1b1b11',  
        primary: '#FFFFFF',  
        secondary: '#1D4C9E',
        // info: '#ED912D',
        orange : '#ed9c2a',
        info: '#36B3E3',
      },
    },
  },
  plugins: [require('daisyui'),],
}

