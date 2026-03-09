'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { QUESTIONS } from '@/data/diagnostic-questions';
import { AssessmentState, AssessmentResult, LeadData } from '@/data/diagnostic-types';
import { calculateResults } from '@/lib/scoring';
import {
  ChevronRight, ChevronLeft, ArrowRight, CheckCircle2,
  BarChart3, Clock, ShieldCheck, Mail, Building2, User,
  Phone, RefreshCcw, ExternalLink, Zap,
} from 'lucide-react';

type View = 'landing' | 'diagnostic' | 'lead' | 'results';

const transition = { duration: 0.4, ease: [0.23, 1, 0.32, 1] as const };

export function DiagnosticClient() {
  const t = useTranslations('diagnostic');
  const locale = useLocale();
  const [view, setView] = useState<View>('landing');
  const [state, setState] = useState<AssessmentState>({
    answers: {},
    currentStep: 0,
  });
  const [results, setResults] = useState<AssessmentResult | null>(null);

  const handleStart = () => setView('diagnostic');

  const handleAnswer = (questionId: string, answerId: string) => {
    setState((prev) => ({
      ...prev,
      answers: { ...prev.answers, [questionId]: answerId },
    }));
    if (state.currentStep < QUESTIONS.length - 1) {
      setTimeout(() => {
        setState((prev) => ({ ...prev, currentStep: prev.currentStep + 1 }));
      }, 300);
    } else {
      setView('lead');
    }
  };

  const handleBack = () => {
    if (state.currentStep > 0) {
      setState((prev) => ({ ...prev, currentStep: prev.currentStep - 1 }));
    } else {
      setView('landing');
    }
  };

  const handleLeadSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const lead: LeadData = {
      name: formData.get('name') as string,
      company: formData.get('company') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
    };

    const res = calculateResults(state);
    setResults(res);
    setView('results');

    fetch('/api/diagnostic/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...lead,
        results: {
          overallScore: res.overallScore,
          maturityKey: res.maturityKey,
          pillarScores: res.pillarScores.map((ps) => ({ pillar: ps.pillar, score: ps.score })),
          topBottleneck: res.topBottlenecks[0]?.title.en || '',
          recommendation: res.recommendation.en,
        },
      }),
    }).catch(() => {});
  };

  const handleShareLinkedIn = () => {
    if (!results) return;
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://agencylevel5.com/' + locale + '/diagnostic')}`;
    window.open(shareUrl, '_blank', 'width=600,height=500');
  };

  const handleRestart = () => {
    setState({ answers: {}, currentStep: 0 });
    setResults(null);
    setView('landing');
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <AnimatePresence mode="wait">
          {/* LANDING VIEW */}
          {view === 'landing' && (
            <motion.div
              key="landing"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={transition}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent-violet/20 bg-accent-violet/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-accent-purple">
                <ShieldCheck className="h-3 w-3" />
                {t('app.tagline')}
              </div>
              <h1 className="mb-8 max-w-4xl font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
                {t('landing.title')}
              </h1>
              <p className="mb-12 max-w-2xl text-lg text-text-secondary leading-relaxed">
                {t('landing.subtitle')}
              </p>
              <div className="flex flex-col items-center gap-6">
                <button
                  onClick={handleStart}
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent-violet to-accent-purple px-8 py-4 text-sm font-bold font-[family-name:var(--font-display)] text-white transition-all duration-300 hover:shadow-[0_0_40px_rgba(124,58,237,0.4)] hover:scale-105"
                >
                  {t('landing.cta')}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <div className="flex items-center gap-2 text-xs font-medium text-text-muted">
                  <Clock className="h-3.5 w-3.5" />
                  {t('landing.timeEstimate')}
                </div>
              </div>

              <div className="mt-24 grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
                {[
                  { icon: BarChart3, title: t('pillars.visibility'), desc: t('bottlenecks.visibility_gap.description') },
                  { icon: CheckCircle2, title: t('pillars.process'), desc: t('bottlenecks.fragmented_data.description') },
                  { icon: ShieldCheck, title: t('pillars.execution'), desc: t('bottlenecks.manual_followup.description') },
                ].map((item, i) => (
                  <div key={i} className="text-left rounded-2xl border border-border-subtle bg-bg-card/50 p-8 transition-all hover:border-accent-violet/20 hover:bg-bg-card">
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-accent-violet to-accent-cyan text-white">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mb-3 text-lg font-bold font-[family-name:var(--font-display)]">{item.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* DIAGNOSTIC VIEW */}
          {view === 'diagnostic' && (
            <motion.div
              key="diagnostic"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={transition}
              className="mx-auto max-w-2xl"
            >
              <div className="mb-16">
                <div className="mb-4 flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.12em] text-text-muted">
                  <span>{t('progress.label')}</span>
                  <span>{state.currentStep + 1} {t('progress.of')} {QUESTIONS.length}</span>
                </div>
                <div className="h-1 w-full overflow-hidden rounded-full bg-bg-card">
                  <motion.div
                    className="h-full bg-gradient-to-r from-accent-violet to-accent-cyan"
                    animate={{ width: `${((state.currentStep + 1) / QUESTIONS.length) * 100}%` }}
                    transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                  />
                </div>
              </div>

              <h2 className="mb-12 font-[family-name:var(--font-display)] text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                {QUESTIONS[state.currentStep].text[locale as 'en' | 'es']}
              </h2>

              <div className="space-y-3">
                {QUESTIONS[state.currentStep].answers.map((answer) => (
                  <button
                    key={answer.id}
                    onClick={() => handleAnswer(QUESTIONS[state.currentStep].id, answer.id)}
                    className={`group w-full rounded-xl border p-6 text-left transition-all duration-200 ${
                      state.answers[QUESTIONS[state.currentStep].id] === answer.id
                        ? 'border-accent-violet bg-accent-violet/10'
                        : 'border-border-subtle bg-bg-card/50 hover:border-accent-violet/30 hover:bg-bg-card'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors">
                        {answer.text[locale as 'en' | 'es']}
                      </span>
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border-subtle transition-colors group-hover:border-accent-violet group-hover:bg-accent-violet">
                        <ChevronRight className="h-3.5 w-3.5 text-text-muted group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-12">
                <button
                  onClick={handleBack}
                  className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-text-muted hover:text-text-primary transition-colors"
                >
                  <ChevronLeft className="h-3.5 w-3.5" />
                  {t('app.back')}
                </button>
              </div>
            </motion.div>
          )}

          {/* LEAD CAPTURE VIEW */}
          {view === 'lead' && (
            <motion.div
              key="lead"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="mx-auto max-w-xl"
            >
              <div className="rounded-2xl border border-border-subtle bg-bg-card p-8 sm:p-12 shadow-2xl shadow-accent-violet/5">
                <div className="mb-10 text-center">
                  <div className="mx-auto mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-accent-violet to-accent-cyan text-white shadow-lg">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <h2 className="mb-4 font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold tracking-tight">
                    {t('lead.title')}
                  </h2>
                  <p className="text-text-secondary leading-relaxed">
                    {t('lead.subtitle')}
                  </p>
                </div>

                <form onSubmit={handleLeadSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted flex items-center gap-2">
                        <User className="h-3 w-3" /> {t('lead.name')}
                      </label>
                      <input required name="name" type="text" placeholder="John Doe"
                        className="w-full rounded-lg border border-border-subtle bg-bg-secondary px-4 py-3 text-sm text-text-primary transition-all focus:border-accent-violet focus:outline-none focus:ring-1 focus:ring-accent-violet placeholder:text-text-muted" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted flex items-center gap-2">
                        <Building2 className="h-3 w-3" /> {t('lead.company')}
                      </label>
                      <input required name="company" type="text" placeholder="Acme Corp"
                        className="w-full rounded-lg border border-border-subtle bg-bg-secondary px-4 py-3 text-sm text-text-primary transition-all focus:border-accent-violet focus:outline-none focus:ring-1 focus:ring-accent-violet placeholder:text-text-muted" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted flex items-center gap-2">
                      <Mail className="h-3 w-3" /> {t('lead.email')}
                    </label>
                    <input required name="email" type="email" placeholder="john@company.com"
                      className="w-full rounded-lg border border-border-subtle bg-bg-secondary px-4 py-3 text-sm text-text-primary transition-all focus:border-accent-violet focus:outline-none focus:ring-1 focus:ring-accent-violet placeholder:text-text-muted" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted flex items-center gap-2">
                      <Phone className="h-3 w-3" /> {t('lead.phone')}
                    </label>
                    <input name="phone" type="tel" placeholder="+1 (555) 000-0000"
                      className="w-full rounded-lg border border-border-subtle bg-bg-secondary px-4 py-3 text-sm text-text-primary transition-all focus:border-accent-violet focus:outline-none focus:ring-1 focus:ring-accent-violet placeholder:text-text-muted" />
                  </div>
                  <button type="submit"
                    className="w-full rounded-xl bg-gradient-to-r from-accent-violet to-accent-purple py-4 text-sm font-bold font-[family-name:var(--font-display)] text-white transition-all hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:scale-[1.02] mt-2">
                    {t('lead.unlock')}
                  </button>
                  <p className="text-center text-[10px] font-medium uppercase tracking-widest text-text-muted">
                    {t('lead.privacy')}
                  </p>
                </form>
              </div>
            </motion.div>
          )}

          {/* RESULTS VIEW */}
          {view === 'results' && results && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="space-y-8"
            >
              {/* Header */}
              <div className="flex flex-col items-start justify-between gap-6 border-b border-border-subtle pb-8 md:flex-row md:items-end">
                <div>
                  <div className="mb-4 inline-flex items-center rounded-full bg-gradient-to-r from-accent-violet to-accent-cyan px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                    Executive Report
                  </div>
                  <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">{t('results.title')}</h1>
                  <p className="mt-4 max-w-xl text-text-secondary leading-relaxed">{t('results.scoreDescription')}</p>
                </div>
                <button onClick={handleRestart}
                  className="inline-flex items-center gap-2 rounded-lg border border-border-subtle px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-text-muted hover:text-text-primary hover:border-border-hover transition-colors">
                  <RefreshCcw className="h-3 w-3" />
                  {t('app.restart')}
                </button>
              </div>

              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                {/* Score Circle */}
                <div className="flex flex-col items-center justify-center rounded-2xl border border-border-subtle bg-bg-card p-12 text-center lg:col-span-5">
                  <div className="relative mb-8 flex h-52 w-52 items-center justify-center">
                    <svg className="h-full w-full -rotate-90 transform" viewBox="0 0 224 224">
                      <circle cx="112" cy="112" r="100" stroke="currentColor" strokeWidth="3" fill="transparent" className="text-border-subtle" />
                      <motion.circle cx="112" cy="112" r="100" stroke="url(#result-gradient)" strokeWidth="3" fill="transparent"
                        strokeDasharray={628.32} initial={{ strokeDashoffset: 628.32 }}
                        animate={{ strokeDashoffset: 628.32 - (628.32 * results.overallScore) / 100 }}
                        transition={{ duration: 2, ease: [0.23, 1, 0.32, 1] }} strokeLinecap="round" />
                      <defs>
                        <linearGradient id="result-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#7c3aed" />
                          <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="font-[family-name:var(--font-mono)] text-6xl font-bold">{results.overallScore}</span>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted mt-1">Score</span>
                    </div>
                  </div>
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted mb-2">{t('results.maturity')}</h3>
                  <div className="text-2xl font-bold font-[family-name:var(--font-display)]" style={{ color: results.maturity.color }}>
                    {results.maturity.label[locale as 'en' | 'es']}
                  </div>
                  <p className="mx-auto mt-2 max-w-xs text-sm text-text-secondary leading-relaxed">
                    {results.maturity.description[locale as 'en' | 'es']}
                  </p>
                </div>

                {/* Pillar Breakdown */}
                <div className="rounded-2xl border border-border-subtle bg-bg-card/50 p-8 sm:p-12 lg:col-span-7">
                  <h3 className="mb-8 text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted">{t('results.pillarBreakdown')}</h3>
                  <div className="space-y-8">
                    {results.pillarScores.map((ps, i) => (
                      <div key={ps.pillar} className="space-y-2">
                        <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-widest">
                          <span className="text-text-secondary">{ps.label[locale as 'en' | 'es']}</span>
                          <span className="font-[family-name:var(--font-mono)]">{ps.score}%</span>
                        </div>
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-bg-secondary">
                          <motion.div className="h-full rounded-full bg-gradient-to-r from-accent-violet to-accent-cyan"
                            initial={{ width: 0 }} animate={{ width: `${ps.score}%` }}
                            transition={{ duration: 1.2, delay: 0.2 + i * 0.15, ease: [0.23, 1, 0.32, 1] }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {/* Top Bottlenecks */}
                <div className="rounded-2xl bg-gradient-to-br from-accent-violet/20 to-accent-cyan/10 border border-accent-violet/20 p-8 sm:p-12">
                  <h3 className="mb-8 text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted">{t('results.topBottlenecks')}</h3>
                  <div className="space-y-8">
                    {results.topBottlenecks.map((b, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-violet/20 font-[family-name:var(--font-mono)] text-xs font-bold text-accent-purple">
                          0{i + 1}
                        </div>
                        <div>
                          <h4 className="text-base font-bold mb-1">{b.title[locale as 'en' | 'es']}</h4>
                          <p className="text-sm text-text-secondary leading-relaxed">{b.description[locale as 'en' | 'es']}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Recommendation */}
                  <div className="rounded-2xl border border-border-subtle bg-bg-card p-8 sm:p-12">
                    <h3 className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted">{t('results.recommendation')}</h3>
                    <p className="text-xl font-semibold leading-snug tracking-tight font-[family-name:var(--font-display)]">
                      &ldquo;{results.recommendation[locale as 'en' | 'es']}&rdquo;
                    </p>
                  </div>

                  {/* Book Call CTA */}
                  <div className="rounded-2xl bg-gradient-to-br from-accent-violet to-accent-purple p-8 sm:p-12 text-center">
                    <h3 className="mb-3 text-xl font-bold font-[family-name:var(--font-display)] text-white">{t('results.ctaTitle')}</h3>
                    <p className="mb-8 text-sm text-white/70 leading-relaxed">{t('results.ctaDescription')}</p>
                    <button className="w-full rounded-xl bg-white py-4 text-sm font-bold font-[family-name:var(--font-display)] text-accent-violet transition-all hover:bg-white/90 hover:scale-[1.02]"
                      onClick={() => window.open('/contact', '_blank')}>
                      {t('results.bookCall')}
                      <ExternalLink className="ml-2 inline h-4 w-4" />
                    </button>
                  </div>

                  {/* LinkedIn Share */}
                  <div className="rounded-2xl border border-[#0A66C2]/20 bg-[#0A66C2]/5 p-8 text-center">
                    <p className="mb-4 text-sm font-medium text-text-secondary">{t('results.sharePrompt')}</p>
                    <button onClick={handleShareLinkedIn}
                      className="w-full rounded-xl border border-[#0A66C2]/30 py-3 text-sm font-bold text-[#0A66C2] transition-all hover:bg-[#0A66C2] hover:text-white">
                      <svg className="mr-2 inline h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      {t('results.shareLinkedIn')}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
