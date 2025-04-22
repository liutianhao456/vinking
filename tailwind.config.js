/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'float-up': 'floatUp 0.8s ease-out forwards',
        'particle-form': 'particleForm 1.2s ease-out forwards',
      },
      transitionDuration: {
        '300': '300ms',
        '500': '500ms',
      },
      scale: {
        '95': '0.95',
        '105': '1.05',
      },
    },
  },
  plugins: [],
} 