import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import {
  ArrowRight,
  Zap,
  Rocket,
  Building,
  Plus,
  CheckCircle2,
  ChevronDown,
  DollarSign,
} from 'lucide-react';
import { generateAlternates, generateFAQSchema } from '@/lib/seo';

type Props = { params: Promise<{ locale: string }> };

/* -- Bilingual content (hardcoded, no message files) -- */

const content = {
  en: {
    meta: {
      title: 'Pricing — AI Automation Services | Agency Level 5',
      description:
        'Transparent pricing for AI chatbots, workflow automation, and smart websites. Projects start at $2,000. No hidden fees, no retainer traps.',
    },
    hero: {
      h1: 'Honest Pricing. No Surprises.',
      sub: 'We quote flat rates for defined scope. You know exactly what you\'re paying before we start.',
    },
    tiers: [
      {
        name: 'Starter',
        price: '$2,000 - $5,000',
        icon: 'Zap',
        popular: false,
        ideal: 'Small businesses with 1-2 specific automation needs',
        includes: '1 core automation OR 1 AI chatbot OR 1 landing page',
        timeline: '1-2 weeks',
        support: '14 days post-launch',
        examples: [
          'Speed-to-lead bot',
          'Appointment booking system',
          'Review request automation',
        ],
      },
      {
        name: 'Growth',
        price: '$5,000 - $12,000',
        icon: 'Rocket',
        popular: true,
        popularLabel: 'POPULAR',
        ideal: 'Businesses ready to systematize their operations',
        includes: 'Full pipeline setup + 2-3 automations + smart website OR chatbot',
        timeline: '3-4 weeks',
        support: '30 days post-launch',
        examples: [
          'Complete GHL setup',
          'Lead-to-close pipeline',
          'Multi-channel follow-up',
        ],
      },
      {
        name: 'Enterprise',
        price: '$12,000 - $20,000+',
        icon: 'Building',
        popular: false,
        ideal: 'Companies with complex operations needing full operational overhaul',
        includes: 'Operational audit + custom workflows + dashboards + training + all integrations',
        timeline: '4-6 weeks',
        support: '60 days post-launch + optional retainer',
        examples: [
          'Fractional COO engagement',
          'Multi-department automation',
          'WhatsApp-to-CRM ecosystem',
        ],
      },
    ],
    addOns: {
      label: 'Add-Ons',
      items: [
        { name: 'Ongoing managed service', price: '$497 - $2,500/month' },
        { name: 'Additional automation workflow', price: '$800 - $1,500' },
        { name: 'SEO content package (4 articles/month)', price: '$1,200/month' },
        { name: 'Training session (additional)', price: '$500/session' },
      ],
    },
    included: {
      label: 'What\'s Included in Every Project',
      items: [
        'Discovery call + scope document',
        'Custom-built (no templates)',
        'Full ownership (you own everything we build)',
        'Team training',
        'Post-launch support period',
        'Documentation',
      ],
    },
    faq: {
      label: 'Frequently Asked Questions',
      items: [
        {
          q: 'Do you charge hourly?',
          a: 'No. Flat rate, defined scope. We agree on what gets built and what it costs before we start. No timesheets, no surprises.',
        },
        {
          q: 'What if the project takes longer than expected?',
          a: 'Our risk, not yours. We quote to deliver. If something takes us longer to build, we absorb that cost. The price you agreed to is the price you pay.',
        },
        {
          q: 'Can I start small and expand later?',
          a: 'Yes. Most clients start with a Starter project to solve one specific problem. Once they see results, they upgrade to Growth for a full system. No pressure, no upsell traps.',
        },
        {
          q: 'Do you require long-term contracts?',
          a: 'No. Every engagement is project-based with a clear start and end. Ongoing managed service is optional and month-to-month. Cancel anytime.',
        },
        {
          q: 'What platforms do you work with?',
          a: 'GoHighLevel, Zapier, Make, OpenAI, Twilio, Stripe, HubSpot, custom APIs, and more. We pick the tools that fit your business — not the ones that pay us the highest commission.',
        },
      ],
    },
    tierLabels: {
      idealFor: 'Ideal for',
      includes: 'Includes',
      timeline: 'Timeline',
      support: 'Support',
      examples: 'Examples',
    },
    cta: {
      h2: 'Get Your Custom Quote',
      sub: 'Every project is scoped individually. Tell us what you need and we\'ll send you a clear proposal — scope, timeline, and exact price.',
      button: 'Contact Us',
    },
  },
  es: {
    meta: {
      title: 'Precios — Servicios de Automatización con IA | Agency Level 5',
      description:
        'Precios transparentes para chatbots con IA, automatización de flujos y sitios web inteligentes. Proyectos desde $2,000. Sin costos ocultos.',
    },
    hero: {
      h1: 'Precios Honestos. Sin Sorpresas.',
      sub: 'Cotizamos tarifas fijas por alcance definido. Sabes exactamente lo que pagas antes de empezar.',
    },
    tiers: [
      {
        name: 'Starter',
        price: '$2,000 - $5,000',
        icon: 'Zap',
        popular: false,
        ideal: 'Pequeñas empresas con 1-2 necesidades específicas de automatización',
        includes: '1 automatización principal O 1 chatbot con IA O 1 landing page',
        timeline: '1-2 semanas',
        support: '14 días post-lanzamiento',
        examples: [
          'Bot speed-to-lead',
          'Sistema de agendamiento',
          'Automatización de solicitud de reseñas',
        ],
      },
      {
        name: 'Growth',
        price: '$5,000 - $12,000',
        icon: 'Rocket',
        popular: true,
        popularLabel: 'POPULAR',
        ideal: 'Empresas listas para sistematizar sus operaciones',
        includes: 'Pipeline completo + 2-3 automatizaciones + sitio web inteligente O chatbot',
        timeline: '3-4 semanas',
        support: '30 días post-lanzamiento',
        examples: [
          'Configuración completa de GHL',
          'Pipeline lead-to-close',
          'Seguimiento multicanal',
        ],
      },
      {
        name: 'Enterprise',
        price: '$12,000 - $20,000+',
        icon: 'Building',
        popular: false,
        ideal: 'Empresas con operaciones complejas que necesitan una reestructuración operativa completa',
        includes: 'Auditoría operativa + workflows personalizados + dashboards + entrenamiento + todas las integraciones',
        timeline: '4-6 semanas',
        support: '60 días post-lanzamiento + retainer opcional',
        examples: [
          'Engagement de COO Fraccional',
          'Automatización multi-departamento',
          'Ecosistema WhatsApp-a-CRM',
        ],
      },
    ],
    addOns: {
      label: 'Complementos',
      items: [
        { name: 'Servicio administrado continuo', price: '$497 - $2,500/mes' },
        { name: 'Workflow de automatización adicional', price: '$800 - $1,500' },
        { name: 'Paquete de contenido SEO (4 artículos/mes)', price: '$1,200/mes' },
        { name: 'Sesión de entrenamiento (adicional)', price: '$500/sesión' },
      ],
    },
    included: {
      label: 'Qué Incluye Cada Proyecto',
      items: [
        'Llamada de descubrimiento + documento de alcance',
        'Construcción personalizada (sin templates)',
        'Propiedad completa (todo lo que construimos es tuyo)',
        'Entrenamiento del equipo',
        'Período de soporte post-lanzamiento',
        'Documentación',
      ],
    },
    faq: {
      label: 'Preguntas Frecuentes',
      items: [
        {
          q: '¿Cobran por hora?',
          a: 'No. Tarifa fija, alcance definido. Acordamos qué se construye y cuánto cuesta antes de empezar. Sin hojas de tiempo, sin sorpresas.',
        },
        {
          q: '¿Qué pasa si el proyecto toma más tiempo del esperado?',
          a: 'Nuestro riesgo, no el tuyo. Cotizamos para entregar. Si algo nos toma más tiempo de construir, absorbemos ese costo. El precio que acordaste es el precio que pagas.',
        },
        {
          q: '¿Puedo empezar pequeño y expandir después?',
          a: 'Sí. La mayoría de los clientes empiezan con un proyecto Starter para resolver un problema específico. Cuando ven resultados, pasan a Growth para un sistema completo. Sin presión, sin trampas de upsell.',
        },
        {
          q: '¿Requieren contratos a largo plazo?',
          a: 'No. Cada proyecto tiene un inicio y fin claros. El servicio administrado es opcional y mes a mes. Cancela cuando quieras.',
        },
        {
          q: '¿Con qué plataformas trabajan?',
          a: 'GoHighLevel, Zapier, Make, OpenAI, Twilio, Stripe, HubSpot, APIs personalizadas y más. Elegimos las herramientas que le sirven a tu negocio — no las que nos pagan la comisión más alta.',
        },
      ],
    },
    tierLabels: {
      idealFor: 'Ideal para',
      includes: 'Incluye',
      timeline: 'Cronograma',
      support: 'Soporte',
      examples: 'Ejemplos',
    },
    cta: {
      h2: 'Obtén Tu Cotización Personalizada',
      sub: 'Cada proyecto se define individualmente. Cuéntanos qué necesitas y te enviaremos una propuesta clara — alcance, cronograma y precio exacto.',
      button: 'Contáctanos',
    },
  },
} as const;

