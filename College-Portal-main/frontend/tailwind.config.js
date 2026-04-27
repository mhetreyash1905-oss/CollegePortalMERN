/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F4F5F0',  // Cream
          100: '#E2E6E9',
          200: '#C5CDD3',
          300: '#A8B4BE',
          400: '#8A9CA8',
          500: '#6D8393',
          600: '#4A708B', // Steel Blue
          700: '#3D5A70',
          800: '#2A3C4D',
          900: '#1A293B', // Dark Navy
        },
        secondary: {
          50: '#F0F7FA',
          100: '#DCE9F0',
          200: '#B9D3E1',
          300: '#96BDD2',
          400: '#7BADC7', // Light Steel Blue
          500: '#5F97B5',
          600: '#4A808F', // Teal
          700: '#3D6A77',
          800: '#30545F',
          900: '#233E47',
        },
        accent: {
          50: '#FAF7FB',
          100: '#F2EAF4',
          200: '#EBDDF0',
          300: '#E4CFEB',
          400: '#DDC2E7',
          500: '#D8B4E2', // Lavender
          600: '#BD9DC6',
          700: '#A387AB',
          800: '#88718E',
          900: '#6E5C73',
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#2d3748',
          300: '#252d3d',
          400: '#1f2937',
          500: '#1a1f2e',
          600: '#161b28',
          700: '#131722',
          800: '#0f1419',
          900: '#0a0d12',
          950: '#000000',
        },
        success: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
          900: '#14532D',
        },
        warning: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        info: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 15s ease infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'shimmer': 'shimmer 2s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        glow: {
          'from': { boxShadow: '0 0 10px #667eea, 0 0 20px #667eea, 0 0 30px #667eea' },
          'to': { boxShadow: '0 0 20px #764ba2, 0 0 30px #764ba2, 0 0 40px #764ba2' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
