import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { ContactForm } from '@/components/sections/ContactForm';
import { generateAlternates } from '@/lib/seo';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    en: 'Contact Agency Level 5 — Book a Free AI Automation Strategy Call',
    es: 'Contacto — Reserve una Llamada Estratégica de Automatización con IA Gratis',
  };

  const descriptions: Record<string, string> = {
    en: 'Get in touch with Agency Level 5. Book a free 15-minute strategy call to discover how AI chatbots, workflow automations, and smart websites can grow your business.',
    es: 'Contacte a Agency Level 5. Agende una llamada estratégica gratuita de 15 minutos para descubrir cómo chatbots con IA y automatizaciones pueden hacer crecer su negocio.',
  };

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    alternates: generateAlternates('/contact', locale),
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ContactForm />;
}
