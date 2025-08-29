/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#EEEEEE',
          dark: '#23272a', // dark grey for dark mode background
        },
        primary: {
          DEFAULT: '#8E1616',
          dark: '#B22234', // maroon/red accent for dark mode
        },
        secondary: {
          DEFAULT: '#D84040',
          dark: '#D84040', // keep a red accent for dark mode
        },
        dark: {
          DEFAULT: '#1D1616',
          dark: '#FFFFFF', // white text for dark mode
        },
        accent: {
          DEFAULT: '#D84040',
          dark: '#B22234',
        },
      },
      borderRadius: {
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 12px 0 rgba(29, 22, 22, 0.08)',
        'elegant': '0 4px 32px 0 rgba(29, 22, 22, 0.12)',
      },
      fontFamily: {
        display: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.7s cubic-bezier(0.4,0,0.2,1)',
        'slide-up': 'slideUp 0.7s cubic-bezier(0.4,0,0.2,1)',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(24px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
}
