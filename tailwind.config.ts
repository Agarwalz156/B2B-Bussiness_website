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
    },
  },
  plugins: [],
};

export default config;
