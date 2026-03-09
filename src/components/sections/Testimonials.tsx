'use client';

import { useTranslations } from 'next-intl';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Quote } from 'lucide-react';

export function Testimonials() {
  const t = useTranslations('home.testimonials');
  const items = t.raw('items') as Array<{
    quote: string;
    name: string;
    role: string;
    metric: string;
  }>;

  return (
    <section className="py-32 bg-bg-secondary">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.15em] text-accent-amber mb-4">
            {t('label')}
          </span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-16">
            {t('title')}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="group relative flex h-full flex-col rounded-2xl border border-border-subtle bg-bg-card/50 p-8 transition-all hover:border-accent-violet/20 hover:bg-bg-card">
                <Quote className="h-8 w-8 text-accent-violet/20 mb-6" />

                <p className="flex-1 text-sm text-text-secondary leading-relaxed mb-8">
                  &ldquo;{item.quote}&rdquo;
                </p>

                <div className="border-t border-border-subtle pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold">{item.name}</p>
                      <p className="text-[11px] text-text-muted">{item.role}</p>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-accent-cyan/10 px-3 py-1 text-[10px] font-bold text-accent-cyan uppercase tracking-wider">
                      {item.metric}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
