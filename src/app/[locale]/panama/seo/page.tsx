import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import {
  ArrowRight,
  MapPin,
  Search,
  TrendingUp,
  Globe,
  FileText,
  Link2,
  MapPinned,
  BarChart3,
  Settings2,
  Target,
  Zap,
  HelpCircle,
  EyeOff,
  DollarSign,
  Store,
} from 'lucide-react';
import { generateAlternates } from '@/lib/seo';

type Props = { params: Promise<{ locale: string }> };

/* ── Bilingual content (hardcoded, no message files) ── */

const content = {
  en: {
    meta: {
      title: 'SEO in Panama | Search Engine Optimization for Businesses | Agency Level 5',
      description:
        'SEO services for businesses in Panama. Local SEO, technical SEO, content optimization, link building, and Google Business Profile management. Get found on Google.',
    },
    hero: {
      h1: 'SEO in Panama: Search Engine Optimization for Your Business',
      sub: 'Your potential clients are searching Google right now. If they can\'t find you, they\'re finding your competitors. We fix that with SEO strategies built for the Panama market.',
    },
    problem: {
      label: 'The Problem',
      h2: 'Why Your Business Is Invisible on Google',
      points: [
        {
          icon: 'EyeOff',
          title: 'Your Competitors Show Up — You Don\'t',
          desc: 'When someone in Panama searches for your service, your competitors appear on the first page. You\'re buried on page 3, or worse, nowhere to be found. Every day you\'re not ranking is a day you\'re losing clients to someone else.',
        },
        {
          icon: 'DollarSign',
          title: 'You\'re Paying for Ads Instead of Building Organic Traffic',
          desc: 'Google Ads work, but the moment you stop paying, the leads stop. SEO builds a permanent asset — once you rank, you get free traffic every single day. It\'s the difference between renting and owning.',
        },
        {
          icon: 'Store',
          title: 'No Google Business Profile Optimized',
          desc: 'Your Google Business Profile is either incomplete, has wrong hours, no reviews strategy, or doesn\'t exist at all. For local businesses in Panama, this is the #1 missed opportunity — it\'s free real estate on Google.',
        },
      ],
    },
    services: {
      label: 'SEO Services',
      h2: 'Everything You Need to Rank on Google in Panama',
      items: [
        {
          icon: 'MapPinned',
          title: 'Local SEO',
          desc: 'Dominate Google Maps and local search results in your city. We optimize your Google Business Profile, build local citations, manage reviews, and ensure you show up when people near you search for your services.',
        },
        {
          icon: 'Settings2',
          title: 'Technical SEO',
          desc: 'Fast load times, clean code, mobile optimization, proper indexing, and structured data. We fix the technical foundation so Google can crawl, understand, and rank your site properly.',
        },
        {
          icon: 'FileText',
          title: 'Content SEO',
          desc: 'Strategic content creation in Spanish and English targeting keywords your clients actually search for. Blog posts, service pages, and landing pages optimized to rank and convert.',
        },
        {
          icon: 'Link2',
          title: 'Link Building',
          desc: 'High-quality backlinks from relevant Panama and Latin American directories, publications, and websites. We build authority the right way — no spam, no shortcuts, no penalties.',
        },
        {
          icon: 'Store',
          title: 'Google Business Profile Optimization',
          desc: 'Complete setup and ongoing optimization of your Google Business Profile. Photos, posts, Q&A, review management, and category optimization to maximize your visibility in local search.',
        },
      ],
    },
    process: {
      label: 'How SEO Works',
      h2: 'Our 4-Step SEO Process',
      steps: [
        {
          icon: 'Search',
          step: '01',
          title: 'Audit',
          desc: 'We analyze your current website, rankings, competitors, and search landscape in Panama. We identify exactly what\'s holding you back and where the biggest opportunities are.',
        },
        {
          icon: 'Target',
          step: '02',
          title: 'Strategy',
          desc: 'Based on the audit, we build a custom SEO strategy targeting the keywords that matter most for your business. We prioritize quick wins and long-term growth opportunities.',
        },
        {
          icon: 'Zap',
          step: '03',
          title: 'Execution',
          desc: 'We implement technical fixes, optimize existing content, create new pages, build backlinks, and optimize your Google Business Profile. Every action is tracked and measured.',
        },
        {
          icon: 'TrendingUp',
          step: '04',
          title: 'Results & Iteration',
          desc: 'Monthly reporting on rankings, traffic, and leads. We continuously refine the strategy based on what\'s working. SEO is a marathon, not a sprint — and we run it with you.',
        },
      ],
    },
    faq: {
      label: 'FAQ',
      h2: 'Frequently Asked Questions about SEO in Panama',
      items: [
        {
          q: 'How long does SEO take to show results in Panama?',
          a: 'For local SEO (Google Maps/Business Profile), you can see improvements in 4-8 weeks. For organic rankings on competitive keywords, expect 3-6 months for meaningful movement. Less competitive niches in Panama can rank faster since the local SEO landscape is still relatively uncrowded.',
        },
        {
          q: 'How much does SEO cost in Panama?',
          a: 'Our SEO packages start at $1,200/month for local businesses. This includes technical SEO, content optimization, Google Business Profile management, and monthly reporting. Enterprise and multi-location packages are custom-quoted based on scope.',
        },
        {
          q: 'Is SEO worth it for small businesses in Panama?',
          a: 'Absolutely. Panama\'s SEO landscape is still relatively uncrowded compared to the US or Europe. This means you can rank for valuable keywords with less effort and investment. A plumber in Panama City, for example, can dominate local search with a well-optimized Google Business Profile and a handful of targeted pages.',
        },
        {
          q: 'Do I need a new website for SEO to work?',
          a: 'Not necessarily. If your current website is functional and loads reasonably fast, we can optimize it. If it\'s severely outdated, slow, or not mobile-friendly, we may recommend a rebuild. We always start with an audit to give you honest advice on the best path forward.',
        },
      ],
    },
    cta: {
      h2: 'Ready to Get Found on Google?',
      sub: 'Take our free 3-minute diagnostic to see how your business currently performs online — and get a custom roadmap for improving your search rankings.',
      button: 'Start Free Diagnostic',
    },
  },
  es: {
    meta: {
      title: 'SEO en Panam\u00e1 | Posicionamiento Web para Negocios | Agency Level 5',
      description:
        'Servicios de SEO para empresas en Panam\u00e1. SEO local, SEO t\u00e9cnico, optimizaci\u00f3n de contenidos, link building y Google Business Profile. Aparece en Google.',
    },
    hero: {
      h1: 'SEO en Panam\u00e1: Posicionamiento Web para tu Negocio',
      sub: 'Tus clientes potenciales est\u00e1n buscando en Google ahora mismo. Si no te encuentran, est\u00e1n encontrando a tu competencia. Lo arreglamos con estrategias de SEO dise\u00f1adas para el mercado de Panam\u00e1.',
    },
    problem: {
      label: 'El Problema',
      h2: 'Por Qu\u00e9 tu Negocio Es Invisible en Google',
      points: [
        {
          icon: 'EyeOff',
          title: 'Tu Competencia Aparece \u2014 T\u00fa No',
          desc: 'Cuando alguien en Panam\u00e1 busca tu servicio, tus competidores aparecen en la primera p\u00e1gina. T\u00fa est\u00e1s enterrado en la p\u00e1gina 3, o peor, no apareces. Cada d\u00eda que no rankeas es un d\u00eda que pierdes clientes frente a otros.',
        },
        {
          icon: 'DollarSign',
          title: 'Pagas por Anuncios en Vez de Construir Tr\u00e1fico Org\u00e1nico',
          desc: 'Google Ads funciona, pero en el momento que dejas de pagar, los leads paran. El SEO construye un activo permanente \u2014 una vez que rankeas, recibes tr\u00e1fico gratis todos los d\u00edas. Es la diferencia entre alquilar y ser due\u00f1o.',
        },
        {
          icon: 'Store',
          title: 'Sin Google Business Profile Optimizado',
          desc: 'Tu perfil de Google Business est\u00e1 incompleto, tiene horarios incorrectos, no tiene estrategia de rese\u00f1as o simplemente no existe. Para negocios locales en Panam\u00e1, esta es la oportunidad #1 desperdiciada \u2014 es espacio gratuito en Google.',
        },
      ],
    },
    services: {
      label: 'Servicios de SEO',
      h2: 'Todo lo que Necesitas para Aparecer en Google en Panam\u00e1',
      items: [
        {
          icon: 'MapPinned',
          title: 'SEO Local',
          desc: 'Domina Google Maps y los resultados de b\u00fasqueda local en tu ciudad. Optimizamos tu Google Business Profile, construimos citaciones locales, gestionamos rese\u00f1as y aseguramos que aparezcas cuando personas cerca de ti busquen tus servicios.',
        },
        {
          icon: 'Settings2',
          title: 'SEO T\u00e9cnico',
          desc: 'Tiempos de carga r\u00e1pidos, c\u00f3digo limpio, optimizaci\u00f3n m\u00f3vil, indexaci\u00f3n correcta y datos estructurados. Arreglamos la base t\u00e9cnica para que Google pueda rastrear, entender y posicionar tu sitio correctamente.',
        },
        {
          icon: 'FileText',
          title: 'SEO de Contenidos',
          desc: 'Creaci\u00f3n estrat\u00e9gica de contenido en espa\u00f1ol e ingl\u00e9s enfocado en las palabras clave que tus clientes realmente buscan. Art\u00edculos de blog, p\u00e1ginas de servicios y landing pages optimizadas para rankear y convertir.',
        },
        {
          icon: 'Link2',
          title: 'Link Building',
          desc: 'Backlinks de alta calidad desde directorios, publicaciones y sitios web relevantes de Panam\u00e1 y Latinoam\u00e9rica. Construimos autoridad de la forma correcta \u2014 sin spam, sin atajos, sin penalizaciones.',
        },
        {
          icon: 'Store',
          title: 'Optimizaci\u00f3n de Google Business Profile',
          desc: 'Configuraci\u00f3n completa y optimizaci\u00f3n continua de tu perfil de Google Business. Fotos, publicaciones, preguntas y respuestas, gesti\u00f3n de rese\u00f1as y optimizaci\u00f3n de categor\u00edas para maximizar tu visibilidad en b\u00fasqueda local.',
        },
      ],
    },
    process: {
      label: 'C\u00f3mo Funciona el SEO',
      h2: 'Nuestro Proceso de SEO en 4 Pasos',
      steps: [
        {
          icon: 'Search',
          step: '01',
          title: 'Auditor\u00eda',
          desc: 'Analizamos tu sitio web actual, tus posiciones, tus competidores y el panorama de b\u00fasqueda en Panam\u00e1. Identificamos exactamente qu\u00e9 te frena y d\u00f3nde est\u00e1n las mayores oportunidades.',
        },
        {
          icon: 'Target',
          step: '02',
          title: 'Estrategia',
          desc: 'Basados en la auditor\u00eda, construimos una estrategia de SEO personalizada enfocada en las palabras clave m\u00e1s importantes para tu negocio. Priorizamos victorias r\u00e1pidas y oportunidades de crecimiento a largo plazo.',
        },
        {
          icon: 'Zap',
          step: '03',
          title: 'Ejecuci\u00f3n',
          desc: 'Implementamos correcciones t\u00e9cnicas, optimizamos contenido existente, creamos p\u00e1ginas nuevas, construimos backlinks y optimizamos tu Google Business Profile. Cada acci\u00f3n se rastrea y se mide.',
        },
        {
          icon: 'TrendingUp',
          step: '04',
          title: 'Resultados e Iteraci\u00f3n',
          desc: 'Reportes mensuales sobre posiciones, tr\u00e1fico y leads. Refinamos continuamente la estrategia basados en lo que funciona. El SEO es un marat\u00f3n, no un sprint \u2014 y lo corremos contigo.',
        },
      ],
    },
    faq: {
      label: 'Preguntas Frecuentes',
      h2: 'Preguntas Frecuentes sobre SEO en Panam\u00e1',
      items: [
        {
          q: '\u00bfCu\u00e1nto tiempo tarda el SEO en mostrar resultados en Panam\u00e1?',
          a: 'Para SEO local (Google Maps/Business Profile), puedes ver mejoras en 4-8 semanas. Para rankings org\u00e1nicos en keywords competitivas, espera 3-6 meses para movimiento significativo. Nichos menos competitivos en Panam\u00e1 pueden rankear m\u00e1s r\u00e1pido ya que el panorama de SEO local est\u00e1 relativamente sin explotar.',
        },
        {
          q: '\u00bfCu\u00e1nto cuesta el SEO en Panam\u00e1?',
          a: 'Nuestros paquetes de SEO comienzan en $1,200/mes para negocios locales. Esto incluye SEO t\u00e9cnico, optimizaci\u00f3n de contenido, gesti\u00f3n de Google Business Profile y reportes mensuales. Los paquetes enterprise y multi-ubicaci\u00f3n se cotizan de forma personalizada seg\u00fan el alcance.',
        },
        {
          q: '\u00bfVale la pena el SEO para peque\u00f1as empresas en Panam\u00e1?',
          a: 'Absolutamente. El panorama de SEO en Panam\u00e1 a\u00fan est\u00e1 relativamente sin explotar comparado con EE.UU. o Europa. Esto significa que puedes posicionarte para keywords valiosas con menos esfuerzo e inversi\u00f3n. Un plomero en Ciudad de Panam\u00e1, por ejemplo, puede dominar la b\u00fasqueda local con un Google Business Profile bien optimizado y unas pocas p\u00e1ginas enfocadas.',
        },
        {
          q: '\u00bfNecesito un sitio web nuevo para que el SEO funcione?',
          a: 'No necesariamente. Si tu sitio web actual es funcional y carga razonablemente r\u00e1pido, podemos optimizarlo. Si est\u00e1 muy desactualizado, es lento o no es amigable con m\u00f3vil, podr\u00edamos recomendar un redise\u00f1o. Siempre comenzamos con una auditor\u00eda para darte un consejo honesto sobre el mejor camino.',
        },
      ],
    },
    cta: {
      h2: '\u00bfListo para Aparecer en Google?',
      sub: 'Toma nuestro diagn\u00f3stico gratuito de 3 minutos para ver c\u00f3mo se desempe\u00f1a tu negocio actualmente en l\u00ednea \u2014 y obt\u00e9n una hoja de ruta personalizada para mejorar tus posiciones de b\u00fasqueda.',
      button: 'Iniciar Diagn\u00f3stico Gratis',
    },
  },
} as const;

