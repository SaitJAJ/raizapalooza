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
        'radial-shadow':'radial-gradient(ellipse, rgba(18,18,18,0.8) 0%, rgba(255,255,255,0) 100%)',
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'background-one':"url('/backgrounds/Background1.png')",
        'background-two':"url('/backgrounds/Background2.png')",
        'background-three':"url('/backgrounds/Background3.png')",
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
          "0%": { transform: "translateX(0rem)" },
          "100%": { transform: "translateX(2rem)" },
        },
      },
      animation: {
        offset: "wiggle 1s ease-in-out infinite",
      },
    },
    fontFamily: {
      //here is where im making the tailwind attribute
      "tan-headline": ["var(--font-tan-headline)"],
      "josefin-sans": ["var(--font-josefin-sans)"],
      antonio: ["var(--font-antonio)"],
    },
    colors: {
      background: "#121212",
      text: "#121212",
      highlight: "#fffdcf",
      "element-1": "#4041d1",
      "element-2": "#00ff85",
    },
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    },
  },
  plugins: [],
};
