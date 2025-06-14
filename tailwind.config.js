/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/styles/globals.css", // Make sure your global CSS is included
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))", // Custom border color using CSS variable
        input: "hsl(var(--input))", // Custom input color
        ring: "hsl(var(--ring))", // Custom ring color
        background: "hsl(var(--background))", // Custom background color
        foreground: "hsl(var(--foreground))", // Custom foreground color
        primary: {
          DEFAULT: "hsl(var(--primary))", // Custom primary color
          foreground: "hsl(var(--primary-foreground))", // Custom primary foreground color
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))", // Custom secondary color
          foreground: "hsl(var(--secondary-foreground))", // Custom secondary foreground color
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))", // Custom destructive color
          foreground: "hsl(var(--destructive-foreground))", // Custom destructive foreground color
        },
        muted: {
          DEFAULT: "hsl(var(--muted))", // Custom muted color
          foreground: "hsl(var(--muted-foreground))", // Custom muted foreground color
        },
        accent: {
          DEFAULT: "hsl(var(--accent))", // Custom accent color
          foreground: "hsl(var(--accent-foreground))", // Custom accent foreground color
        },
        popover: {
          DEFAULT: "hsl(var(--popover))", // Custom popover color
          foreground: "hsl(var(--popover-foreground))", // Custom popover foreground color
        },
        card: {
          DEFAULT: "hsl(var(--card))", // Custom card color
          foreground: "hsl(var(--card-foreground))", // Custom card foreground color
        },
      },
      borderRadius: {
        lg: "var(--radius)", // Custom border radius using CSS variable
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'shimmer': 'shimmer 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)' },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [],
}
