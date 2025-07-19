import { getRequestConfig } from 'next-intl/server'

export const locales = [
  'ko', // Korean (Original)
  'en', // English
  'es', // Spanish
  'ja', // Japanese
  'zh', // Chinese (Simplified)
  'de', // German
  'fr', // French
  'it', // Italian
  'pt', // Portuguese
  'ru', // Russian
  'hi', // Hindi
  'ar', // Arabic
  'th', // Thai
  'vi', // Vietnamese
  'id'  // Indonesian
] as const

export type Locale = (typeof locales)[number]

export default getRequestConfig(async ({ locale }) => {
  return {
    messages: (await import(`./messages/${locale}.json`)).default
  }
}) 