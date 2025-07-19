'use client'

import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { ChevronDownIcon, GlobeAltIcon } from '@heroicons/react/24/outline'
import { locales } from '../../i18n'

const languageNames = {
  ko: { name: '한국어', flag: '🇰🇷' },
  en: { name: 'English', flag: '🇺🇸' },
  es: { name: 'Español', flag: '🇪🇸' },
  ja: { name: '日本語', flag: '🇯🇵' },
  zh: { name: '中文', flag: '🇨🇳' },
  de: { name: 'Deutsch', flag: '🇩🇪' },
  fr: { name: 'Français', flag: '🇫🇷' },
  it: { name: 'Italiano', flag: '🇮🇹' },
  pt: { name: 'Português', flag: '🇵🇹' },
  ru: { name: 'Русский', flag: '🇷🇺' },
  hi: { name: 'हिन्दी', flag: '🇮🇳' },
  ar: { name: 'العربية', flag: '🇸🇦' },
  th: { name: 'ไทย', flag: '🇹🇭' },
  vi: { name: 'Tiếng Việt', flag: '🇻🇳' },
  id: { name: 'Bahasa Indonesia', flag: '🇮🇩' }
}

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const currentLocale = pathname.split('/')[1] || 'en'
  const currentLanguage = languageNames[currentLocale as keyof typeof languageNames] || languageNames.en

  const handleLanguageChange = (locale: string) => {
    const newPath = pathname.replace(/^\/[a-z]{2}/, '') || '/'
    const newUrl = locale === 'en' ? newPath : `/${locale}${newPath}`
    
    // Store language preference
    localStorage.setItem('preferred-language', locale)
    
    // Navigate to new locale
    router.push(newUrl)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        type="button"
        className="senior-button-secondary flex items-center space-x-2 px-3 py-2 text-sm border border-gray-300 hover:border-primary-500"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="언어 선택"
      >
        <GlobeAltIcon className="w-5 h-5" />
        <span className="flex items-center space-x-1">
          <span>{currentLanguage.flag}</span>
          <span className="hidden sm:inline">{currentLanguage.name}</span>
        </span>
        <ChevronDownIcon className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          
          {/* Dropdown */}
          <div 
            className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-20 max-h-80 overflow-y-auto"
            role="listbox"
            aria-label="언어 목록"
          >
            <div className="py-2">
              {locales.map((locale) => {
                const language = languageNames[locale]
                const isSelected = locale === currentLocale
                
                return (
                  <button
                    key={locale}
                    className={`w-full text-left px-4 py-3 text-lg hover:bg-gray-50 focus:bg-primary-50 focus:outline-none flex items-center space-x-3 ${
                      isSelected ? 'bg-primary-50 text-primary-700 font-semibold' : 'text-gray-700'
                    }`}
                    onClick={() => handleLanguageChange(locale)}
                    role="option"
                    aria-selected={isSelected}
                  >
                    <span className="text-2xl">{language.flag}</span>
                    <span className="flex-1">{language.name}</span>
                    {isSelected && (
                      <span className="text-primary-600" aria-label="현재 선택된 언어">
                        ✓
                      </span>
                    )}
                  </button>
                )
              })}
            </div>
            
            {/* Footer note */}
            <div className="border-t border-gray-200 px-4 py-3 bg-gray-50">
              <p className="text-sm text-gray-600 text-center">
                🌐 글로벌 시니어 복지 서비스
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  )
} 