/* ── Icon mapping helper ── */

const iconMap = {
  Search,
  TrendingUp,
  Globe,
  FileText,
  Link2,
  MapPinned,
  BarChart3,
  Settings2,
  Target,
  Zap,
  MapPin,
  HelpCircle,
  EyeOff,
  DollarSign,
  Store,
} as const;

function getIcon(name: string) {
  return iconMap[name as keyof typeof iconMap] || Search;
}

/* ── Schemas ── */

function generateSEOServiceSchema(locale: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name:
      locale === 'es'
        ? 'SEO en Panam\u00e1 \u2014 Posicionamiento Web'
        : 'SEO in Panama \u2014 Search Engine Optimization',
    description:
      locale === 'es'
        ? 'Servicios de SEO para empresas en Panam\u00e1: SEO local, SEO t\u00e9cnico, contenidos, link building y optimizaci\u00f3n de Google Business Profile.'
        : 'SEO services for businesses in Panama: local SEO, technical SEO, content, link building, and Google Business Profile optimization.',
    provider: {
      '@type': 'Organization',
      name: 'Agency Level 5',
      url: 'https://agencylevel5.com',
    },
    url: `https://agencylevel5.com/${locale}/panama/seo`,
    serviceType: 'Search Engine Optimization',
    areaServed: {
      '@type': 'Country',
      name: 'Panama',
      sameAs: 'https://en.wikipedia.org/wiki/Panama',
    },
    availableLanguage: ['Spanish', 'English'],
  };
}

function generateSEOFAQSchema(locale: string) {
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
    alternates: generateAlternates('/panama/seo', locale),
  };
}

/* ── Page ── */

export default async function SEOPanamaPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = content[locale as keyof typeof content] || content.en;
  const serviceSchema = generateSEOServiceSchema(locale);
  const faqSchema = generateSEOFAQSchema(locale);

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

      {/* ── SEO Services ── */}
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

      {/* ── How SEO Works ── */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.15em] text-accent-cyan mb-4">
          {t.process.label}
        </span>
        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold tracking-tight mb-12">
          {t.process.h2}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.process.steps.map((step, i) => {
            const Icon = getIcon(step.icon);
            return (
              <div
                key={i}
                className="rounded-2xl border border-border-subtle bg-bg-card/50 p-6 transition-all hover:border-accent-cyan/20 hover:bg-bg-card"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-cyan/10">
                    <Icon className="h-5 w-5 text-accent-cyan" />
                  </div>
                  <span className="font-[family-name:var(--font-display)] text-2xl font-bold text-accent-cyan/30">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-base font-bold mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
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
