/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // 시니어 친화적 색상 팔레트
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        danger: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        }
      },
      // 시니어 친화적 폰트 크기
      fontSize: {
        'xs': ['14px', { lineHeight: '20px' }],
        'sm': ['16px', { lineHeight: '24px' }],
        'base': ['18px', { lineHeight: '28px' }],
        'lg': ['20px', { lineHeight: '32px' }],
        'xl': ['24px', { lineHeight: '36px' }],
        '2xl': ['28px', { lineHeight: '40px' }],
        '3xl': ['32px', { lineHeight: '44px' }],
        '4xl': ['36px', { lineHeight: '48px' }],
        '5xl': ['48px', { lineHeight: '56px' }],
        '6xl': ['60px', { lineHeight: '68px' }],
      },
      // 시니어 친화적 간격
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      // 터치 친화적 최소 크기
      minHeight: {
        'touch': '44px',
      },
      minWidth: {
        'touch': '44px',
      },
      // 고대비를 위한 그림자
      boxShadow: {
        'high-contrast': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
        'focus-ring': '0 0 0 3px rgba(59, 130, 246, 0.5)',
      },
      // 애니메이션 설정 (시니어 친화적으로 느리게)
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    // 커스텀 플러그인: 시니어 친화적 유틸리티
    function({ addUtilities }) {
      addUtilities({
        '.senior-focus': {
          '&:focus': {
            outline: '3px solid #3b82f6',
            'outline-offset': '2px',
            'border-radius': '4px',
          },
        },
        '.senior-button': {
          'min-height': '44px',
          'min-width': '44px',
          'font-size': '18px',
          'font-weight': '600',
          'border-radius': '8px',
          'padding': '12px 24px',
        },
        '.senior-text': {
          'font-size': '18px',
          'line-height': '1.6',
          'color': '#1e293b',
        },
        '.senior-heading': {
          'font-size': '24px',
          'font-weight': '700',
          'line-height': '1.4',
          'color': '#0f172a',
        },
      })
    },
  ],
} 