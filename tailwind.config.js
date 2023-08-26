/** @type {import('tailwindcss').Config} */
// import colors from tailwind

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // add blink animation 
  // https://tailwindcss.com/docs/animation
  
  theme: {
    extend: {
      animation: {
        blink: "blink 0.5s linear infinite",
      },
      keyframes: {
        blink: {
          "50%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}

