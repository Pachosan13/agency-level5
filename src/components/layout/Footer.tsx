'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Footer() {
  const t = useTranslations('footer');
  const nav = useTranslations('nav');

  return (
    <footer className="border-t border-border-subtle bg-bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent-violet to-accent-cyan text-white font-bold text-xs font-[family-name:var(--font-mono)]">
                L5
              </div>
              <span className="text-sm font-bold font-[family-name:var(--font-display)] tracking-tight">
                Agency Level 5
              </span>
            </div>
            <p className="text-sm text-text-muted leading-relaxed mb-6">
              {t('tagline')}
            </p>
            <LanguageSwitcher />
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-text-muted mb-4">
              {t('services')}
            </h4>
            <ul className="space-y-3">
              {(['ai-chatbots', 'automation', 'smart-websites', 'lead-generation', 'ai-consulting'] as const).map(
                (slug) => (
                  <li key={slug}>
                    <Link
                      href={`/services/${slug}` as '/services/ai-chatbots'}
                      className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                    >
                      {slug
                        .split('-')
                        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                        .join(' ')}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-text-muted mb-4">
              {t('company')}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                  {nav('about')}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                  {nav('blog')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                  {nav('contact')}
                </Link>
              </li>
              <li>
                <Link href="/diagnostic" className="text-sm text-accent-purple hover:text-accent-violet transition-colors">
                  {nav('diagnostic')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-text-muted mb-4">
              {t('connect')}
            </h4>
            <ul className="space-y-3">
              <li>
                <span className="text-sm text-text-secondary hover:text-text-primary transition-colors cursor-pointer">
                  LinkedIn
                </span>
              </li>
              <li>
                <span className="text-sm text-text-secondary hover:text-text-primary transition-colors cursor-pointer">
                  Instagram
                </span>
              </li>
              <li>
                <span className="text-sm text-text-secondary hover:text-text-primary transition-colors cursor-pointer">
                  X (Twitter)
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border-subtle pt-8 md:flex-row">
          <p className="text-[11px] font-medium text-text-muted">
            &copy; {new Date().getFullYear()} Agency Level 5. {t('rights')}
          </p>
          <div className="flex gap-6">
            <span className="text-[11px] font-medium text-text-muted hover:text-text-secondary transition-colors cursor-pointer">
              {t('privacy')}
            </span>
            <span className="text-[11px] font-medium text-text-muted hover:text-text-secondary transition-colors cursor-pointer">
              {t('terms')}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
