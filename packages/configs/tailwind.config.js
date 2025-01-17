module.exports = {
  content: [
    '../../packages/uicore/src/components/**/*.{ts,tsx,js,jsx}',
    './src/**/*.{ts,tsx}',
    './*.{html,js,ts,jsx}'
  ],
  theme: {
    screens: {
     
      '3xl': {'max': '1800px'},
      // => @media (max-width: 1535px) { ... }

      '2xl': {'max': '1500px'},
      // => @media (max-width: 1279px) { ... }

      'xl': {'max': '1200px'},
      // => @media (max-width: 1023px) { ... }

      'lg': {'max': '900px'},
      // => @media (max-width: 767px) { ... }

      'md': {'max': '600px'},
      // => @media (max-width: 639px) { ... }
      'sm': {'max': '440px'},
      // => @media (max-width: 639px) { ... }
    },

    
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      bBlack: 'rgb(var(--okw-brand-black) / <alpha-value>)',
      bPurple: 'rgb(var(--okw-brand-purple) / <alpha-value>)',
      bGreen: 'rgb(var(--okw-brand-green) / <alpha-value>)',
      primary: 'rgb(var(--okw-color-primary) / <alpha-value>)',
      secondary: 'rgb(var(--okw-color-secondary) / <alpha-value>)',
      success: 'rgb(var(--okw-color-success) / <alpha-value>)',
      error: 'rgb(var(--okw-color-error) / <alpha-value>)',
      disabled: 'rgb(var(--okw-color-disabled) / <alpha-value>)',
      gray: {
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#1f2937',
        800: '#111827',
        900: '#030712',
      },
      darkText: "#030712",
      lightText: "#f3f4f6"
    },
   extend: {
      borderRadius: {
        "lg": "var(--okw-border-radius-lg)",
        "md": "var(--okw-border-radius-md)",
        "sm": "var(--okw-border-radius-sm)",
        "vsm": "var(--okw-border-radius-vsm)",
        "rd": "var(--okw-border-radius-rd)",
      },
      borderColor: {
        "dark": "#030712",
        "light": "#f3f4f6",
        "gray": "#d1d5db",
      }
    }
  },
  plugins: []
}
