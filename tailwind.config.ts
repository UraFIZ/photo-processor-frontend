// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F3F4F6', // Light grey background
        primary: {
          default: '#2563EB', // Blue
          light: '#6ED0F3',
          dark: '#1E40AF',
          green: '#D1F26E',  // Action buttons
          rose: '#F89D7B',   // Share button
        },
        text: {
          primary: '#1F2937',
          secondary: '#4B5563',
          light: '#9CA3AF',
        },
        border: {
          DEFAULT: '#E5E7EB',
          light: '#F3F4F6',
        },
        card: {
          DEFAULT: '#FFFFFF',
          hover: '#F9FAFB',
        }
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'button': '0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
}

export default config