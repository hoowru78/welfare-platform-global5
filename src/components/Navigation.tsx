'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Bars3Icon, 
  XMarkIcon, 
  HomeIcon, 
  UserGroupIcon, 
  ClipboardDocumentListIcon,
  PhoneIcon
} from '@heroicons/react/24/outline'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const t = useTranslations()

  const navigation = [
    {
      name: t('navigation.home'),
      href: '/',
      icon: HomeIcon,
      current: pathname === '/'
    },
    {
      name: t('navigation.recommendation'),
      href: '/recommendation',
      icon: UserGroupIcon,
      current: pathname === '/recommendation'
    },
    {
      name: t('navigation.programs'),
      href: '/programs',
      icon: ClipboardDocumentListIcon,
      current: pathname === '/programs'
    }
  ]

  return (
    <nav className="bg-white shadow-lg border-b-2 border-primary-100" role="navigation" aria-label={t('navigation.mainMenu')}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 senior-focus">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">🏠</span>
              </div>
              <span className="text-xl font-bold text-gray-900 hidden sm:block">
                Senior Welfare Guide
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`senior-nav-link flex items-center space-x-2 ${
                    item.current 
                      ? 'bg-primary-100 text-primary-700 font-semibold' 
                      : 'text-gray-700 hover:text-primary-600'
                  }`}
                  aria-current={item.current ? 'page' : undefined}
                >
                  <Icon className="w-6 h-6" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
            
            {/* Emergency Contact */}
            <a
              href="tel:055-860-8000"
              className="senior-button-primary flex items-center space-x-2 bg-red-600 hover:bg-red-700"
              aria-label="응급 연락처"
            >
              <PhoneIcon className="w-5 h-5" />
              <span className="hidden lg:inline">응급연락</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="senior-button-secondary p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? t('navigation.closeMenu') : t('navigation.openMenu')}
            >
              {isMenuOpen ? (
                <XMarkIcon className="w-8 h-8" />
              ) : (
                <Bars3Icon className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div id="mobile-menu" className="md:hidden border-t border-gray-200 pt-4 pb-4">
            <div className="space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`senior-nav-link flex items-center space-x-3 w-full text-left p-4 rounded-lg ${
                      item.current 
                        ? 'bg-primary-100 text-primary-700 font-semibold' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    <Icon className="w-7 h-7" />
                    <span className="text-lg">{item.name}</span>
                  </Link>
                )
              })}
              
              {/* Mobile Emergency Contact */}
              <a
                href="tel:055-860-8000"
                className="senior-button-primary flex items-center justify-center space-x-2 w-full bg-red-600 hover:bg-red-700 mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                <PhoneIcon className="w-6 h-6" />
                <span>응급연락: 055-860-8000</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 