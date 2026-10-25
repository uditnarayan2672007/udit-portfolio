/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#0a0d14',
          card: '#0f172a',
          cardBorder: '#1e293b',
          accent: '#06b6d4',      // cyan-500
          accentGlow: '#0891b2',
          neonGreen: '#10b981',   // emerald-500
          neonPurple: '#8b5cf6',  // violet-500
          danger: '#f43f5e',      // rose-500
          warning: '#f59e0b',     // amber-500
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
        display: ['Space Grotesk', 'Inter', 'sans-serif']
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scan': 'scan 8s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.4))' },
          '100%': { filter: 'drop-shadow(0 0 20px rgba(6, 182, 212, 0.8))' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      }
    },
  },
  plugins: [],
}
