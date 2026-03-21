import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import {
  ArrowRight,
  MapPin,
  Monitor,
  Smartphone,
  ShoppingCart,
  Languages,
  Layers,
  Search,
  Palette,
  Code2,
  Rocket,
  HelpCircle,
  AlertTriangle,
  Copy,
  MousePointerClick,
} from 'lucide-react';
import { generateAlternates } from '@/lib/seo';

type Props = { params: Promise<{ locale: string }> };

/* ── Bilingual content (hardcoded, no message files) ── */

const content = {
  en: {
    meta: {
      title: 'Web Design in Panama | Professional Web Development | Agency Level 5',
      description:
        'Professional web design and development for businesses in Panama. Smart websites, e-commerce, landing pages, and bilingual sites. Mobile-first, conversion-optimized.',
    },
    hero: {
      h1: 'Web Design in Panama',
      sub: 'We build professional websites for Panama businesses that actually generate leads and sales — not just digital brochures that sit there looking pretty.',
    },
    problem: {
      label: 'The Problem',
      h2: 'Why Most Panama Business Websites Don\'t Work',
      points: [
        {
          icon: 'AlertTriangle',
          title: 'Outdated or Non-Existent Websites',
          desc: 'Most service businesses in Panama either have no website at all or have one built 5+ years ago that looks outdated on mobile. Your website is your first impression — and right now it\'s costing you clients.',
        },
        {
          icon: 'Copy',
          title: 'Template Websites That All Look the Same',
          desc: 'Cheap template sites from Wix or GoDaddy make every business look identical. Your competitor has the same layout, the same stock photos, the same generic copy. There\'s nothing to differentiate you.',
        },
        {
          icon: 'MousePointerClick',
          title: 'Websites That Don\'t Generate Leads',
          desc: 'A beautiful website means nothing if it doesn\'t convert visitors into clients. Most Panama business sites are digital brochures — no forms, no chat, no WhatsApp integration, no tracking. Zero lead generation.',
        },
      ],
    },
    services: {
      label: 'What We Build',
      h2: 'Websites That Work as Hard as You Do',
      items: [
        {
          icon: 'Monitor',
          title: 'Smart Websites',
          desc: 'Conversion-optimized websites with built-in forms, WhatsApp chat, booking systems, and analytics. Every page is designed to turn visitors into leads. Fast, modern, and built to grow with your business.',
        },
        {
          icon: 'ShoppingCart',
          title: 'E-Commerce',
          desc: 'Online stores that work for the Panamanian market. Payment integration with local methods, shipping calculators, inventory management, and a checkout flow optimized for conversions.',
        },
        {
          icon: 'Layers',
          title: 'Landing Pages',
          desc: 'High-converting landing pages for specific campaigns, services, or promotions. One page, one goal, maximum conversion. Perfect for Google Ads or social media campaigns.',
        },
        {
          icon: 'Languages',
          title: 'Bilingual Sites',
          desc: 'Spanish and English websites built properly — not auto-translated. Each language gets its own content, SEO, and user experience. Essential for Panama businesses serving both local and international clients.',
        },
        {
          icon: 'Smartphone',
          title: 'Mobile-First Design',
          desc: 'Over 70% of your visitors are on their phone. We design for mobile first, then scale up to desktop. Fast load times, touch-friendly navigation, and a seamless experience on any device.',
        },
      ],
    },
    process: {
      label: 'Our Process',
      h2: 'From Idea to Launch in 4 Steps',
      steps: [
        {
          icon: 'Search',
          step: '01',
          title: 'Discovery',
          desc: 'We learn your business, your clients, your competitors, and your goals. We audit your current online presence and identify exactly what your website needs to accomplish.',
        },
        {
          icon: 'Palette',
          step: '02',
          title: 'Design',
          desc: 'We create a custom design that reflects your brand, speaks to your audience, and is built for conversions. You review and approve before we write a single line of code.',
        },
        {
          icon: 'Code2',
          step: '03',
          title: 'Development',
          desc: 'We build your site with clean, fast, modern technology. SEO optimized from day one. Mobile-responsive. Integrated with your CRM, WhatsApp, and analytics tools.',
        },
        {
          icon: 'Rocket',
          step: '04',
          title: 'Launch & Optimize',
          desc: 'We launch your site, set up tracking, and monitor performance. We continue optimizing based on real data — improving conversion rates, load times, and search rankings.',
        },
      ],
    },
    faq: {
      label: 'FAQ',
      h2: 'Frequently Asked Questions',
      items: [
        {
          q: 'How much does a website cost in Panama?',
          a: 'A professional smart website starts at $4,000. E-commerce sites start at $6,000. Landing pages start at $1,500. Every project is custom-scoped based on your needs — we don\'t use templates or cookie-cutter pricing.',
        },
        {
          q: 'How long does it take to build a website?',
          a: 'A typical smart website takes 4-6 weeks from kickoff to launch. E-commerce sites take 6-8 weeks. Landing pages can be done in 1-2 weeks. Timelines depend on content readiness and feedback speed on your end.',
        },
        {
          q: 'What\'s included in the price?',
          a: 'Design, development, mobile optimization, SEO setup, WhatsApp integration, contact forms, analytics setup, and training on how to use your site. We also include 30 days of post-launch support for bug fixes and adjustments.',
        },
        {
          q: 'Do I need to provide content and photos?',
          a: 'We handle everything. We write the copy, source professional photography, and create all the content. You just need to tell us about your business, your services, and your clients. We take it from there.',
        },
      ],
    },
    cta: {
      h2: 'Ready for a Website That Actually Works?',
      sub: 'Take our free 3-minute diagnostic to see where your current online presence falls short — and what a smart website could do for your business.',
      button: 'Start Free Diagnostic',
    },
  },
  es: {
    meta: {
      title: 'Dise\u00f1o de P\u00e1ginas Web en Panam\u00e1 | Desarrollo Web Profesional | Agency Level 5',
      description:
        'Dise\u00f1o y desarrollo web profesional para empresas en Panam\u00e1. Sitios web inteligentes, e-commerce, landing pages y sitios biling\u00fces. Mobile-first, optimizado para conversiones.',
    },
    hero: {
      h1: 'Dise\u00f1o de P\u00e1ginas Web en Panam\u00e1',
      sub: 'Construimos sitios web profesionales para empresas en Panam\u00e1 que realmente generan leads y ventas \u2014 no solo folletos digitales que se ven bonitos.',
    },
    problem: {
      label: 'El Problema',
      h2: 'Por Qu\u00e9 la Mayor\u00eda de los Sitios Web de Empresas en Panam\u00e1 No Funcionan',
      points: [
        {
          icon: 'AlertTriangle',
          title: 'Sitios Web Desactualizados o Inexistentes',
          desc: 'La mayor\u00eda de las empresas de servicios en Panam\u00e1 no tienen sitio web o tienen uno hecho hace m\u00e1s de 5 a\u00f1os que se ve mal en m\u00f3vil. Tu sitio web es tu primera impresi\u00f3n \u2014 y ahora mismo te est\u00e1 costando clientes.',
        },
        {
          icon: 'Copy',
          title: 'Plantillas que Se Ven Todas Iguales',
          desc: 'Los sitios baratos de Wix o GoDaddy hacen que todos los negocios se vean id\u00e9nticos. Tu competidor tiene el mismo layout, las mismas fotos de stock, el mismo texto gen\u00e9rico. No hay nada que te diferencie.',
        },
        {
          icon: 'MousePointerClick',
          title: 'Sitios Web que No Generan Leads',
          desc: 'Un sitio web bonito no sirve si no convierte visitantes en clientes. La mayor\u00eda de los sitios web de empresas en Panam\u00e1 son folletos digitales \u2014 sin formularios, sin chat, sin WhatsApp, sin tracking. Cero generaci\u00f3n de leads.',
        },
      ],
    },
    services: {
      label: 'Lo Que Construimos',
      h2: 'Sitios Web que Trabajan Tan Duro Como T\u00fa',
      items: [
        {
          icon: 'Monitor',
          title: 'Sitios Web Inteligentes',
          desc: 'Sitios web optimizados para conversi\u00f3n con formularios, chat de WhatsApp, sistemas de reservas y anal\u00edticas integradas. Cada p\u00e1gina est\u00e1 dise\u00f1ada para convertir visitantes en leads. R\u00e1pidos, modernos y hechos para crecer con tu negocio.',
        },
        {
          icon: 'ShoppingCart',
          title: 'E-Commerce',
          desc: 'Tiendas en l\u00ednea que funcionan para el mercado paname\u00f1o. Integraci\u00f3n de pagos con m\u00e9todos locales, calculadoras de env\u00edo, gesti\u00f3n de inventario y un flujo de compra optimizado para conversiones.',
        },
        {
          icon: 'Layers',
          title: 'Landing Pages',
          desc: 'P\u00e1ginas de aterrizaje de alta conversi\u00f3n para campa\u00f1as, servicios o promociones espec\u00edficas. Una p\u00e1gina, un objetivo, m\u00e1xima conversi\u00f3n. Perfectas para campa\u00f1as de Google Ads o redes sociales.',
        },
        {
          icon: 'Languages',
          title: 'Sitios Biling\u00fces',
          desc: 'Sitios web en espa\u00f1ol e ingl\u00e9s hechos correctamente \u2014 no auto-traducidos. Cada idioma tiene su propio contenido, SEO y experiencia de usuario. Esencial para empresas en Panam\u00e1 que atienden clientes locales e internacionales.',
        },
        {
          icon: 'Smartphone',
          title: 'Dise\u00f1o Mobile-First',
          desc: 'M\u00e1s del 70% de tus visitantes est\u00e1n en su tel\u00e9fono. Dise\u00f1amos primero para m\u00f3vil y luego escalamos a escritorio. Tiempos de carga r\u00e1pidos, navegaci\u00f3n t\u00e1ctil y una experiencia fluida en cualquier dispositivo.',
        },
      ],
    },
    process: {
      label: 'Nuestro Proceso',
      h2: 'De la Idea al Lanzamiento en 4 Pasos',
      steps: [
        {
          icon: 'Search',
          step: '01',
          title: 'Descubrimiento',
          desc: 'Conocemos tu negocio, tus clientes, tus competidores y tus objetivos. Auditamos tu presencia online actual e identificamos exactamente qu\u00e9 necesita lograr tu sitio web.',
        },
        {
          icon: 'Palette',
          step: '02',
          title: 'Dise\u00f1o',
          desc: 'Creamos un dise\u00f1o personalizado que refleja tu marca, habla a tu audiencia y est\u00e1 construido para conversiones. T\u00fa revisas y apruebas antes de que escribamos una sola l\u00ednea de c\u00f3digo.',
        },
        {
          icon: 'Code2',
          step: '03',
          title: 'Desarrollo',
          desc: 'Construimos tu sitio con tecnolog\u00eda limpia, r\u00e1pida y moderna. SEO optimizado desde el d\u00eda uno. Responsive en m\u00f3vil. Integrado con tu CRM, WhatsApp y herramientas de anal\u00edticas.',
        },
        {
          icon: 'Rocket',
          step: '04',
          title: 'Lanzamiento y Optimizaci\u00f3n',
          desc: 'Lanzamos tu sitio, configuramos el tracking y monitoreamos el rendimiento. Continuamos optimizando basados en datos reales \u2014 mejorando tasas de conversi\u00f3n, tiempos de carga y posiciones en b\u00fasqueda.',
        },
      ],
    },
    faq: {
      label: 'Preguntas Frecuentes',
      h2: 'Preguntas Frecuentes sobre Dise\u00f1o Web en Panam\u00e1',
      items: [
        {
          q: '\u00bfCu\u00e1nto cuesta un sitio web en Panam\u00e1?',
          a: 'Un sitio web inteligente profesional comienza en $4,000. Los sitios de e-commerce comienzan en $6,000. Las landing pages comienzan en $1,500. Cada proyecto se cotiza de forma personalizada seg\u00fan tus necesidades \u2014 no usamos plantillas ni precios gen\u00e9ricos.',
        },
        {
          q: '\u00bfCu\u00e1nto tiempo toma construir un sitio web?',
          a: 'Un sitio web inteligente t\u00edpico toma 4-6 semanas desde el inicio hasta el lanzamiento. Los sitios de e-commerce toman 6-8 semanas. Las landing pages se pueden hacer en 1-2 semanas. Los tiempos dependen de la rapidez con que proporciones contenido y feedback.',
        },
        {
          q: '\u00bfQu\u00e9 incluye el precio?',
          a: 'Dise\u00f1o, desarrollo, optimizaci\u00f3n m\u00f3vil, configuraci\u00f3n de SEO, integraci\u00f3n de WhatsApp, formularios de contacto, configuraci\u00f3n de anal\u00edticas y capacitaci\u00f3n sobre c\u00f3mo usar tu sitio. Tambi\u00e9n incluimos 30 d\u00edas de soporte post-lanzamiento para correcciones y ajustes.',
        },
        {
          q: '\u00bfNecesito proveer contenido y fotos?',
          a: 'Nosotros nos encargamos de todo. Escribimos los textos, conseguimos fotograf\u00eda profesional y creamos todo el contenido. Solo necesitas contarnos sobre tu negocio, tus servicios y tus clientes. Nosotros nos encargamos del resto.',
        },
      ],
    },
    cta: {
      h2: '\u00bfListo para un Sitio Web que Realmente Funcione?',
      sub: 'Toma nuestro diagn\u00f3stico gratuito de 3 minutos para ver d\u00f3nde falla tu presencia online actual \u2014 y lo que un sitio web inteligente podr\u00eda hacer por tu negocio.',
      button: 'Iniciar Diagn\u00f3stico Gratis',
    },
  },
} as const;

