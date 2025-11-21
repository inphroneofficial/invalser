
import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: ["class"],
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        'ice-blue': {
          50: "hsl(198 100% 98%)",
          100: "hsl(198 100% 94%)",
          200: "hsl(198 93% 86%)",
          300: "hsl(198 87% 74%)",
          400: "hsl(198 93% 60%)",
          500: "hsl(199 89% 48%)",
          600: "hsl(200 98% 39%)",
          700: "hsl(201 96% 32%)",
          800: "hsl(201 90% 27%)",
          900: "hsl(202 80% 24%)",
          DEFAULT: "hsl(199 89% 48%)"
        },
        // Remove all yellow/amber colors and replace with ice-blue variants
        yellow: {
          50: "hsl(198 100% 98%)",
          100: "hsl(198 100% 94%)",
          200: "hsl(198 93% 86%)",
          300: "hsl(198 87% 74%)",
          400: "hsl(198 93% 60%)",
          500: "hsl(199 89% 48%)",
          600: "hsl(200 98% 39%)",
          700: "hsl(201 96% 32%)",
          800: "hsl(201 90% 27%)",
          900: "hsl(202 80% 24%)",
          DEFAULT: "hsl(199 89% 48%)"
        },
        amber: {
          50: "hsl(198 100% 98%)",
          100: "hsl(198 100% 94%)",
          200: "hsl(198 93% 86%)",
          300: "hsl(198 87% 74%)",
          400: "hsl(198 93% 60%)",
          500: "hsl(199 89% 48%)",
          600: "hsl(200 98% 39%)",
          700: "hsl(201 96% 32%)",
          800: "hsl(201 90% 27%)",
          900: "hsl(202 80% 24%)",
          DEFAULT: "hsl(199 89% 48%)"
        },
        navy: {
          50: "hsl(210 40% 98%)",
          100: "hsl(214 32% 95%)",
          200: "hsl(213 27% 90%)",
          300: "hsl(211 25% 84%)",
          400: "hsl(214 20% 69%)",
          DEFAULT: "hsl(214 32% 27%)",
          500: "hsl(215 25% 50%)",
          600: "hsl(215 19% 35%)",
          700: "hsl(215 25% 27%)",
          800: "hsl(222 47% 11%)",
          900: "hsl(222 84% 5%)",
          light: "hsl(214 25% 42%)",
          dark: "hsl(218 28% 14%)"
        },
        charcoal: {
          DEFAULT: "hsl(210 11% 15%)",
          light: "hsl(210 10% 23%)",
          dark: "hsl(0 0% 8%)"
        },
        silver: {
          DEFAULT: "hsl(0 0% 93%)",
          light: "hsl(0 0% 100%)",
          dark: "hsl(0 0% 87%)"
        },
        gold: {
          DEFAULT: "hsl(199 89% 48%)",
          dark: "hsl(200 98% 39%)"
        },
        premium: {
          primary: "hsl(199 89% 48%)",
          secondary: "hsl(200 98% 39%)",
          accent: "hsl(198 93% 60%)",
          neutral: "#64748B",
          dark: "hsl(202 80% 24%)",
          gradient: {
            start: "hsl(199 89% 48%)",
            end: "hsl(200 98% 39%)"
          }
        }
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
        serif: ["Playfair Display", ...fontFamily.serif],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
        'shimmer-slow': {
          '0%': {
            backgroundPosition: '-200% 0'
          },
          '100%': {
            backgroundPosition: '200% 0'
          }
        },
        float: {
          '0%, 100%': { 
            transform: 'translateY(0) rotate(0deg)',
            opacity: '0.8'
          },
          '50%': { 
            transform: 'translateY(-20px) rotate(5deg)',
            opacity: '1'
          },
        },
        'bounce-gentle': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        'bounce-in': {
          '0%': {
            transform: 'scale(0.3)',
            opacity: '0'
          },
          '50%': {
            transform: 'scale(1.05)',
            opacity: '0.8'
          },
          '70%': {
            transform: 'scale(0.9)',
            opacity: '0.9'
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1'
          }
        },
        'bounce-subtle': {
          '0%, 100%': {
            transform: 'translateY(0) scale(1)',
          },
          '50%': {
            transform: 'translateY(-5px) scale(1.02)',
          },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
        'pulse-gentle': {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.9, transform: 'scale(1.02)' },
        },
        'pulse-number': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'slide-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(40px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'slide-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-40px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'slide-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(40px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'scale-in': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.9)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        glow: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(14, 165, 233, 0.4)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(14, 165, 233, 0.8)',
          },
        },
        'glow-blue': {
          '0%, 100%': {
            boxShadow: '0 0 25px rgba(14, 165, 233, 0.5)',
          },
          '50%': {
            boxShadow: '0 0 50px rgba(14, 165, 233, 0.9)',
          },
        },
        'glow-pulse': {
          '0%, 100%': {
            opacity: '0.7',
          },
          '50%': {
            opacity: '1',
          },
        },
        'glow-gentle': {
          '0%, 100%': {
            boxShadow: '0 0 15px rgba(14, 165, 233, 0.3)',
          },
          '50%': {
            boxShadow: '0 0 25px rgba(14, 165, 233, 0.6)',
          },
        },
        'glow-text': {
          '0%, 100%': {
            textShadow: '0 0 10px rgba(14, 165, 233, 0.5)',
          },
          '50%': {
            textShadow: '0 0 20px rgba(14, 165, 233, 0.8)',
          },
        },
        'gradient-shift': {
          '0%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
          '100%': {
            backgroundPosition: '0% 50%',
          },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        sparkle: {
          '0%, 100%': {
            opacity: 1,
            transform: 'scale(1) rotate(0deg)',
          },
          '25%': {
            opacity: 0.7,
            transform: 'scale(0.8) rotate(90deg)',
          },
          '50%': {
            opacity: 1,
            transform: 'scale(1.2) rotate(180deg)',
          },
          '75%': {
            opacity: 0.7,
            transform: 'scale(0.9) rotate(270deg)',
          },
        },
        flash: {
          '0%, 100%': {
            opacity: 1,
          },
          '25%, 75%': {
            opacity: 0.3,
          },
          '50%': {
            opacity: 1,
          },
        },
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-3deg)',
          },
          '50%': {
            transform: 'rotate(3deg)',
          },
        },
        heartbeat: {
          '0%, 100%': {
            transform: 'scale(1)',
          },
          '14%': {
            transform: 'scale(1.1)',
          },
          '28%': {
            transform: 'scale(1)',
          },
          '42%': {
            transform: 'scale(1.1)',
          },
          '70%': {
            transform: 'scale(1)',
          },
        },
        'spin-slow': {
          from: {
            transform: 'rotate(0deg)',
          },
          to: {
            transform: 'rotate(360deg)',
          },
        },
        'rubber-band': {
          '0%': {
            transform: 'scale(1)'
          },
          '30%': {
            transform: 'scaleX(1.25) scaleY(0.75)'
          },
          '40%': {
            transform: 'scaleX(0.75) scaleY(1.25)'
          },
          '50%': {
            transform: 'scaleX(1.15) scaleY(0.85)'
          },
          '65%': {
            transform: 'scaleX(0.95) scaleY(1.05)'
          },
          '75%': {
            transform: 'scaleX(1.05) scaleY(0.95)'
          },
          '100%': {
            transform: 'scale(1)'
          }
        },
        'shake': {
          '0%, 100%': {
            transform: 'translateX(0)'
          },
          '10%, 30%, 50%, 70%, 90%': {
            transform: 'translateX(-2px)'
          },
          '20%, 40%, 60%, 80%': {
            transform: 'translateX(2px)'
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: "shimmer 2s infinite",
        'shimmer-slow': "shimmer-slow 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
        'bounce-in': 'bounce-in 0.6s ease-out forwards',
        'bounce-subtle': 'bounce-subtle 3s ease-in-out infinite',
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        'pulse-gentle': 'pulse-gentle 2s ease-in-out infinite',
        'pulse-number': 'pulse-number 1.5s ease-in-out infinite',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'slide-up': 'slide-up 0.6s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.6s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.6s ease-out forwards',
        'scale-in': 'scale-in 0.4s ease-out forwards',
        glow: 'glow 2s ease-in-out infinite alternate',
        'glow-blue': 'glow-blue 2s ease-in-out infinite alternate',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'glow-gentle': 'glow-gentle 3s ease-in-out infinite',
        'glow-text': 'glow-text 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 4s ease-in-out infinite',
        'gradient-x': 'gradient-x 3s ease infinite',
        sparkle: 'sparkle 2s ease-in-out infinite',
        flash: 'flash 1s ease-in-out infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
        heartbeat: 'heartbeat 1.5s ease-in-out infinite',
        'spin-slow': 'spin-slow 8s linear infinite',
        'rubber-band': 'rubber-band 1s ease-in-out',
        'shake': 'shake 0.5s ease-in-out'
      },
      boxShadow: {
        premium: "0 10px 25px -5px rgba(14, 165, 233, 0.3)",
        'premium-dark': "0 10px 25px -5px rgba(41, 61, 91, 0.3)",
        'soft': '0 2px 10px rgba(0, 0, 0, 0.1)',
        'soft-dark': '0 2px 10px rgba(0, 0, 0, 0.25)',
        'glass': '0 8px 32px rgba(31, 38, 135, 0.37)',
        'glow': '0 0 20px rgba(14, 165, 233, 0.5)',
        'glow-blue': '0 0 20px rgba(14, 165, 233, 0.5)',
        '3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.25)',
        '4xl': '0 45px 80px -15px rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'premium-ice-blue': 'linear-gradient(135deg, hsl(199 89% 48%), hsl(198 93% 60%), hsl(199 89% 48%))',
        'premium-navy': 'linear-gradient(135deg, #293D5B, #3F5F8D, #192436)',
        'glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
        'shimmer-gradient': 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
