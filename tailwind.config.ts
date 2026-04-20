import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B1F3A',
        accent: '#D62828',
        surface: '#F5F7FA',
        neutral: '#5A6B7B',
        border: '#E5E7EB',
        text: '#0B1F3A',
      },
      boxShadow: {
        card: '0 8px 24px rgba(11, 31, 58, 0.08)',
      },
      borderRadius: {
        xl: '0.75rem',
        lg: '0.5rem',
      },
      animation: {
        shimmer: 'shimmer 2s infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        rainbow: 'rainbow 3s linear infinite',
        'border-beam': 'border-beam 8s infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'slide-in': 'slide-in 0.5s ease-out',
        'fade-in': 'fade-in 0.5s ease-in',
        'bounce-slow': 'bounce 3s infinite',
        'float': 'float 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'hex-rotate': 'hex-rotate 20s linear infinite',
        'circular-progress': 'circular-progress 3s ease-in-out infinite',
        'text-shine': 'text-shine 3s infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        rainbow: {
          '0%': { filter: 'hue-rotate(0deg)' },
          '100%': { filter: 'hue-rotate(360deg)' },
        },
        'border-beam': {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(214, 40, 40, 0.2), 0 0 10px rgba(214, 40, 40, 0.1)' },
          '50%': { boxShadow: '0 0 20px rgba(214, 40, 40, 0.5), 0 0 30px rgba(214, 40, 40, 0.3)' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'hex-rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'circular-progress': {
          '0%': { strokeDashoffset: '314' },
          '100%': { strokeDashoffset: '0' },
        },
        'text-shine': {
          '0%': { backgroundPosition: '-1000px center' },
          '100%': { backgroundPosition: '1000px center' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