/* ── Icon mapping helper ── */

const iconMap = {
  Monitor,
  Smartphone,
  ShoppingCart,
  Languages,
  Layers,
  Search,
  Palette,
  Code2,
  Rocket,
  AlertTriangle,
  Copy,
  MousePointerClick,
  MapPin,
  HelpCircle,
} as const;

function getIcon(name: string) {
  return iconMap[name as keyof typeof iconMap] || Monitor;
}

/* ── Schemas ── */

function generateWebDesignServiceSchema(locale: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name:
      locale === 'es'
        ? 'Dise\u00f1o de P\u00e1ginas Web en Panam\u00e1'
        : 'Web Design in Panama',
    description:
      locale === 'es'
        ? 'Dise\u00f1o y desarrollo web profesional para empresas en Panam\u00e1: sitios web inteligentes, e-commerce, landing pages y sitios biling\u00fces.'
        : 'Professional web design and development for businesses in Panama: smart websites, e-commerce, landing pages, and bilingual sites.',
    provider: {
      '@type': 'Organization',
      name: 'Agency Level 5',
      url: 'https://agencylevel5.com',
    },
    url: `https://agencylevel5.com/${locale}/panama/diseno-web`,
    serviceType: 'Web Design & Development',
    areaServed: {
      '@type': 'Country',
      name: 'Panama',
      sameAs: 'https://en.wikipedia.org/wiki/Panama',
    },
    availableLanguage: ['Spanish', 'English'],
  };
}

function generateWebDesignFAQSchema(locale: string) {
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
    alternates: generateAlternates('/panama/diseno-web', locale),
  };
}

/* ── Page ── */

export default async function DisenoWebPanamaPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = content[locale as keyof typeof content] || content.en;
  const serviceSchema = generateWebDesignServiceSchema(locale);
  const faqSchema = generateWebDesignFAQSchema(locale);

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

      {/* ── What We Build ── */}
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

      {/* ── Process ── */}
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
