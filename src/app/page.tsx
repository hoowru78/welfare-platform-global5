'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { ArrowRightIcon, HeartIcon, UserGroupIcon } from '@heroicons/react/24/outline'

export default function HomePage() {
  const t = useTranslations()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Welcome message */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                {t('homepage.greeting')}
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-primary-600 mb-2">
                {t('homepage.title')}
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 mb-2">
                {t('homepage.subtitle')}
              </p>
              <p className="text-lg md:text-xl text-gray-500">
                {t('homepage.description')}
              </p>
            </div>

            {/* Feature illustration */}
            <div className="mb-12 flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 md:w-48 md:h-48 bg-primary-100 rounded-full flex items-center justify-center">
                  <HeartIcon className="w-16 h-16 md:w-24 md:h-24 text-primary-600" />
                </div>
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-2xl">✨</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Action Cards */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Find Benefits Card */}
            <div className="senior-card group hover:scale-105 transition-transform duration-200">
              <div className="text-center">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <UserGroupIcon className="w-10 h-10 text-primary-600" />
                  </div>
                  <h3 className="senior-heading mb-3">
                    {t('homepage.getRecommendation.title')}
                  </h3>
                  <p className="senior-text text-gray-600 mb-6 whitespace-pre-line">
                    {t('homepage.getRecommendation.description')}
                  </p>
                </div>
                <Link
                  href="/recommendation"
                  className="senior-button-primary inline-flex items-center gap-3 group-hover:shadow-lg"
                  aria-describedby="recommendation-description"
                >
                  <span>{t('homepage.getRecommendation.button')}</span>
                  <ArrowRightIcon className="w-6 h-6" />
                </Link>
                <div id="recommendation-description" className="sr-only">
                  {t('homepage.getRecommendation.description')}
                </div>
              </div>
            </div>

            {/* Browse Programs Card */}
            <div className="senior-card group hover:scale-105 transition-transform duration-200">
              <div className="text-center">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="senior-heading mb-3">
                    {t('homepage.viewPrograms.title')}
                  </h3>
                  <p className="senior-text text-gray-600 mb-6 whitespace-pre-line">
                    {t('homepage.viewPrograms.description')}
                  </p>
                </div>
                <Link
                  href="/programs"
                  className="senior-button-secondary inline-flex items-center gap-3 group-hover:shadow-lg"
                  aria-describedby="programs-description"
                >
                  <span>{t('homepage.viewPrograms.button')}</span>
                  <ArrowRightIcon className="w-6 h-6" />
                </Link>
                <div id="programs-description" className="sr-only">
                  {t('homepage.viewPrograms.description')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-primary-100">
            <div className="mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                안전하고 신뢰할 수 있는 서비스
              </h3>
              <p className="senior-text text-gray-600">
                개인정보 보호와 접근성을 최우선으로 하는 정부 인증 서비스입니다.
                <br />
                언제든지 안전하게 이용하실 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Bar */}
      <section className="bg-red-50 border-t-4 border-red-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-red-800 mb-2">
              🚨 응급상황 연락처
            </h3>
            <div className="flex flex-wrap justify-center gap-4 text-red-700">
              <a href="tel:119" className="senior-button-secondary bg-red-100 border-red-300 text-red-700 hover:bg-red-200">
                화재·응급의료: 119
              </a>
              <a href="tel:112" className="senior-button-secondary bg-red-100 border-red-300 text-red-700 hover:bg-red-200">
                경찰: 112
              </a>
              <a href="tel:055-860-8000" className="senior-button-secondary bg-red-100 border-red-300 text-red-700 hover:bg-red-200">
                남해군청: 055-860-8000
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 