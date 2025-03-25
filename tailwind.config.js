/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Core background colors
        'deep-space': '#030014',
        'space-blue': '#070324',
        'space-dark': '#0a0a18',
        
        // Primary accent colors
        'neon-cyan': '#00F5FF',
        'neon-purple': '#7000FF',
        'neon-pink': '#FF007A',
        'neon-blue': '#3E00FF',
        
        // Secondary colors
        'cyber-yellow': '#FFB800',
        'cyber-green': '#00FFB2',
        
        // UI colors
        'glass-gray': 'rgba(255, 255, 255, 0.04)',
        'glass-stroke': 'rgba(255, 255, 255, 0.1)',
        'text-primary': '#FFFFFF',
        'text-secondary': 'rgba(255, 255, 255, 0.7)',
        'text-disabled': 'rgba(255, 255, 255, 0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'orbit': 'orbit 20s linear infinite',
        'float': 'float 4s ease-in-out infinite alternate',
        'cosmic-shift': 'cosmicShift 20s ease infinite',
        'text-shimmer': 'textShimmer 6s infinite',
      },
      keyframes: {
        glow: {
          '0%': { filter: 'brightness(1)' },
          '100%': { filter: 'brightness(1.3)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(150px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(150px) rotate(-360deg)' },
        },
        float: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-15px)' },
        },
        cosmicShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        textShimmer: {
          '0%': { backgroundPosition: '-200%' },
          '100%': { backgroundPosition: '200%' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'space-gradient': 'linear-gradient(to bottom, #030014, #070324)',
        'noise-pattern': "url('/noise.svg')",
        'grid-lines': "url('/grid.svg')",
        'dotted-grid': "url('/dots.svg')",
        'cosmic-glow': 'radial-gradient(circle at center, rgba(0, 245, 255, 0.15) 0%, rgba(62, 0, 255, 0.05) 40%, transparent 70%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(0, 0, 0, 0) 100%)',
        'text-gradient': 'linear-gradient(90deg, #00F5FF, #7000FF, #FF007A, #3E00FF)',
      }
    },
  },
  plugins: [],
} 