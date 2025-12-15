/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f172a', // Slate 900 (Dark Navy/Charcoal)
          light: '#1e293b',   // Slate 800
          dark: '#020617',    // Slate 950
        },
        accent: {
          gold: '#fbbf24',    // Amber 400
          blue: '#3b82f6',    // Blue 500
          red: '#ef4444',     // Red 500
        },
        text: {
          DEFAULT: '#f8fafc', // Slate 50
          muted: '#94a3b8',   // Slate 400
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero-bg.jpg')", // Placeholder
      }
    },
  },
  plugins: [],
}
