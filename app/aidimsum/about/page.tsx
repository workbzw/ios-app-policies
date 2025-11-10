'use client';

import Link from 'next/link';
import { useLanguage } from '../../contexts/LanguageContext';
import { LanguageSwitcher } from '../../components/LanguageSwitcher';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-black">
      <div className="mx-auto max-w-6xl px-6 py-8 sm:px-8 lg:px-10">
        {/* Header with Language Switcher */}
        <div className="mb-8 flex items-center justify-between">
          <Link 
            href="/"
            className="inline-flex items-center text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t('footer.back')}
          </Link>
          <LanguageSwitcher />
        </div>

        {/* Hero Section */}
        <div className="mb-16 text-center">
          <div className="mb-6 inline-block">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium">
              AiDimsum
            </span>
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl mb-4">
            {t('product.hero.title')}
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            {t('product.hero.description')}
          </p>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-zinc-900 dark:text-zinc-50 mb-12">
            {t('features.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI-Powered Learning */}
            <div className="rounded-2xl bg-white dark:bg-zinc-900 p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
                {t('features.ai.title')}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {t('features.ai.description')}
              </p>
            </div>

            {/* Pronunciation Practice */}
            <div className="rounded-2xl bg-white dark:bg-zinc-900 p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
                {t('features.pronunciation.title')}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {t('features.pronunciation.description')}
              </p>
            </div>

            {/* Interactive Lessons */}
            <div className="rounded-2xl bg-white dark:bg-zinc-900 p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-pink-600 text-white">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
                {t('features.interactive.title')}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {t('features.interactive.description')}
              </p>
            </div>

            {/* Track Progress */}
            <div className="rounded-2xl bg-white dark:bg-zinc-900 p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 text-white">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
                {t('features.progress.title')}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {t('features.progress.description')}
              </p>
            </div>

            {/* Learning Community */}
            <div className="rounded-2xl bg-white dark:bg-zinc-900 p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
                {t('features.community.title')}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {t('features.community.description')}
              </p>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-zinc-900 dark:text-zinc-50 mb-12">
            {t('howitworks.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mb-6 mx-auto flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white text-3xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
                {t('howitworks.step1.title')}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {t('howitworks.step1.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6 mx-auto flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 text-white text-3xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
                {t('howitworks.step2.title')}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {t('howitworks.step2.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6 mx-auto flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-pink-500 to-red-600 text-white text-3xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
                {t('howitworks.step3.title')}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {t('howitworks.step3.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6 mx-auto flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-teal-600 text-white text-3xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
                {t('howitworks.step4.title')}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {t('howitworks.step4.description')}
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-12 text-center text-white mb-12">
          <h2 className="text-3xl font-bold mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t('cta.description')}
          </p>
          <button className="px-8 py-4 bg-white text-zinc-900 rounded-full font-semibold text-lg hover:bg-zinc-100 transition-colors shadow-lg">
            {t('cta.button')}
          </button>
        </div>

        {/* Footer Links */}
        <div className="text-center space-x-6">
          <Link 
            href="/aidimsum/privacy-policy"
            className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
          >
            {t('nav.privacy')}
          </Link>
        </div>
      </div>
    </div>
  );
}

