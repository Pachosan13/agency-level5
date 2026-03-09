import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { ProblemSolution } from '@/components/sections/ProblemSolution';
import { ServicesOverview } from '@/components/sections/ServicesOverview';
import { Stats } from '@/components/sections/Stats';
import { Process } from '@/components/sections/Process';
import { Testimonials } from '@/components/sections/Testimonials';
import { DiagnosticCTA } from '@/components/sections/DiagnosticCTA';
import { FAQ } from '@/components/sections/FAQ';
import { CTASection } from '@/components/sections/CTASection';
import { generateOrganizationSchema, generateFAQSchema, generateAlternates } from '@/lib/seo';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    en: 'AI Automation Agency — Custom Chatbots, Workflows & Smart Websites | Agency Level 5',
    es: 'Agencia de Automatización con IA — Chatbots, Flujos y Sitios Web | Agency Level 5',
  };

  const descriptions: Record<string, string> = {
    en: 'Agency Level 5 designs and deploys custom AI chatbots, workflow automations, and smart websites that help businesses save time, reduce costs, and scale faster. Free diagnostic included.',
    es: 'Agency Level 5 diseña y despliega chatbots con IA, automatizaciones de flujos de trabajo y sitios web inteligentes para ahorrar tiempo, reducir costos y escalar. Diagnóstico gratis.',
  };

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    alternates: generateAlternates('', locale),
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const orgSchema = generateOrganizationSchema();

  // Get FAQ data server-side for schema markup (C5 fix)
  const t = await getTranslations({ locale, namespace: 'home.faq' });
  const faqItems = t.raw('items') as Array<{ question: string; answer: string }>;
  const faqSchema = generateFAQSchema(faqItems);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <ProblemSolution />
      <ServicesOverview />
      <Stats />
      <Process />
      <Testimonials />
      <DiagnosticCTA />
      <FAQ />
      <CTASection />
    </>
  );
}
