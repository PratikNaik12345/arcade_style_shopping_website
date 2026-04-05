/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-pink': '#ff2d95',
        'neon-purple': '#b44dff',
        'neon-blue': '#4dc9ff',
        'neon-cyan': '#00f0ff',
        'arcade-gold': '#ffd700',
        'arcade-gold-dark': '#c9a800',
        'deep': '#0a0418',
        'mid': '#1a0e32',
        'panel': '#2a1845',
        'metal-hi': '#c0b8d0',
        'metal-mid': '#706088',
      },
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'monospace'],
        'orbit': ['Orbitron', 'sans-serif'],
        'body': ['Nunito', 'sans-serif'],
      },
      animation: {
        'neon-flicker': 'neonFlicker 5s infinite',
        'neon-pulse': 'neonPulse 3s ease-in-out infinite',
        'twinkle': 'twinkle var(--tw-dur, 3s) ease-in-out infinite var(--tw-del, 0s)',
        'moon-glow': 'moonGlow 5s ease-in-out infinite',
        'grab-glow': 'grabGlow 2s ease-in-out infinite',
        'bounce-in': 'bounceIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'drop-in': 'dropIn 0.4s ease-out',
        'swing': 'swing 4s ease-in-out infinite',
      },
      keyframes: {
        neonFlicker: {
          '0%, 94%, 96%, 98%, 100%': { opacity: '1' },
          '93%': { opacity: '0.82' },
          '95%': { opacity: '0.9' },
          '97%': { opacity: '0.88' },
        },
        neonPulse: {
          '0%, 100%': { boxShadow: '0 0 12px #ff2d95, 0 0 30px rgba(255,45,149,0.25), inset 0 0 12px rgba(255,45,149,0.08)' },
          '50%': { boxShadow: '0 0 18px #ff2d95, 0 0 45px rgba(255,45,149,0.35), inset 0 0 18px rgba(255,45,149,0.12)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '1' },
        },
        moonGlow: {
          '0%, 100%': { filter: 'brightness(1) drop-shadow(0 0 15px rgba(255,215,0,0.4))' },
          '50%': { filter: 'brightness(1.15) drop-shadow(0 0 25px rgba(255,215,0,0.6))' },
        },
        grabGlow: {
          '0%, 100%': { boxShadow: '0 7px 0 #880025, 0 9px 22px rgba(0,0,0,0.4), 0 0 35px rgba(255,45,100,0.25), inset 0 -5px 10px rgba(0,0,0,0.3), inset 0 5px 10px rgba(255,255,255,0.15)' },
          '50%': { boxShadow: '0 7px 0 #880025, 0 9px 22px rgba(0,0,0,0.4), 0 0 50px rgba(255,45,100,0.4), inset 0 -5px 10px rgba(0,0,0,0.3), inset 0 5px 10px rgba(255,255,255,0.15)' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0) translateY(-20px)', opacity: '0' },
          '60%': { transform: 'scale(1.3) translateY(2px)', opacity: '1' },
          '100%': { transform: 'scale(1) translateY(0)', opacity: '0.75' },
        },
        dropIn: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '0.75' },
        },
        swing: {
          '0%, 100%': { transform: 'rotate(-1.2deg)' },
          '50%': { transform: 'rotate(1.2deg)' },
        },
      },
    },
  },
  plugins: [],
}
