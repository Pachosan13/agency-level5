import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { ArrowLeft, ArrowRight, CheckCircle2, Zap } from 'lucide-react';

type Props = { params: Promise<{ locale: string }> };

const SLUG = 'automation';

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: `service.${SLUG}` });
  return { title: t('title'), description: t('subtitle') };
}

export default async function ServicePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: `service.${SLUG}` });
  const features = t.raw('features') as Array<{ title: string; description: string }>;
  const benefits = t.raw('benefits') as string[];

  return (
    <div className="min-h-screen pt-24">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <Link href="/services" className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-text-muted hover:text-text-primary transition-colors mb-8">
          <ArrowLeft className="h-3 w-3" /> Services
        </Link>

        <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          {t('title')}
        </h1>
        <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-3xl">
          {t('subtitle')}
        </p>
        <p className="text-base text-text-secondary leading-relaxed mb-16 max-w-3xl">
          {t('description')}
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {features.map((feature, i) => (
            <div key={i} className="rounded-2xl border border-border-subtle bg-bg-card/50 p-8 transition-all hover:border-accent-violet/20 hover:bg-bg-card">
              <h3 className="font-[family-name:var(--font-display)] text-lg font-bold mb-3">{feature.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="rounded-2xl border border-accent-cyan/20 bg-accent-cyan/5 p-8 sm:p-12 mb-16">
          <h3 className="font-[family-name:var(--font-display)] text-xl font-bold mb-6">Key Benefits</h3>
          <ul className="space-y-4">
            {benefits.map((benefit, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-cyan shrink-0" />
                <span className="text-text-secondary">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/contact"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-violet to-accent-purple px-8 py-4 text-sm font-bold text-white transition-all hover:shadow-[0_0_30px_rgba(124,58,237,0.3)] hover:scale-105">
            Get Started <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link href="/diagnostic"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-accent-violet/20 bg-accent-violet/5 px-8 py-4 text-sm font-bold text-accent-purple transition-all hover:bg-accent-violet/10">
            <Zap className="h-4 w-4" /> Free Diagnostic
          </Link>
        </div>
      </div>
    </div>
  );
}
