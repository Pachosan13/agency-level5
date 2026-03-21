import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import {
  ArrowRight,
  MapPin,
  Megaphone,
  Search,
  BarChart3,
  Share2,
  Target,
  TrendingUp,
  Users,
  HelpCircle,
  MousePointerClick,
  Eye,
  PenTool,
} from 'lucide-react';
import { generateAlternates } from '@/lib/seo';

type Props = { params: Promise<{ locale: string }> };

/* ── Bilingual content (hardcoded, no message files) ── */

const content = {
  en: {
    meta: {
      title: 'Digital Marketing in Panama | Digital Marketing Agency | Agency Level 5',
      description:
        'Full-service digital marketing agency in Panama. SEO, Google Ads, social media management, and content marketing designed for the Panamanian market. Measurable results.',
    },
    hero: {
      h1: 'Digital Marketing in Panama',
      sub: 'We help Panama businesses grow with digital marketing strategies built for this market — not copy-pasted from the US. Local expertise, measurable results, real leads.',
    },
    problem: {
      label: 'The Problem',
      h2: 'Why Most Panama Businesses Struggle with Digital Marketing',
      points: [
        {
          icon: 'Share2',
          title: 'Still Relying on Referrals and Instagram Only',
          desc: 'Word of mouth got you here, but it won\'t scale. Posting on Instagram without a strategy is not digital marketing — it\'s hoping for the best. You need a system that generates leads consistently, not just likes.',
        },
        {
          icon: 'Eye',
          title: 'No Measurement or Tracking of Marketing ROI',
          desc: 'You\'re spending money on ads and social media, but you don\'t know which channel is actually bringing clients. Without tracking, you\'re flying blind — and probably wasting at least 40% of your budget.',
        },
        {
          icon: 'Users',
          title: 'Agencies That Don\'t Understand Panama',
          desc: 'Most agencies apply US or European playbooks to the Panamanian market. They don\'t understand local search behavior, WhatsApp-first communication, or that your clients speak Spanish and expect Spanish-first experiences.',
        },
      ],
    },
    services: {
      label: 'What We Do',
      h2: 'Digital Marketing Services for Panama Businesses',
      items: [
        {
          icon: 'Search',
          title: 'Local SEO',
          desc: 'Rank on Google when people in Panama City, David, or Chitre search for what you do. Google Business Profile optimization, local citations, and content in Spanish that actually ranks.',
        },
        {
          icon: 'Target',
          title: 'Google Ads Management',
          desc: 'Targeted campaigns for the Panamanian market. We manage your budget, write ads in Spanish, and optimize for conversions — not just clicks. You get leads, not vanity metrics.',
        },
        {
          icon: 'PenTool',
          title: 'Content Marketing',
          desc: 'Blog posts, landing pages, and content that positions you as the authority in your industry in Panama. Written in Spanish first, optimized for search, designed to convert visitors into clients.',
        },
        {
          icon: 'Megaphone',
          title: 'Social Media Management',
          desc: 'Strategic social media presence across Instagram, Facebook, and LinkedIn. Content calendars, community management, and paid promotion — all designed for the Panama market.',
        },
        {
          icon: 'MousePointerClick',
          title: 'Conversion Optimization',
          desc: 'Your website gets traffic but no leads? We analyze user behavior, fix conversion bottlenecks, and turn your website into a lead generation machine with forms, WhatsApp integration, and clear CTAs.',
        },
      ],
    },
    stats: {
      label: 'The Opportunity',
      h2: 'The Numbers Don\'t Lie',
      items: [
        {
          number: '210',
          label: 'monthly searches for "marketing digital en panama"',
          desc: 'People are actively looking for digital marketing help. The question is: will they find you or your competitor?',
        },
        {
          number: '87%',
          label: 'of Panamanians search Google before buying',
          desc: 'If your business doesn\'t show up on Google, you\'re invisible to the majority of potential clients.',
        },
        {
          number: '3x',
          label: 'more leads with a well-executed digital strategy',
          desc: 'Businesses that invest in a structured digital marketing plan see 3x more qualified leads than those relying on referrals alone.',
        },
      ],
    },
    faq: {
      label: 'FAQ',
      h2: 'Frequently Asked Questions',
      items: [
        {
          q: 'How much does digital marketing cost in Panama?',
          a: 'It depends on scope. A basic package with SEO + social media management starts around $1,500/month. Google Ads management starts at $800/month plus ad spend. We tailor packages to your goals and budget — no cookie-cutter plans.',
        },
        {
          q: 'How long before I see results from digital marketing?',
          a: 'Paid ads (Google Ads) can generate leads within the first week. SEO and content marketing typically show meaningful results in 3-6 months. Social media growth is gradual but compounds over time. We set clear expectations upfront.',
        },
        {
          q: 'Do you work with businesses outside Panama City?',
          a: 'Yes. We work with businesses across Panama — David, Santiago, Chitre, Colon, and beyond. Digital marketing works the same way regardless of location, and local SEO is even more impactful in smaller cities where competition is lower.',
        },
        {
          q: 'What makes you different from other marketing agencies in Panama?',
          a: 'We focus on results, not vanity metrics. We don\'t just post on social media and send you a report — we build systems that generate measurable leads and revenue. We understand the Panama market, speak Spanish, and design strategies for local buying behavior.',
        },
      ],
    },
    cta: {
      h2: 'Ready to Grow Your Business Online?',
      sub: 'Take our free 3-minute diagnostic to discover where your digital marketing gaps are — and what to fix first.',
      button: 'Start Free Diagnostic',
    },
  },
  es: {
    meta: {
      title: 'Marketing Digital en Panam\u00e1 | Agencia de Marketing Digital | Agency Level 5',
      description:
        'Agencia de marketing digital en Panam\u00e1. SEO local, Google Ads, redes sociales y marketing de contenidos dise\u00f1ado para el mercado paname\u00f1o. Resultados medibles.',
    },
    hero: {
      h1: 'Marketing Digital en Panam\u00e1',
      sub: 'Ayudamos a empresas en Panam\u00e1 a crecer con estrategias de marketing digital construidas para este mercado \u2014 no copiadas de Estados Unidos. Conocimiento local, resultados medibles, leads reales.',
    },
    problem: {
      label: 'El Problema',
      h2: 'Por Qu\u00e9 la Mayor\u00eda de las Empresas en Panam\u00e1 Luchan con el Marketing Digital',
      points: [
        {
          icon: 'Share2',
          title: 'Dependen Solo de Referidos e Instagram',
          desc: 'El boca a boca te trajo hasta aqu\u00ed, pero no escala. Publicar en Instagram sin estrategia no es marketing digital \u2014 es esperar lo mejor. Necesitas un sistema que genere leads consistentemente, no solo likes.',
        },
        {
          icon: 'Eye',
          title: 'Sin Medici\u00f3n ni Seguimiento del ROI',
          desc: 'Est\u00e1s gastando dinero en anuncios y redes sociales, pero no sabes qu\u00e9 canal realmente trae clientes. Sin medici\u00f3n, est\u00e1s volando a ciegas \u2014 y probablemente desperdiciando al menos un 40% de tu presupuesto.',
        },
        {
          icon: 'Users',
          title: 'Agencias que No Entienden Panam\u00e1',
          desc: 'La mayor\u00eda de las agencias aplican estrategias de EE.UU. o Europa al mercado paname\u00f1o. No entienden el comportamiento de b\u00fasqueda local, la comunicaci\u00f3n centrada en WhatsApp, ni que tus clientes hablan espa\u00f1ol y esperan experiencias en espa\u00f1ol.',
        },
      ],
    },
    services: {
      label: 'Lo Que Hacemos',
      h2: 'Servicios de Marketing Digital para Empresas en Panam\u00e1',
      items: [
        {
          icon: 'Search',
          title: 'SEO Local',
          desc: 'Posici\u00f3nate en Google cuando personas en Ciudad de Panam\u00e1, David o Chitr\u00e9 buscan lo que haces. Optimizaci\u00f3n de Google Business Profile, citaciones locales y contenido en espa\u00f1ol que realmente rankea.',
        },
        {
          icon: 'Target',
          title: 'Gesti\u00f3n de Google Ads',
          desc: 'Campa\u00f1as dirigidas al mercado paname\u00f1o. Gestionamos tu presupuesto, escribimos anuncios en espa\u00f1ol y optimizamos para conversiones \u2014 no solo clics. Obtienes leads, no m\u00e9tricas de vanidad.',
        },
        {
          icon: 'PenTool',
          title: 'Marketing de Contenidos',
          desc: 'Art\u00edculos de blog, landing pages y contenido que te posiciona como autoridad en tu industria en Panam\u00e1. Escrito en espa\u00f1ol primero, optimizado para b\u00fasqueda, dise\u00f1ado para convertir visitantes en clientes.',
        },
        {
          icon: 'Megaphone',
          title: 'Gesti\u00f3n de Redes Sociales',
          desc: 'Presencia estrat\u00e9gica en Instagram, Facebook y LinkedIn. Calendarios de contenido, gesti\u00f3n de comunidad y promoci\u00f3n pagada \u2014 todo dise\u00f1ado para el mercado de Panam\u00e1.',
        },
        {
          icon: 'MousePointerClick',
          title: 'Optimizaci\u00f3n de Conversiones',
          desc: '\u00bfTu sitio web recibe tr\u00e1fico pero no genera leads? Analizamos el comportamiento del usuario, arreglamos los cuellos de botella y convertimos tu web en una m\u00e1quina de generaci\u00f3n de leads con formularios, integraci\u00f3n de WhatsApp y CTAs claros.',
        },
      ],
    },
    stats: {
      label: 'La Oportunidad',
      h2: 'Los N\u00fameros No Mienten',
      items: [
        {
          number: '210',
          label: 'b\u00fasquedas mensuales de \u201cmarketing digital en panama\u201d',
          desc: 'Las personas est\u00e1n buscando activamente ayuda con marketing digital. La pregunta es: \u00bfte encontrar\u00e1n a ti o a tu competidor?',
        },
        {
          number: '87%',
          label: 'de paname\u00f1os buscan en Google antes de comprar',
          desc: 'Si tu negocio no aparece en Google, eres invisible para la mayor\u00eda de clientes potenciales.',
        },
        {
          number: '3x',
          label: 'm\u00e1s leads con una estrategia digital bien ejecutada',
          desc: 'Las empresas que invierten en un plan de marketing digital estructurado obtienen 3 veces m\u00e1s leads calificados que aquellas que dependen solo de referidos.',
        },
      ],
    },
    faq: {
      label: 'Preguntas Frecuentes',
      h2: 'Preguntas Frecuentes sobre Marketing Digital en Panam\u00e1',
      items: [
        {
          q: '\u00bfCu\u00e1nto cuesta el marketing digital en Panam\u00e1?',
          a: 'Depende del alcance. Un paquete b\u00e1sico con SEO + gesti\u00f3n de redes sociales comienza alrededor de $1,500/mes. La gesti\u00f3n de Google Ads comienza en $800/mes m\u00e1s el gasto en anuncios. Adaptamos los paquetes a tus objetivos y presupuesto \u2014 sin planes gen\u00e9ricos.',
        },
        {
          q: '\u00bfCu\u00e1nto tiempo tarda en verse resultados?',
          a: 'Los anuncios pagados (Google Ads) pueden generar leads dentro de la primera semana. El SEO y el marketing de contenidos muestran resultados significativos en 3-6 meses. El crecimiento en redes sociales es gradual pero se acumula con el tiempo. Establecemos expectativas claras desde el inicio.',
        },
        {
          q: '\u00bfTrabajan con empresas fuera de Ciudad de Panam\u00e1?',
          a: 'S\u00ed. Trabajamos con empresas en todo Panam\u00e1 \u2014 David, Santiago, Chitr\u00e9, Col\u00f3n y m\u00e1s. El marketing digital funciona igual sin importar la ubicaci\u00f3n, y el SEO local es a\u00fan m\u00e1s efectivo en ciudades m\u00e1s peque\u00f1as donde la competencia es menor.',
        },
        {
          q: '\u00bfQu\u00e9 los diferencia de otras agencias de marketing en Panam\u00e1?',
          a: 'Nos enfocamos en resultados, no en m\u00e9tricas de vanidad. No solo publicamos en redes sociales y enviamos un reporte \u2014 construimos sistemas que generan leads y revenue medibles. Entendemos el mercado de Panam\u00e1, hablamos espa\u00f1ol y dise\u00f1amos estrategias para el comportamiento de compra local.',
        },
      ],
    },
    cta: {
      h2: '\u00bfListo para Hacer Crecer tu Negocio en L\u00ednea?',
      sub: 'Toma nuestro diagn\u00f3stico gratuito de 3 minutos para descubrir d\u00f3nde est\u00e1n tus brechas de marketing digital \u2014 y qu\u00e9 arreglar primero.',
      button: 'Iniciar Diagn\u00f3stico Gratis',
    },
  },
} as const;

