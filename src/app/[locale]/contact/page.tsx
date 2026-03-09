'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Send, CheckCircle2, Zap } from 'lucide-react';

export default function ContactPage() {
  const t = useTranslations('contact');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-24">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          {t('title')}
        </h1>
        <p className="text-lg text-text-secondary leading-relaxed mb-12">
          {t('subtitle')}
        </p>

        {submitted ? (
          <div className="rounded-2xl border border-accent-cyan/20 bg-accent-cyan/5 p-12 text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-accent-cyan mb-4" />
            <p className="text-lg font-bold font-[family-name:var(--font-display)]">{t('form.success')}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted">{t('form.name')}</label>
                <input required name="name" type="text"
                  className="w-full rounded-lg border border-border-subtle bg-bg-card px-4 py-3 text-sm text-text-primary transition-all focus:border-accent-violet focus:outline-none focus:ring-1 focus:ring-accent-violet placeholder:text-text-muted" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted">{t('form.company')}</label>
                <input name="company" type="text"
                  className="w-full rounded-lg border border-border-subtle bg-bg-card px-4 py-3 text-sm text-text-primary transition-all focus:border-accent-violet focus:outline-none focus:ring-1 focus:ring-accent-violet placeholder:text-text-muted" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted">{t('form.email')}</label>
              <input required name="email" type="email"
                className="w-full rounded-lg border border-border-subtle bg-bg-card px-4 py-3 text-sm text-text-primary transition-all focus:border-accent-violet focus:outline-none focus:ring-1 focus:ring-accent-violet placeholder:text-text-muted" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted">{t('form.service')}</label>
              <select name="service"
                className="w-full rounded-lg border border-border-subtle bg-bg-card px-4 py-3 text-sm text-text-primary transition-all focus:border-accent-violet focus:outline-none focus:ring-1 focus:ring-accent-violet">
                {(t.raw('form.service_options') as string[]).map((opt, i) => (
                  <option key={i} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted">{t('form.message')}</label>
              <textarea name="message" rows={5}
                className="w-full rounded-lg border border-border-subtle bg-bg-card px-4 py-3 text-sm text-text-primary transition-all focus:border-accent-violet focus:outline-none focus:ring-1 focus:ring-accent-violet resize-none placeholder:text-text-muted" />
            </div>
            <button type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-accent-violet to-accent-purple py-4 text-sm font-bold font-[family-name:var(--font-display)] text-white transition-all hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:scale-[1.02] flex items-center justify-center gap-2">
              <Send className="h-4 w-4" />
              {t('form.submit')}
            </button>
          </form>
        )}

        {/* Diagnostic alternative */}
        <div className="mt-12 rounded-2xl border border-accent-violet/20 bg-accent-violet/5 p-8 text-center">
          <Zap className="mx-auto h-6 w-6 text-accent-purple mb-4" />
          <p className="text-text-secondary mb-4">{t('diagnostic_alt')}</p>
          <Link href="/diagnostic"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent-violet to-accent-purple px-6 py-3 text-sm font-bold text-white hover:shadow-[0_0_30px_rgba(124,58,237,0.3)] transition-all">
            {t('diagnostic_cta')}
          </Link>
        </div>
      </div>
    </div>
  );
}
