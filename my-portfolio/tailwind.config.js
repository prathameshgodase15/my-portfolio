// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "Inter", "sans-serif"],
      },
      colors: {
        violet: {
          600: "#7c3aed",
          500: "#8b5cf6",
          400: "#a78bfa",
        },
        cyan: {
          500: "#06b6d4",
          400: "#67e8f9",
        },
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        "spin-reverse": "spin 12s linear infinite reverse",
        float: "float 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 2s ease-in-out infinite",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};


