/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        offset: {
          '0%' :{   transform: 'translateX(0rem)'},
          '100%': { transform: 'translateX(2rem)' },
        }
      },
      animation: {
        offset: "wiggle 1s ease-in-out infinite",
      },
    },
    fontFamily: {
      "tan-headline": ["Tan-Headline"],
    },
    colors: {
      background: "#121212",
      text: "#121212",
      highlight: "#121212",
      "element-1": "#4041d1",
      "element-2": "#00ff85",
    },
  },
  plugins: [],
};
