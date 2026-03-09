import { setRequestLocale } from 'next-intl/server';
import { Hero } from '@/components/sections/Hero';
import { ProblemSolution } from '@/components/sections/ProblemSolution';
import { ServicesOverview } from '@/components/sections/ServicesOverview';
import { Stats } from '@/components/sections/Stats';
import { Process } from '@/components/sections/Process';
import { Testimonials } from '@/components/sections/Testimonials';
import { DiagnosticCTA } from '@/components/sections/DiagnosticCTA';
import { FAQ } from '@/components/sections/FAQ';
import { CTASection } from '@/components/sections/CTASection';
import { generateOrganizationSchema, generateFAQSchema } from '@/lib/seo';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const orgSchema = generateOrganizationSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
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
