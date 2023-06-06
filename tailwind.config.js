/** @type {import('tailwindcss').Config} */
const {plugins} = require("./postcss.config");
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        0.5: "0.12rem"
      },
      borderRadius: {
        inherit: "inherit"
      },
      height: {
        inherit: "inherit"
      },
      width: {
        inherit: "inherit"
      },
      colors: {
        primary_text: "#dfe7eb",
        primary_bg: "#1f2937",
        button_primary: "#f8f8f8",
        primary: "#C4C4C4"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        }
      },
      animation: {
        fade: "fadeIn .3s ease-in-out"
      },
    },
  },
  plugins: [
      plugin(({addComponents, theme, addUtilities}) => {
        addComponents({
          ".btn-primary": {
            backgroundColor: theme("colors.orange.500"),
            color: "gold",
            padding: "10px 0",
            display: "block",
            width: "100%",
            fontSize: 18,
            fontWeight: "bold"
          }
        })
        addUtilities({
          ".text-shadow" :{
            textShadowColor: "1px, 1px, rgba(255,255,255)"
          },
          ".icon-button" : {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
          }
        })
      })
  ]
}