/* ── Icon mapping helper ── */

const iconMap = {
  Search,
  Target,
  PenTool,
  Megaphone,
  MousePointerClick,
  Share2,
  Eye,
  Users,
  TrendingUp,
  BarChart3,
  MapPin,
  HelpCircle,
} as const;

function getIcon(name: string) {
  return iconMap[name as keyof typeof iconMap] || Megaphone;
}

/* ── Schemas ── */

function generateMarketingServiceSchema(locale: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name:
      locale === 'es'
        ? 'Marketing Digital en Panam\u00e1'
        : 'Digital Marketing in Panama',
    description:
      locale === 'es'
        ? 'Servicios de marketing digital para empresas en Panam\u00e1: SEO local, Google Ads, redes sociales, marketing de contenidos y optimizaci\u00f3n de conversiones.'
        : 'Digital marketing services for businesses in Panama: local SEO, Google Ads, social media, content marketing, and conversion optimization.',
    provider: {
      '@type': 'Organization',
      name: 'Agency Level 5',
      url: 'https://agencylevel5.com',
    },
    url: `https://agencylevel5.com/${locale}/panama/marketing-digital`,
    serviceType: 'Digital Marketing',
    areaServed: {
      '@type': 'Country',
      name: 'Panama',
      sameAs: 'https://en.wikipedia.org/wiki/Panama',
    },
    availableLanguage: ['Spanish', 'English'],
  };
}

