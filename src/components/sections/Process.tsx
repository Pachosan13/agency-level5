'use client';

import { useTranslations } from 'next-intl';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export function Process() {
  const t = useTranslations('home.process');
  const steps = t.raw('steps') as Array<{
    number: string;
    title: string;
    description: string;
  }>;

  return (
    <section className="py-32">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.15em] text-accent-cyan mb-4">
            {t('label')}
          </span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-20 max-w-3xl">
            {t('title')}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="relative">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(100%+1rem)] w-[calc(100%-2rem)] h-px bg-gradient-to-r from-border-subtle to-transparent" />
                )}

                <div className="font-[family-name:var(--font-mono)] text-5xl font-bold bg-gradient-to-b from-accent-violet/30 to-transparent bg-clip-text text-transparent mb-6">
                  {step.number}
                </div>

                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold mb-3">
                  {step.title}
                </h3>

                <p className="text-sm text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
