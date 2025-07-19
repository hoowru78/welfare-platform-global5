'use client'

import { useTranslations } from 'next-intl'
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function Footer() {
  const t = useTranslations()

  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              {t('common.contact')}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <PhoneIcon className="w-6 h-6 text-primary-400" />
                <a 
                  href="tel:055-860-8000" 
                  className="text-lg hover:text-primary-300 senior-focus"
                >
                  055-860-8000
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="w-6 h-6 text-primary-400" />
                <a 
                  href="mailto:welfare@namhae.go.kr" 
                  className="text-lg hover:text-primary-300 senior-focus"
                >
                  welfare@globalsenior.org
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPinIcon className="w-6 h-6 text-primary-400 mt-1" />
                <address className="text-lg not-italic">
                  Global Senior Welfare Initiative<br />
                  International Headquarters<br />
                  Accessible Services Division
                </address>
              </div>
            </div>
          </div>

          {/* Emergency Contacts */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-red-300">
              🚨 응급연락처
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-lg">화재·응급의료</span>
                <a 
                  href="tel:119" 
                  className="text-xl font-bold text-red-300 hover:text-red-200 senior-focus"
                >
                  119
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg">경찰</span>
                <a 
                  href="tel:112" 
                  className="text-xl font-bold text-red-300 hover:text-red-200 senior-focus"
                >
                  112
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg">지역상담</span>
                <a 
                  href="tel:055-860-8000" 
                  className="text-xl font-bold text-blue-300 hover:text-blue-200 senior-focus"
                >
                  055-860-8000
                </a>
              </div>
            </div>
          </div>

          {/* Accessibility & Legal */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              접근성 & 인증
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">♿</span>
                <span className="text-lg">WCAG 2.1 AA 준수</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🔒</span>
                <span className="text-lg">개인정보보호 인증</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🌐</span>
                <span className="text-lg">15개 언어 지원</span>
              </div>
              <div className="mt-4">
                <button
                  onClick={() => {
                    const root = document.documentElement;
                    const currentSize = parseFloat(getComputedStyle(root).fontSize);
                    root.style.fontSize = Math.min(currentSize * 1.1, 24) + 'px';
                  }}
                  className="senior-button-secondary text-sm bg-gray-700 border-gray-600 hover:bg-gray-600"
                  aria-label="글자 크기 늘리기"
                >
                  🔍+ 글자 크게
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-lg text-gray-300">
                © 2024 Global Senior Welfare Initiative. All rights reserved.
              </p>
              <p className="text-sm text-gray-400 mt-1">
                Empowering seniors worldwide with accessible technology.
              </p>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="hover:text-primary-300 senior-focus">
                개인정보처리방침
              </a>
              <a href="/terms" className="hover:text-primary-300 senior-focus">
                이용약관
              </a>
              <a href="/accessibility" className="hover:text-primary-300 senior-focus">
                접근성 정책
              </a>
            </div>
          </div>
        </div>

        {/* Screen Reader Information */}
        <div className="sr-only">
          <p>
            이 웹사이트는 시각, 청각, 신체적 제약이 있는 분들을 위해 
            웹 접근성 지침 WCAG 2.1 AA 수준을 준수합니다.
            스크린 리더, 키보드 탐색, 고대비 모드를 지원합니다.
          </p>
        </div>
      </div>
    </footer>
  )
} 