import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import LanguageSelector from '@/components/LanguageSelector'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Global Senior Welfare Guide - Find Benefits & Services',
    template: '%s | Global Senior Welfare Guide'
  },
  description: 'Helping seniors worldwide access welfare programs and government services. Senior-friendly design with multi-language support.',
  keywords: ['seniors', 'welfare', 'benefits', 'accessibility', 'government services', 'elderly care'],
  authors: [{ name: 'Global Senior Welfare Initiative' }],
  creator: 'Global Senior Welfare Initiative',
  publisher: 'Global Senior Welfare Initiative',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://globalseniorwelfare.org',
    title: 'Global Senior Welfare Guide',
    description: 'Helping seniors worldwide access welfare programs and government services',
    siteName: 'Global Senior Welfare Guide',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Global Senior Welfare Guide - Helping seniors access benefits',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Global Senior Welfare Guide',
    description: 'Helping seniors worldwide access welfare programs and government services',
    images: ['/og-image.jpg'],
    creator: '@GlobalSeniorWelfare',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  manifest: '/manifest.json',
  other: {
    'msapplication-TileColor': '#0ea5e9',
    'theme-color': '#0ea5e9',
  },
}

interface RootLayoutProps {
  children: React.ReactNode
  params: { locale: string }
}

export default async function RootLayout({
  children,
  params: { locale }
}: RootLayoutProps) {
  const messages = await getMessages()

  return (
    <html lang={locale} className={inter.variable}>
      <head>
        {/* Accessibility and SEO meta tags */}
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        
        {/* Preconnect to important domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Language alternates for SEO */}
        <link rel="alternate" hrefLang="en" href="https://globalseniorwelfare.org/en" />
        <link rel="alternate" hrefLang="ko" href="https://globalseniorwelfare.org/ko" />
        <link rel="alternate" hrefLang="es" href="https://globalseniorwelfare.org/es" />
        <link rel="alternate" hrefLang="ja" href="https://globalseniorwelfare.org/ja" />
        <link rel="alternate" hrefLang="zh" href="https://globalseniorwelfare.org/zh" />
        <link rel="alternate" hrefLang="x-default" href="https://globalseniorwelfare.org" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {/* Skip to main content link for screen readers */}
          <a 
            href="#main-content" 
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 
                       bg-primary-600 text-white px-4 py-2 rounded-md z-50 
                       text-lg font-medium"
          >
            Skip to main content
          </a>
          
          {/* Language selector */}
          <div className="bg-gray-50 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-end py-2">
                <LanguageSelector />
              </div>
            </div>
          </div>
          
          {/* Main navigation */}
          <Navigation />
          
          {/* Main content */}
          <main 
            id="main-content" 
            className="min-h-screen bg-gray-50"
            role="main"
          >
            {children}
          </main>
          
          {/* Footer */}
          <Footer />
          
          {/* Accessibility enhancement scripts */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                // High contrast mode detection and toggle
                if (window.matchMedia && window.matchMedia('(prefers-contrast: high)').matches) {
                  document.documentElement.classList.add('high-contrast');
                }
                
                // Reduced motion detection
                if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                  document.documentElement.classList.add('reduce-motion');
                }
                
                // Font size adjustment for accessibility
                function adjustFontSize(factor) {
                  const root = document.documentElement;
                  const currentSize = parseFloat(getComputedStyle(root).fontSize);
                  root.style.fontSize = (currentSize * factor) + 'px';
                }
                
                // Keyboard navigation enhancement
                document.addEventListener('keydown', function(e) {
                  if (e.key === 'Tab') {
                    document.body.classList.add('using-keyboard');
                  }
                });
                
                document.addEventListener('mousedown', function() {
                  document.body.classList.remove('using-keyboard');
                });
              `,
            }}
          />
        </NextIntlClientProvider>
      </body>
    </html>
  )
} 