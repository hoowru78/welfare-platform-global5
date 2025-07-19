/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable experimental features for better performance
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['@prisma/client'],
    optimizeCss: true,
    scrollRestoration: true,
  },

  // Image optimization for global CDN
  images: {
    formats: ['image/webp', 'image/avif'],
    domains: ['localhost', 'vercel.app', 'globalseniorwelfare.org'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
  },

  // Internationalization support
  i18n: {
    locales: ['ko', 'en', 'es', 'ja', 'zh', 'de', 'fr', 'it', 'pt', 'ru', 'hi', 'ar', 'th', 'vi', 'id'],
    defaultLocale: 'en',
    localeDetection: true,
  },

  // Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    reactRemoveProperties: process.env.NODE_ENV === 'production',
  },

  // Security headers for global deployment
  headers: async () => {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: process.env.NODE_ENV === 'production' ? 'https://globalseniorwelfare.org' : '*',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization, Accept-Language',
          },
        ],
      },
    ]
  },

  // Redirects for better SEO and user experience
  redirects: async () => {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/korean',
        destination: '/ko',
        permanent: true,
      },
      {
        source: '/english',
        destination: '/en',
        permanent: true,
      },
    ]
  },

  // Rewrites for clean URLs
  rewrites: async () => {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
      {
        source: '/robots.txt',
        destination: '/api/robots',
      },
    ]
  },

  // Output configuration for static export if needed
  output: process.env.EXPORT_MODE === 'static' ? 'export' : undefined,
  trailingSlash: false,
  
  // Environment variables
  env: {
    CUSTOM_KEY: 'senior-welfare-global',
    VERSION: process.env.npm_package_version,
  },
}

// Bundle analyzer configuration (only if ANALYZE=true)
if (process.env.ANALYZE === 'true') {
  const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: true,
  })
  module.exports = withBundleAnalyzer(nextConfig)
} else {
  module.exports = nextConfig
} 