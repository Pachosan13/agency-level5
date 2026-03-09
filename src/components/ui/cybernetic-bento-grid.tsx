'use client';

import React, { useEffect, useRef } from 'react';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import {
  MessageSquare,
  Workflow,
  Globe,
  Target,
  Brain,
  ArrowUpRight,
  Bot,
  Zap,
  BarChart3,
  TrendingUp,
  Send,
  CheckCircle2,
} from 'lucide-react';

const icons = [MessageSquare, Workflow, Globe, Target, Brain];
const gradients = [
  'from-accent-violet to-accent-purple',
  'from-accent-cyan to-accent-teal',
  'from-accent-purple to-accent-cyan',
  'from-accent-amber to-accent-violet',
  'from-accent-teal to-accent-violet',
];
const glowColors = [
  'rgba(124, 58, 237, 0.15)',
  'rgba(6, 182, 212, 0.15)',
  'rgba(168, 85, 247, 0.15)',
  'rgba(245, 158, 11, 0.15)',
  'rgba(34, 211, 238, 0.15)',
];
const hrefs = [
  '/services/ai-chatbots',
  '/services/automation',
  '/services/smart-websites',
  '/services/lead-generation',
  '/services/ai-consulting',
] as const;

function BentoItem({
  className = '',
  glowColor,
  children,
}: {
  className?: string;
  glowColor: string;
  children: React.ReactNode;
}) {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const item = itemRef.current;
    if (!item) return;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      item.style.setProperty('--mouse-x', `${x}px`);
      item.style.setProperty('--mouse-y', `${y}px`);
    };
    item.addEventListener('mousemove', handleMouseMove);
    return () => item.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={itemRef}
      className={`bento-item group ${className}`}
      style={{ '--glow-color': glowColor } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

// Mini chat UI mockup for the AI Chatbots card
function ChatPreview() {
  return (
    <div className="mt-5 space-y-2.5">
      <div className="flex items-start gap-2.5">
        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-violet/20">
          <Bot className="h-3 w-3 text-accent-purple" />
        </div>
        <div className="rounded-lg rounded-tl-none bg-bg-secondary/80 px-3 py-2 text-[11px] text-text-secondary">
          Hi! How can I help you today?
        </div>
      </div>
      <div className="flex items-start gap-2.5 justify-end">
        <div className="rounded-lg rounded-tr-none bg-accent-violet/15 px-3 py-2 text-[11px] text-text-secondary">
          I need a quote for automation
        </div>
      </div>
      <div className="flex items-start gap-2.5">
        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-violet/20">
          <Bot className="h-3 w-3 text-accent-purple" />
        </div>
        <div className="rounded-lg rounded-tl-none bg-bg-secondary/80 px-3 py-2 text-[11px] text-text-secondary">
          <span className="flex items-center gap-1">
            <Zap className="h-3 w-3 text-accent-cyan" />
            Booking your strategy call...
          </span>
        </div>
      </div>
    </div>
  );
}

// Mini funnel chart for Lead Generation card
function FunnelPreview() {
  const stages = [
    { w: 'w-full', label: 'Visitors', color: 'bg-accent-violet/20' },
    { w: 'w-4/5', label: 'Leads', color: 'bg-accent-violet/30' },
    { w: 'w-3/5', label: 'Qualified', color: 'bg-accent-purple/30' },
    { w: 'w-2/5', label: 'Converted', color: 'bg-accent-cyan/30' },
  ];
  return (
    <div className="mt-4 flex items-end gap-1.5 h-16">
      {stages.map((s, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-1">
          <div
            className={`${s.color} rounded-sm w-full transition-all duration-500`}
            style={{ height: `${100 - i * 20}%` }}
          />
          <span className="text-[8px] font-bold uppercase tracking-wider text-text-muted">
            {s.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export function CyberneticBentoGrid() {
  const t = useTranslations('home.services');
  const items = t.raw('items') as Array<{
    title: string;
    description: string;
    slug: string;
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
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-16 max-w-3xl">
            {t('title')}
          </h2>
        </ScrollReveal>

        <div className="bento-grid">
          {/* AI Chatbots — Hero card, 2x2 */}
          <ScrollReveal delay={0} className="bento-hero">
            <Link href={hrefs[0]} className="block h-full">
              <BentoItem
                className="h-full"
                glowColor={glowColors[0]}
              >
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <div
                      className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${gradients[0]} text-white transition-transform group-hover:scale-110`}
                    >
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-bold mb-2 flex items-center gap-2">
                      {items[0].title}
                      <ArrowUpRight className="h-4 w-4 text-text-muted opacity-0 transition-all group-hover:opacity-100" />
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {items[0].description}
                    </p>
                  </div>
                  <ChatPreview />
                </div>
              </BentoItem>
            </Link>
          </ScrollReveal>

          {/* Business Automation */}
          <ScrollReveal delay={0.1}>
            <Link href={hrefs[1]} className="block h-full">
              <BentoItem glowColor={glowColors[1]} className="h-full">
                <div
                  className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${gradients[1]} text-white transition-transform group-hover:scale-110`}
                >
                  <Workflow className="h-5 w-5" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold mb-2 flex items-center gap-2">
                  {items[1].title}
                  <ArrowUpRight className="h-4 w-4 text-text-muted opacity-0 transition-all group-hover:opacity-100" />
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {items[1].description}
                </p>
                <div className="mt-4 flex items-center gap-3 text-[11px] font-bold text-accent-cyan">
                  <span className="flex items-center gap-1">
                    <Zap className="h-3 w-3" /> 20+ hrs saved/wk
                  </span>
                </div>
              </BentoItem>
            </Link>
          </ScrollReveal>

          {/* Smart Websites */}
          <ScrollReveal delay={0.15}>
            <Link href={hrefs[2]} className="block h-full">
              <BentoItem glowColor={glowColors[2]} className="h-full">
                <div
                  className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${gradients[2]} text-white transition-transform group-hover:scale-110`}
                >
                  <Globe className="h-5 w-5" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold mb-2 flex items-center gap-2">
                  {items[2].title}
                  <ArrowUpRight className="h-4 w-4 text-text-muted opacity-0 transition-all group-hover:opacity-100" />
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {items[2].description}
                </p>
                <div className="mt-4 flex gap-2">
                  {['SEO', 'GEO', 'AEO'].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-accent-purple/10 border border-accent-purple/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-accent-purple"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </BentoItem>
            </Link>
          </ScrollReveal>

          {/* Lead Generation — Wide card */}
          <ScrollReveal delay={0.2} className="bento-wide">
            <Link href={hrefs[3]} className="block h-full">
              <BentoItem
                className="h-full"
                glowColor={glowColors[3]}
              >
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 h-full">
                  <div className="flex-1">
                    <div
                      className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${gradients[3]} text-white transition-transform group-hover:scale-110`}
                    >
                      <Target className="h-5 w-5" />
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-bold mb-2 flex items-center gap-2">
                      {items[3].title}
                      <ArrowUpRight className="h-4 w-4 text-text-muted opacity-0 transition-all group-hover:opacity-100" />
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {items[3].description}
                    </p>
                  </div>
                  <div className="sm:w-44 shrink-0">
                    <FunnelPreview />
                  </div>
                </div>
              </BentoItem>
            </Link>
          </ScrollReveal>

          {/* AI Consulting */}
          <ScrollReveal delay={0.25} className="bento-tall">
            <Link href={hrefs[4]} className="block h-full">
              <BentoItem
                className="h-full"
                glowColor={glowColors[4]}
              >
                <div
                  className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${gradients[4]} text-white transition-transform group-hover:scale-110`}
                >
                  <Brain className="h-5 w-5" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold mb-2 flex items-center gap-2">
                  {items[4].title}
                  <ArrowUpRight className="h-4 w-4 text-text-muted opacity-0 transition-all group-hover:opacity-100" />
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {items[4].description}
                </p>
                <div className="mt-4 space-y-2">
                  {['AI Readiness Audit', 'Strategy Roadmap', 'Team Training'].map(
                    (step, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-[11px] text-text-muted"
                      >
                        <CheckCircle2 className="h-3 w-3 text-accent-teal" />
                        <span>{step}</span>
                      </div>
                    )
                  )}
                </div>
              </BentoItem>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
