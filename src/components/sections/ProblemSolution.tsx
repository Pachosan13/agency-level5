'use client';

import { useTranslations } from 'next-intl';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Clock, Repeat, TrendingDown, HelpCircle, ArrowRight } from 'lucide-react';

const iconMap: Record<string, typeof Clock> = {
  clock: Clock,
  repeat: Repeat,
  'trending-down': TrendingDown,
  'help-circle': HelpCircle,
};

export function ProblemSolution() {
  const t = useTranslations('home.problem');
  const items = t.raw('items') as Array<{ text: string; icon: string }>;

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.15em] text-accent-amber mb-4">
            {t('label')}
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-16 max-w-3xl">
            {t('title')}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
          {items.map((item, i) => {
            const Icon = iconMap[item.icon] || HelpCircle;
            return (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group flex items-start gap-4 rounded-xl border border-border-subtle bg-bg-card/50 p-6 transition-all hover:border-red-500/20 hover:bg-red-500/5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-500/10 text-red-400 transition-colors group-hover:bg-red-500/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed pt-2">
                    {item.text}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Solution */}
        <div className="relative rounded-2xl border border-accent-violet/20 bg-gradient-to-br from-accent-violet/5 to-accent-cyan/5 p-8 sm:p-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-violet/10 rounded-full blur-3xl pointer-events-none" />
          <ScrollReveal>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <ArrowRight className="h-5 w-5 text-accent-cyan" />
                <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-accent-cyan">
                  {t('solution_title')}
                </h3>
              </div>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-3xl">
                {t('solution_text')}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
