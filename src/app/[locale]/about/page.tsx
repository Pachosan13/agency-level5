import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { ArrowRight } from 'lucide-react';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });
  return { title: t('title'), description: t('subtitle') };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'about' });
  const values = t.raw('values') as Array<{ title: string; description: string }>;

  return (
    <div className="min-h-screen pt-24">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          {t('title')}
        </h1>
        <p className="text-xl text-text-secondary leading-relaxed mb-12 max-w-3xl font-[family-name:var(--font-display)]">
          {t('subtitle')}
        </p>
        <p className="text-base text-text-secondary leading-relaxed mb-20 max-w-3xl">
          {t('story')}
        </p>

        {/* Mission */}
        <div className="rounded-2xl border border-accent-violet/20 bg-gradient-to-br from-accent-violet/5 to-accent-cyan/5 p-8 sm:p-12 mb-16">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.15em] text-accent-cyan mb-4">
            {t('mission_label')}
          </span>
          <p className="text-xl sm:text-2xl font-semibold font-[family-name:var(--font-display)] leading-snug tracking-tight">
            {t('mission')}
          </p>
        </div>

        {/* Values */}
        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.15em] text-accent-amber mb-8">
          {t('values_label')}
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {values.map((value, i) => (
            <div key={i} className="rounded-2xl border border-border-subtle bg-bg-card/50 p-8">
              <h3 className="font-[family-name:var(--font-display)] text-lg font-bold mb-3">{value.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent-violet to-accent-purple px-8 py-4 text-sm font-bold text-white transition-all hover:shadow-[0_0_30px_rgba(124,58,237,0.3)] hover:scale-105">
            Let&apos;s Work Together <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
