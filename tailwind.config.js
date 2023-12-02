/** @type {import('tailwindcss').Config} */

export const darkMode = ['class'];
export const content = [
  './pages/**/*.{ts,tsx}',
  './components/**/*.{ts,tsx}',
  './app/**/*.{ts,tsx}',
  './src/**/*.{ts,tsx}',
];
export const theme = {
  container: {
    center: true,
    padding: '2rem',
    screens: {
      '2xl': '1400px',
    },
  },
  extend: {
    colors: {
      'primary-500': '#FF8C00',   // Dark Orange
      'primary-600': '#FFA500',   // Orange
      'secondary-500': '#FFD700', // Gold
      'off-white': '#FFE4B5',     // Moccasin
      'red': '#FF4500',           // Orange Red
      'dark-1': '#000000',        // Black
      'dark-2': '#09090A',        // Charcoal
      'dark-3': '#101012',        // Dark Charcoal
      'dark-4': '#1F1F22',        // Very Dark Charcoal
      'light-1': '#FFFFFF',       // White
      'light-2': '#f7f3f2',       // Near White
      'light-3': '#7878A3',       // Light Slate Gray
      'light-4': '#5C5C7B',       // Slate Gray
      'alphaDark' : 'rgba(0, 0, 0, 0.9)',
      'alphaDark2' : 'rgba(255,255,255, 0.1)' ,
      'fg': '#3c5b7a',
      'accent':'#cfedff'
    },
    
    
    screens: {
      'xs': '480px',
    },
    width: {
      '420': '420px',
      '465': '465px',
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    keyframes: {
      'accordion-down': {
        from: { height: 0 },
        to: { height: 'var(--radix-accordion-content-height)' },
      },
      'accordion-up': {
        from: { height: 'var(--radix-accordion-content-height)' },
        to: { height: 0 },
      },
    },
    animation: {
      'accordion-down': 'accordion-down 0.2s ease-out',
      'accordion-up': 'accordion-up 0.2s ease-out',
    },
  },
};
export const plugins = [require('tailwindcss-animate')];
