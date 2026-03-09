'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Menu, X, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/' as const, key: 'home' },
  { href: '/services' as const, key: 'services' },
  { href: '/about' as const, key: 'about' },
  { href: '/blog' as const, key: 'blog' },
  { href: '/contact' as const, key: 'contact' },
] as const;

export function Header() {
  const t = useTranslations('nav');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-glass-bg backdrop-blur-xl border-b border-glass-border'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent-violet to-accent-cyan text-white font-bold text-xs font-[family-name:var(--font-mono)] transition-transform group-hover:scale-110">
            L5
          </div>
          <span className="hidden sm:block text-sm font-bold font-[family-name:var(--font-display)] tracking-tight text-text-primary">
            Agency Level 5
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map(({ href, key }) => (
            <Link
              key={key}
              href={href}
              className="px-3 py-2 text-[13px] font-medium text-text-secondary hover:text-text-primary transition-colors"
            >
              {t(key)}
            </Link>
          ))}
          <Link
            href="/diagnostic"
            className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-accent-violet/10 border border-accent-violet/20 px-3 py-1.5 text-[12px] font-bold text-accent-purple hover:bg-accent-violet/20 transition-colors"
          >
            <Zap className="h-3 w-3" />
            {t('diagnostic')}
          </Link>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-accent-violet to-accent-purple px-4 py-2 text-[13px] font-bold text-white transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:scale-105"
          >
            {t('cta')}
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-border-subtle text-text-secondary hover:text-text-primary hover:border-border-hover transition-colors"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-glass-bg backdrop-blur-xl border-b border-glass-border"
          >
            <nav className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map(({ href, key }) => (
                <Link
                  key={key}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-3 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors border-b border-border-subtle last:border-0"
                >
                  {t(key)}
                </Link>
              ))}
              <Link
                href="/diagnostic"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-accent-violet/10 border border-accent-violet/20 px-4 py-3 text-sm font-bold text-accent-purple"
              >
                <Zap className="h-4 w-4" />
                {t('diagnostic')}
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-accent-violet to-accent-purple px-4 py-3 text-sm font-bold text-white"
              >
                {t('cta')}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