function generateMarketingFAQSchema(locale: string) {
  const t = content[locale as keyof typeof content] || content.en;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

/* ── Metadata ── */

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = content[locale as keyof typeof content] || content.en;

  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: generateAlternates('/panama/marketing-digital', locale),
  };
}

/* ── Page ── */

export default async function MarketingDigitalPanamaPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = content[locale as keyof typeof content] || content.en;
  const serviceSchema = generateMarketingServiceSchema(locale);
  const faqSchema = generateMarketingFAQSchema(locale);

  return (
    <div className="min-h-screen pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-cyan/5 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-16 sm:py-24">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-accent-cyan mb-4">
            <MapPin className="h-3 w-3" /> Panam&aacute;
          </span>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {t.hero.h1}
          </h1>
          <p className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-3xl">
            {t.hero.sub}
          </p>
        </div>
      </section>

      {/* ── Problem ── */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.15em] text-accent-amber mb-4">
          {t.problem.label}
        </span>
        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold tracking-tight mb-12">
          {t.problem.h2}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.problem.points.map((point, i) => {
            const Icon = getIcon(point.icon);
            return (
              <div
                key={i}
                className="rounded-2xl border border-border-subtle bg-bg-card/50 p-8 transition-all hover:border-accent-amber/20"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-amber/10 mb-5">
                  <Icon className="h-6 w-6 text-accent-amber" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold mb-3">
                  {point.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {point.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Services ── */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.15em] text-accent-violet mb-4">
          {t.services.label}
        </span>
        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold tracking-tight mb-12">
          {t.services.h2}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((item, i) => {
            const Icon = getIcon(item.icon);
            return (
              <div
                key={i}
                className="rounded-2xl border border-border-subtle bg-bg-card/50 p-8 transition-all hover:border-accent-violet/20 hover:bg-bg-card"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-violet/10 mb-5">
                  <Icon className="h-6 w-6 text-accent-violet" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.15em] text-accent-cyan mb-4">
          {t.stats.label}
        </span>
        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold tracking-tight mb-12">
          {t.stats.h2}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.stats.items.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border-subtle bg-bg-card/50 p-8 transition-all hover:border-accent-cyan/20 text-center"
            >
              <div className="font-[family-name:var(--font-display)] text-5xl font-bold text-accent-cyan mb-3">
                {item.number}
              </div>
              <p className="text-sm font-semibold mb-3">{item.label}</p>
              <p className="text-xs text-text-secondary leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.15em] text-accent-amber mb-4">
          {t.faq.label}
        </span>
        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold tracking-tight mb-12">
          {t.faq.h2}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.faq.items.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border-subtle bg-bg-card/50 p-8 transition-all hover:border-accent-amber/20"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-amber/10 shrink-0 mt-0.5">
                  <HelpCircle className="h-4 w-4 text-accent-amber" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-base font-bold mb-3">
                    {item.q}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <div className="rounded-2xl border border-accent-violet/20 bg-gradient-to-br from-accent-violet/5 to-accent-cyan/5 p-8 sm:p-16 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            {t.cta.h2}
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            {t.cta.sub}
          </p>
          <Link
            href="/diagnostic"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent-violet to-accent-purple px-8 py-4 text-sm font-bold text-white transition-all hover:shadow-[0_0_30px_rgba(124,58,237,0.3)] hover:scale-105"
          >
            {t.cta.button}{' '}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
