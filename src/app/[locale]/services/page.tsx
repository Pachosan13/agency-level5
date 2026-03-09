import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { MessageSquare, Workflow, Globe, Target, Brain, ArrowUpRight, Zap } from 'lucide-react';

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

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services_page' });
  return { title: t('title'), description: t('subtitle') };
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'services_page' });
  const s = await getTranslations({ locale, namespace: 'home.services' });
  const sItems = s.raw('items') as Array<{ title: string; description: string; slug: string }>;

  return (
    <div className="min-h-screen pt-24">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.15em] text-accent-cyan mb-4">
          {t('title')}
        </span>
        <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          {t('title')}
        </h1>
        <p className="text-lg text-text-secondary leading-relaxed mb-16 max-w-2xl">
          {t('subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {sItems.map((item, i) => {
            const Icon = icons[i];
            return (
              <Link key={item.slug} href={hrefs[i]} className="group block">
                <div className="relative h-full rounded-2xl border border-border-subtle bg-bg-card/50 p-8 transition-all duration-300 hover:border-accent-violet/20 hover:bg-bg-card hover:shadow-[0_0_40px_rgba(124,58,237,0.08)]">
                  <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${gradients[i]} text-white transition-transform group-hover:scale-110`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold mb-3 flex items-center gap-2">
                    {item.title}
                    <ArrowUpRight className="h-4 w-4 text-text-muted opacity-0 transition-all group-hover:opacity-100" />
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Diagnostic CTA */}
        <div className="rounded-2xl border border-accent-violet/20 bg-accent-violet/5 p-8 text-center">
          <Zap className="mx-auto h-6 w-6 text-accent-purple mb-4" />
          <p className="text-text-secondary mb-4">{t('cta_diagnostic')}</p>
          <Link href="/diagnostic"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent-violet to-accent-purple px-6 py-3 text-sm font-bold text-white hover:shadow-[0_0_30px_rgba(124,58,237,0.3)] transition-all">
            Free Diagnostic <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
