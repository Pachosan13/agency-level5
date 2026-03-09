import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { DiagnosticClient } from '@/components/sections/DiagnosticClient';
import { generateWebApplicationSchema, generateAlternates } from '@/lib/seo';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    en: 'Free Workflow Bottleneck Score — AI Operational Diagnostic Tool',
    es: 'Workflow Bottleneck Score Gratis — Diagnóstico Operativo con IA',
  };

  const descriptions: Record<string, string> = {
    en: 'Take our free 3-minute diagnostic to identify hidden workflow friction, manual dependencies, and visibility gaps. Get a professional maturity assessment from Agency Level 5.',
    es: 'Realice nuestro diagnóstico gratuito de 3 minutos para identificar fricciones ocultas, dependencias manuales y brechas de visibilidad. Evaluación profesional de Agency Level 5.',
  };

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    alternates: generateAlternates('/diagnostic', locale),
  };
}

export default async function DiagnosticPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const webAppSchema = generateWebApplicationSchema(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <DiagnosticClient />
    </>
  );
}
