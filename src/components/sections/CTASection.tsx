'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  const t = useTranslations('home.cta');

  return (
    <section className="py-32 bg-bg-secondary">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <ScrollReveal>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            {t('title')}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="mx-auto max-w-xl text-text-secondary leading-relaxed mb-10">
            {t('description')}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent-violet to-accent-purple px-10 py-5 text-base font-bold font-[family-name:var(--font-display)] text-white transition-all duration-300 hover:shadow-[0_0_50px_rgba(124,58,237,0.4)] hover:scale-105"
          >
            {t('button')}
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <p className="mt-6 text-[11px] font-medium text-text-muted">
            {t('note')}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
