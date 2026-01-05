/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        app: {
          bg: '#0f0f0f',
          surface: '#171717',
          border: '#1f1f1f',
          'border-light': '#262626',
          text: '#d4d4d4',
          muted: '#737373',
          active: '#3b82f6',
          'active-hover': '#2563eb',
          success: '#22c55e',
          'success-bg': 'rgba(34, 197, 94, 0.08)',
          danger: '#ef4444',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['SF Mono', 'monospace'],
      }
    }
  },
  plugins: [],
}
