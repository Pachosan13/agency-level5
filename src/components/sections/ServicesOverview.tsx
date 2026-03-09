'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { MessageSquare, Workflow, Globe, Target, Brain, ArrowUpRight } from 'lucide-react';

const icons = [MessageSquare, Workflow, Globe, Target, Brain];
const gradients = [
  'from-accent-violet to-accent-purple',
  'from-accent-cyan to-accent-teal',
  'from-accent-purple to-accent-cyan',
  'from-accent-amber to-accent-violet',
  'from-accent-teal to-accent-violet',
];

const hrefs = [
  '/services/ai-chatbots',
  '/services/automation',
  '/services/smart-websites',
  '/services/lead-generation',
  '/services/ai-consulting',
] as const;

export function ServicesOverview() {
  const t = useTranslations('home.services');
  const items = t.raw('items') as Array<{ title: string; description: string; slug: string }>;

  return (
    <section className="py-32">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.15em] text-accent-cyan mb-4">
            {t('label')}
          </span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-16 max-w-3xl">
            {t('title')}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i];
            return (
              <ScrollReveal key={item.slug} delay={i * 0.1}>
                <Link href={hrefs[i]} className="group block h-full">
                  <div className="relative h-full rounded-2xl border border-border-subtle bg-bg-card/50 p-8 transition-all duration-300 hover:border-transparent hover:bg-bg-card hover:shadow-[0_0_40px_rgba(124,58,237,0.1)] overflow-hidden">
                    {/* Gradient border on hover */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradients[i]} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} style={{ padding: '1px' }}>
                      <div className="h-full w-full rounded-2xl bg-bg-card" />
                    </div>

                    <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${gradients[i]} text-white transition-transform group-hover:scale-110`}>
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="font-[family-name:var(--font-display)] text-lg font-bold mb-3 flex items-center gap-2">
                      {item.title}
                      <ArrowUpRight className="h-4 w-4 text-text-muted opacity-0 -translate-y-1 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                    </h3>

                    <p className="text-sm text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
