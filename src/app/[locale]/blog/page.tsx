import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { generateAlternates } from '@/lib/seo';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    en: 'AI Automation Blog — Insights on Chatbots, Workflows & Business Growth',
    es: 'Blog de Automatización con IA — Chatbots, Flujos de Trabajo y Crecimiento',
  };

  const descriptions: Record<string, string> = {
    en: 'Expert insights on AI automation, chatbots, workflow optimization, and business growth strategies from Agency Level 5.',
    es: 'Artículos expertos sobre automatización con IA, chatbots, optimización de flujos de trabajo y estrategias de crecimiento de Agency Level 5.',
  };

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    alternates: generateAlternates('/blog', locale),
  };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const content: Record<string, { title: string; subtitle: string; soon: string; preparing: string }> = {
    en: {
      title: 'Blog',
      subtitle: 'Expert insights on AI automation, chatbots, and business growth strategies.',
      soon: 'Coming soon.',
      preparing: 'We\'re preparing expert content on AI automation and business growth.',
    },
    es: {
      title: 'Blog',
      subtitle: 'Artículos expertos sobre automatización con IA, chatbots y estrategias de crecimiento.',
      soon: 'Muy pronto.',
      preparing: 'Estamos preparando contenido experto sobre automatización con IA y crecimiento empresarial.',
    },
  };

  const c = content[locale] || content.en;

  return (
    <div className="min-h-screen pt-24">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold tracking-tight mb-6">{c.title}</h1>
        <p className="text-lg text-text-secondary leading-relaxed mb-16">
          {c.subtitle}
        </p>
        <div className="rounded-2xl border border-border-subtle bg-bg-card/50 p-12 text-center">
          <p className="text-text-muted font-[family-name:var(--font-display)] text-lg">{c.soon}</p>
          <p className="text-sm text-text-muted mt-2">{c.preparing}</p>
        </div>
      </div>
    </div>
  );
}
