import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SmoothScrollProvider } from '@/components/animations/SmoothScrollProvider';
import { spaceGrotesk, inter, jetbrainsMono } from '@/lib/fonts';
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
    en: 'Agency Level 5 | AI Automation Agency — Chatbots, Workflows & Smart Websites',
    es: 'Agency Level 5 | Agencia de Automatización con IA — Chatbots, Flujos y Sitios Web',
  };

  const descriptions: Record<string, string> = {
    en: 'Agency Level 5 builds custom AI chatbots, workflow automations, and smart websites that help businesses save time, reduce costs, and scale faster.',
    es: 'Agency Level 5 construye chatbots con IA, automatizaciones de flujos de trabajo y sitios web inteligentes que ayudan a ahorrar tiempo, reducir costos y escalar.',
  };

  return {
    title: {
      default: titles[locale] || titles.en,
      template: `%s | Agency Level 5`,
    },
    description: descriptions[locale] || descriptions.en,
    // NOTE: alternates removed from layout — each page sets its own canonical
    // to avoid the bug where ALL pages pointed to /${locale} as canonical
    openGraph: {
      type: 'website',
      locale: locale === 'es' ? 'es_ES' : 'en_US',
      siteName: 'Agency Level 5',
      images: [
        {
          url: 'https://agencylevel5.com/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Agency Level 5 — AI Automation Agency',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      images: ['https://agencylevel5.com/og-image.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
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
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <SmoothScrollProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </SmoothScrollProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
