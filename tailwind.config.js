/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors: {
        // Custom dark theme colors
        primary: {
          50: '#eef2ff',
          500: '#6366f1', // indigo-500 accent
          600: '#4f46e5',
          700: '#4338ca',
        },
        dark: {
          bg: '#0f172a',      // slate-900
          card: '#1e293b',    // slate-800
          text: '#f1f5f9',    // slate-100
          muted: '#64748b',   // slate-500
        }
      },
      fontFamily: {
        'code': ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}