import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SmoothScrollProvider } from '@/components/animations/SmoothScrollProvider';
import type { Metadata } from 'next';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    en: 'Agency Level 5 | AI Automation & Smart Websites',
    es: 'Agency Level 5 | Automatización IA y Sitios Web Inteligentes',
  };

  const descriptions: Record<string, string> = {
    en: 'We build AI automations, chatbots, and smart websites that generate leads, save time, and scale your business operations.',
    es: 'Construimos automatizaciones con IA, chatbots y sitios web inteligentes que generan leads, ahorran tiempo y escalan sus operaciones.',
  };

  return {
    title: {
      default: titles[locale] || titles.en,
      template: `%s | Agency Level 5`,
    },
    description: descriptions[locale] || descriptions.en,
    metadataBase: new URL('https://agencylevel5.com'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: '/en',
        es: '/es',
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'es' ? 'es_ES' : 'en_US',
      siteName: 'Agency Level 5',
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'en' | 'es')) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <SmoothScrollProvider>
        <Header />
        <main>{children}</main>
        <Footer />
      </SmoothScrollProvider>
    </NextIntlClientProvider>
  );
}