/* -- Icon mapping helper -- */

const iconMap = {
  Zap,
  Rocket,
  Building,
} as const;

function getIcon(name: string) {
  return iconMap[name as keyof typeof iconMap] || Zap;
}

/* -- Schema -- */

function generatePricingServiceSchema(locale: string) {
  const t = content[locale as keyof typeof content] || content.en;
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name:
      locale === 'es'
        ? 'Servicios de Automatización con IA'
        : 'AI Automation Services',
    description: t.meta.description,
    provider: {
      '@type': 'Organization',
      name: 'Agency Level 5',
      url: 'https://agencylevel5.com',
    },
    url: `https://agencylevel5.com/${locale}/pricing`,
    serviceType: 'AI Automation & Operational Consulting',
    areaServed: [
      { '@type': 'Place', name: 'United States' },
      { '@type': 'Place', name: 'Latin America' },
    ],
    offers: t.tiers.map((tier) => ({
      '@type': 'Offer',
      name: tier.name,
      description: tier.includes,
      price: tier.price,
      priceCurrency: 'USD',
    })),
  };
}

/* -- Metadata -- */

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = content[locale as keyof typeof content] || content.en;

  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: generateAlternates('/pricing', locale),
  };
}

/* -- Page -- */

export default async function PricingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = content[locale as keyof typeof content] || content.en;
  const serviceSchema = generatePricingServiceSchema(locale);
  const faqSchema = generateFAQSchema(
    t.faq.items.map((item) => ({ question: item.q, answer: item.a }))
  );

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

      {/* -- Hero -- */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-violet/5 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-accent-cyan mb-4">
            <DollarSign className="h-3 w-3" />
            {locale === 'es' ? 'Precios' : 'Pricing'}
          </span>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {t.hero.h1}
          </h1>
          <p className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-3xl">
            {t.hero.sub}
          </p>
        </div>
      </section>

      {/* -- Pricing Tiers -- */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {t.tiers.map((tier, i) => {
            const Icon = getIcon(tier.icon);
            const isPopular = tier.popular;

            return (
              <div
                key={i}
                className={`relative rounded-2xl border p-8 sm:p-10 transition-all ${
                  isPopular
                    ? 'border-accent-violet/40 bg-gradient-to-br from-accent-violet/10 to-accent-purple/5 shadow-[0_0_40px_rgba(124,58,237,0.1)]'
                    : 'border-border-subtle bg-bg-card/50 hover:border-accent-violet/20'
                }`}
              >
                {isPopular && 'popularLabel' in tier && (
                  <span className="absolute -top-3 left-8 inline-block rounded-full bg-gradient-to-r from-accent-violet to-accent-purple px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                    {tier.popularLabel}
                  </span>
                )}

                <div className={`flex h-12 w-12 items-center justify-center rounded-xl mb-5 ${
                  isPopular ? 'bg-accent-violet/20' : 'bg-accent-violet/10'
                }`}>
                  <Icon className={`h-6 w-6 ${isPopular ? 'text-accent-violet' : 'text-accent-cyan'}`} />
                </div>

                <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold mb-2">
                  {tier.name}
                </h3>
                <span className="block text-3xl sm:text-4xl font-bold font-[family-name:var(--font-display)] bg-gradient-to-r from-accent-violet to-accent-cyan bg-clip-text text-transparent mb-6">
                  {tier.price}
                </span>

                <div className="space-y-4 text-sm">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-text-muted">
                      {t.tierLabels.idealFor}
                    </span>
                    <p className="text-text-secondary mt-1">{tier.ideal}</p>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-text-muted">
                      {t.tierLabels.includes}
                    </span>
                    <p className="text-text-secondary mt-1">{tier.includes}</p>
                  </div>
                  <div className="flex gap-6">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-text-muted">
                        {t.tierLabels.timeline}
                      </span>
                      <p className="text-text-secondary mt-1">{tier.timeline}</p>
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-text-muted">
                        {t.tierLabels.support}
                      </span>
                      <p className="text-text-secondary mt-1">{tier.support}</p>
                    </div>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-text-muted">
                      {t.tierLabels.examples}
                    </span>
                    <ul className="mt-2 space-y-1">
                      {tier.examples.map((ex, ei) => (
                        <li key={ei} className="flex items-center gap-2 text-text-secondary">
                          <CheckCircle2 className="h-3.5 w-3.5 text-accent-cyan shrink-0" />
                          {ex}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* -- Add-Ons -- */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.15em] text-accent-amber mb-4">
          {t.addOns.label}
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.addOns.items.map((addon, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border-subtle bg-bg-card/50 p-6 transition-all hover:border-accent-amber/20"
            >
              <Plus className="h-5 w-5 text-accent-amber mb-3" />
              <p className="text-sm font-semibold text-text-primary mb-1">{addon.name}</p>
              <p className="text-sm font-bold text-accent-amber">{addon.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* -- What's Included in Every Project -- */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-2xl border border-accent-cyan/20 bg-gradient-to-br from-accent-cyan/5 to-accent-violet/5 p-8 sm:p-12">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.15em] text-accent-cyan mb-6">
            {t.included.label}
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.included.items.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-cyan shrink-0 mt-0.5" />
                <p className="text-text-secondary text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- FAQ -- */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.15em] text-accent-purple mb-4">
          {t.faq.label}
        </span>
        <div className="space-y-4">
          {t.faq.items.map((item, i) => (
            <details
              key={i}
              className="group rounded-2xl border border-border-subtle bg-bg-card/50 transition-all hover:border-accent-purple/20"
            >
              <summary className="flex cursor-pointer items-center justify-between p-6 sm:p-8 list-none [&::-webkit-details-marker]:hidden">
                <span className="font-[family-name:var(--font-display)] text-lg font-bold pr-4">
                  {item.q}
                </span>
                <ChevronDown className="h-5 w-5 text-text-muted shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6 sm:px-8 sm:pb-8 -mt-2">
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.a}
                </p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* -- CTA -- */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="rounded-2xl border border-accent-violet/20 bg-gradient-to-br from-accent-violet/5 to-accent-cyan/5 p-8 sm:p-16 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            {t.cta.h2}
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            {t.cta.sub}
          </p>
          <Link
            href="/contact"
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
