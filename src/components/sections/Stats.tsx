'use client';

import { useTranslations } from 'next-intl';
import { CountUp } from '@/components/animations/CountUp';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

const stats = [
  { key: 'clients', end: 50, suffix: '+' },
  { key: 'automations', end: 200, suffix: '+' },
  { key: 'hours_saved', end: 10000, suffix: '+' },
  { key: 'satisfaction', end: 98, suffix: '%' },
] as const;

export function Stats() {
  const t = useTranslations('home.stats');

  return (
    <section className="py-24 border-y border-border-subtle">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map(({ key, end, suffix }, i) => (
            <ScrollReveal key={key} delay={i * 0.15}>
              <div className="text-center">
                <div className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-accent-violet to-accent-cyan bg-clip-text text-transparent mb-3">
                  <CountUp end={end} suffix={suffix} />
                </div>
                <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.15em] text-text-muted">
                  {t(key)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
