'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Zap, CheckCircle2, ArrowRight } from 'lucide-react';

export function DiagnosticCTA() {
  const t = useTranslations('home.diagnostic_cta');
  const features = t.raw('features') as string[];

  return (
    <section className="py-32">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl border border-accent-violet/20 bg-gradient-to-br from-accent-violet/10 via-bg-card to-accent-cyan/10 p-8 sm:p-12 lg:p-16">
            {/* Background glow effects */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-violet/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
              {/* Left: Content */}
              <div className="flex-1">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-violet/20 border border-accent-violet/30 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-accent-purple mb-6">
                  <Zap className="h-3 w-3" />
                  {t('label')}
                </span>

                <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                  {t('title')}
                </h2>

                <p className="text-text-secondary leading-relaxed mb-8 max-w-lg">
                  {t('description')}
                </p>

                <ul className="flex flex-wrap gap-4 mb-8">
                  {features.map((feature, i) => (
                    <li key={i} className="inline-flex items-center gap-2 text-sm text-text-secondary">
                      <CheckCircle2 className="h-4 w-4 text-accent-cyan" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/diagnostic"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent-violet to-accent-purple px-8 py-4 text-sm font-bold font-[family-name:var(--font-display)] text-white transition-all duration-300 hover:shadow-[0_0_40px_rgba(124,58,237,0.4)] hover:scale-105"
                >
                  {t('cta')}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Right: Score preview visualization */}
              <div className="flex-shrink-0">
                <div className="relative flex h-56 w-56 items-center justify-center">
                  <svg className="h-full w-full -rotate-90 transform" viewBox="0 0 224 224">
                    <circle
                      cx="112" cy="112" r="100"
                      stroke="currentColor" strokeWidth="3" fill="transparent"
                      className="text-border-subtle"
                    />
                    <circle
                      cx="112" cy="112" r="100"
                      stroke="url(#score-gradient)" strokeWidth="3" fill="transparent"
                      strokeDasharray={628.32}
                      strokeDashoffset={628.32 * 0.35}
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="score-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#7c3aed" />
                        <stop offset="100%" stopColor="#06b6d4" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-[family-name:var(--font-mono)] text-5xl font-bold bg-gradient-to-r from-accent-violet to-accent-cyan bg-clip-text text-transparent">
                      65
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted mt-1">
                      Score
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
