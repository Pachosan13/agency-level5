'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { GradientMesh } from '@/components/animations/GradientMesh';
import { TextReveal } from '@/components/animations/TextReveal';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { ArrowRight, ChevronDown } from 'lucide-react';

export function Hero() {
  const t = useTranslations('home.hero');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <GradientMesh />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center pt-20">
        <ScrollReveal delay={0.2}>
          <span className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-bg-card/50 backdrop-blur-sm px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-accent-cyan mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan animate-pulse" />
            {t('badge')}
          </span>
        </ScrollReveal>

        <TextReveal
          text={t('headline')}
          as="h1"
          className="font-[family-name:var(--font-display)] text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.95] mb-8"
          highlightWords={['intelligence.']}
        />

        <ScrollReveal delay={0.6}>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-text-secondary leading-relaxed mb-12">
            {t('subheadline')}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.8}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-violet to-accent-purple px-8 py-4 text-sm font-bold font-[family-name:var(--font-display)] text-white transition-all duration-300 hover:shadow-[0_0_40px_rgba(124,58,237,0.4)] hover:scale-105"
            >
              {t('cta_primary')}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border-subtle px-8 py-4 text-sm font-bold font-[family-name:var(--font-display)] text-text-secondary transition-all duration-300 hover:border-accent-cyan hover:text-accent-cyan hover:bg-accent-cyan/5"
            >
              {t('cta_secondary')}
            </Link>
          </div>
        </ScrollReveal>

        {/* Scroll indicator */}
        <ScrollReveal delay={1.2}>
          <div className="mt-20 flex justify-center">
            <ChevronDown className="h-5 w-5 text-text-muted animate-bounce" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
