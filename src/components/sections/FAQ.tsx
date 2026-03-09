'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export function FAQ() {
  const t = useTranslations('home.faq');
  const items = t.raw('items') as Array<{ question: string; answer: string }>;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32">
      <div className="mx-auto max-w-3xl px-6">
        <ScrollReveal>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-center mb-16">
            {t('title')}
          </h2>
        </ScrollReveal>

        <div className="space-y-3">
          {items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div
                className={cn(
                  'rounded-xl border transition-all duration-300',
                  openIndex === i
                    ? 'border-accent-violet/30 bg-bg-card'
                    : 'border-border-subtle bg-transparent hover:border-border-hover'
                )}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-[family-name:var(--font-display)] text-sm sm:text-base font-bold pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      'h-4 w-4 shrink-0 text-text-muted transition-transform duration-300',
                      openIndex === i && 'rotate-180 text-accent-cyan'
                    )}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm text-text-secondary leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
