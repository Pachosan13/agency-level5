import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import {
  ArrowRight,
  Zap,
  GitBranch,
  Calendar,
  Star,
  BarChart3,
  AlertTriangle,
  Clock,
  Target,
  ShieldX,
  EyeOff,
} from 'lucide-react';
import { generateAlternates } from '@/lib/seo';

type Props = { params: Promise<{ locale: string }> };

/* ── Bilingual content (hardcoded, no message files) ── */

const content = {
  en: {
    meta: {
      title: 'GoHighLevel Done Right — Setup, Automation & Support | Agency Level 5',
      description:
        'Most GoHighLevel accounts use less than 10% of the platform. We set up pipelines, automations, follow-ups, and dashboards so your GHL actually works. Starting at $4,000.',
    },
    hero: {
      h1: 'GoHighLevel Done Right — Setup, Automation & Ongoing Support',
      sub: 'Most businesses pay for GoHighLevel and use 10% of it. We build the other 90% — pipelines, automations, follow-up sequences, and dashboards that actually move the needle.',
    },
    problems: {
      label: 'The Problem',
      h2: 'The 5 Mistakes Businesses Make with GoHighLevel',
      items: [
        {
          icon: 'AlertTriangle',
          title: 'DIY Setup, 10% Utilization',
          desc: 'You signed up, watched a few tutorials, and set up the basics. The other 90% of the platform sits untouched — calendars, workflows, pipelines, reputation management, all dormant.',
        },
        {
          icon: 'Clock',
          title: 'No Automated Follow-Up',
          desc: 'A lead comes in and... nothing happens for hours. No SMS, no email, no voicemail drop. By the time someone responds manually, the lead already called your competitor.',
        },
        {
          icon: 'Target',
          title: 'Pipeline Doesn\'t Match Your Sales Process',
          desc: 'The default pipeline stages don\'t reflect how your team actually sells. Deals get stuck, reps skip stages, and you have zero visibility into what\'s working.',
        },
        {
          icon: 'ShieldX',
          title: 'No Reputation Management',
          desc: 'You finish a job and never ask for a review. Or you ask manually, weeks later, when the client has already moved on. Your Google rating stays flat while competitors climb.',
        },
        {
          icon: 'EyeOff',
          title: 'No Reporting Dashboards',
          desc: 'You can\'t answer basic questions: How many leads this month? What\'s our close rate? Which source brings the best leads? Without dashboards, you\'re flying blind.',
        },
      ],
    },
    build: {
      label: 'What We Build',
      h2: 'Your GoHighLevel, Actually Working',
      items: [
        {
          icon: 'Zap',
          title: 'Speed-to-Lead Automation',
          desc: 'New lead comes in — SMS, email, and voicemail drop fire within 60 seconds. No human required. The fastest response wins the deal, and we make sure you\'re first.',
        },
        {
          icon: 'GitBranch',
          title: 'Pipeline & Workflow Setup',
          desc: 'Custom pipeline stages that match how your business actually operates. Auto-tagging, stage-based triggers, and task assignments so nothing falls through the cracks.',
        },
        {
          icon: 'Calendar',
          title: 'Appointment Booking System',
          desc: 'Calendar sync with Google or Outlook, automated confirmation and reminder sequences, no-show follow-ups, and round-robin distribution for teams.',
        },
        {
          icon: 'Star',
          title: 'Review & Reputation Engine',
          desc: 'After every completed job, an automated review request goes out. Happy clients get sent to Google. Unhappy ones get routed to your team privately. Your rating grows on autopilot.',
        },
        {
          icon: 'BarChart3',
          title: 'Reporting Dashboards',
          desc: 'Weekly performance reports delivered automatically. Lead count, source attribution, close rates, revenue by pipeline stage — everything your team needs to make decisions.',
        },
      ],
    },
    process: {
      label: 'How It Works',
      h2: 'From Audit to Live in 4 Weeks',
      steps: [
        {
          week: 'Week 1',
          title: 'Audit Your Current Setup',
          desc: 'We log into your GHL account, document what\'s configured (and what isn\'t), map your sales process, and identify the biggest gaps. You get a written report.',
        },
        {
          week: 'Weeks 2–3',
          title: 'Build & Configure',
          desc: 'We build pipelines, workflows, automations, calendars, and dashboards inside your account. Everything custom to your business — no templates, no generic setups.',
        },
        {
          week: 'Week 4',
          title: 'Train Your Team & Go Live',
          desc: 'We train your team on how to use the system. Screen recordings, live walkthroughs, and a reference guide. Then we flip the switch and monitor the first week live.',
        },
      ],
    },
    pricing: {
      label: 'Investment',
      h2: 'Straightforward Pricing',
      setup: '$4,000',
      setupLabel: 'One-time setup',
      setupDesc: 'Full audit, pipeline build, workflow automation, calendar setup, dashboard configuration, and team training.',
      managed: '$497/mo',
      managedLabel: 'Optional managed service',
      managedDesc: 'Ongoing optimization, new workflow builds, monthly performance reviews, and priority support.',
    },
    cta: {
      h2: 'Stop Paying for a Platform You\'re Not Using',
      sub: 'Book a call. We\'ll look at your GoHighLevel account and tell you exactly what\'s missing — no obligation.',
      button: 'Book a Call',
    },
  },
  es: {
    meta: {
      title: 'GoHighLevel Hecho Bien — Configuración, Automatización y Soporte | Agency Level 5',
      description:
        'La mayoría de las cuentas de GoHighLevel usan menos del 10% de la plataforma. Configuramos pipelines, automatizaciones, seguimientos y dashboards para que tu GHL funcione de verdad. Desde $4,000.',
    },
    hero: {
      h1: 'GoHighLevel Hecho Bien — Configuración, Automatización y Soporte Continuo',
      sub: 'La mayoría de los negocios pagan por GoHighLevel y usan el 10%. Nosotros construimos el otro 90% — pipelines, automatizaciones, secuencias de seguimiento y dashboards que realmente mueven la aguja.',
    },
    problems: {
      label: 'El Problema',
      h2: 'Los 5 Errores que las Empresas Cometen con GoHighLevel',
      items: [
        {
          icon: 'AlertTriangle',
          title: 'Configuración propia, 10% de uso',
          desc: 'Te registraste, viste unos tutoriales y configuraste lo básico. El otro 90% de la plataforma está intacto — calendarios, workflows, pipelines, gestión de reputación, todo inactivo.',
        },
        {
          icon: 'Clock',
          title: 'Sin seguimiento automatizado',
          desc: 'Llega un lead y... no pasa nada por horas. Sin SMS, sin email, sin buzón de voz. Para cuando alguien responde manualmente, el lead ya llamó a tu competidor.',
        },
        {
          icon: 'Target',
          title: 'El pipeline no refleja tu proceso de ventas',
          desc: 'Las etapas predeterminadas no reflejan cómo vende tu equipo realmente. Los deals se estancan, los vendedores saltan etapas, y no tienes visibilidad de lo que funciona.',
        },
        {
          icon: 'ShieldX',
          title: 'Sin gestión de reputación',
          desc: 'Terminas un trabajo y nunca pides una reseña. O la pides manualmente, semanas después, cuando el cliente ya se olvidó. Tu calificación en Google se estanca mientras la competencia sube.',
        },
        {
          icon: 'EyeOff',
          title: 'Sin dashboards de reportes',
          desc: 'No puedes responder preguntas básicas: ¿Cuántos leads este mes? ¿Cuál es nuestra tasa de cierre? ¿Qué fuente trae los mejores leads? Sin dashboards, vuelas a ciegas.',
        },
      ],
    },
    build: {
      label: 'Lo Que Construimos',
      h2: 'Tu GoHighLevel, Funcionando de Verdad',
      items: [
        {
          icon: 'Zap',
          title: 'Automatización Speed-to-Lead',
          desc: 'Llega un lead nuevo — SMS, email y buzón de voz se disparan en menos de 60 segundos. Sin intervención humana. La respuesta más rápida gana el deal, y nos aseguramos de que seas tú.',
        },
        {
          icon: 'GitBranch',
          title: 'Configuración de Pipeline y Workflows',
          desc: 'Etapas de pipeline personalizadas que reflejan cómo opera tu negocio realmente. Auto-etiquetado, triggers por etapa y asignación de tareas para que nada se pierda.',
        },
        {
          icon: 'Calendar',
          title: 'Sistema de Agendamiento',
          desc: 'Sincronización con Google o Outlook, secuencias automáticas de confirmación y recordatorio, seguimiento de no-shows, y distribución round-robin para equipos.',
        },
        {
          icon: 'Star',
          title: 'Motor de Reseñas y Reputación',
          desc: 'Después de cada trabajo completado, se envía una solicitud automática de reseña. Los clientes satisfechos van a Google. Los insatisfechos se enrutan a tu equipo en privado. Tu calificación crece sola.',
        },
        {
          icon: 'BarChart3',
          title: 'Dashboards de Reportes',
          desc: 'Reportes de rendimiento semanales entregados automáticamente. Conteo de leads, atribución de fuente, tasas de cierre, ingresos por etapa — todo lo que tu equipo necesita para tomar decisiones.',
        },
      ],
    },
    process: {
      label: 'Cómo Funciona',
      h2: 'De Auditoría a Producción en 4 Semanas',
      steps: [
        {
          week: 'Semana 1',
          title: 'Auditoría de tu configuración actual',
          desc: 'Entramos a tu cuenta de GHL, documentamos lo que está configurado (y lo que no), mapeamos tu proceso de ventas e identificamos las brechas más grandes. Recibes un reporte escrito.',
        },
        {
          week: 'Semanas 2–3',
          title: 'Construcción y configuración',
          desc: 'Construimos pipelines, workflows, automatizaciones, calendarios y dashboards dentro de tu cuenta. Todo personalizado para tu negocio — sin templates, sin configuraciones genéricas.',
        },
        {
          week: 'Semana 4',
          title: 'Entrenamiento y salida en vivo',
          desc: 'Entrenamos a tu equipo en cómo usar el sistema. Grabaciones de pantalla, walkthroughs en vivo y una guía de referencia. Después activamos todo y monitoreamos la primera semana.',
        },
      ],
    },
    pricing: {
      label: 'Inversión',
      h2: 'Precios Claros',
      setup: '$4,000',
      setupLabel: 'Configuración única',
      setupDesc: 'Auditoría completa, construcción de pipeline, automatización de workflows, configuración de calendario, dashboards y entrenamiento del equipo.',
      managed: '$497/mes',
      managedLabel: 'Servicio administrado opcional',
      managedDesc: 'Optimización continua, nuevos workflows, revisiones mensuales de rendimiento y soporte prioritario.',
    },
    cta: {
      h2: 'Deja de Pagar por una Plataforma que No Estás Usando',
      sub: 'Agenda una llamada. Revisamos tu cuenta de GoHighLevel y te decimos exactamente qué falta — sin compromiso.',
      button: 'Agendar Llamada',
    },
  },
} as const;

/* ── Icon mapping helper ── */

const iconMap = {
  Zap,
  GitBranch,
  Calendar,
  Star,
  BarChart3,
  AlertTriangle,
  Clock,
  Target,
  ShieldX,
  EyeOff,
} as const;

function getIcon(name: string) {
  return iconMap[name as keyof typeof iconMap] || Zap;
}

/* ── Schema ── */

function generateGHLServiceSchema(locale: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name:
      locale === 'es'
        ? 'Configuración y Automatización de GoHighLevel'
        : 'GoHighLevel Setup & Automation',
    description:
      locale === 'es'
        ? 'Servicio profesional de configuración de GoHighLevel: pipelines, automatizaciones, seguimientos, gestión de reputación y dashboards de reportes.'
        : 'Professional GoHighLevel setup service: pipelines, automations, follow-up sequences, reputation management, and reporting dashboards.',
    provider: {
      '@type': 'Organization',
      name: 'Agency Level 5',
      url: 'https://agencylevel5.com',
    },
    url: `https://agencylevel5.com/${locale}/gohighlevel`,
    serviceType: 'CRM Setup & Automation',
    areaServed: [
      { '@type': 'Place', name: 'United States' },
      { '@type': 'Place', name: 'Latin America' },
    ],
    offers: {
      '@type': 'Offer',
      price: '4000',
      priceCurrency: 'USD',
      description:
        locale === 'es'
          ? 'Configuración única de GoHighLevel. Servicio administrado opcional por $497/mes.'
          : 'One-time GoHighLevel setup. Optional managed service at $497/mo.',
    },
  };
}

/* ── Metadata ── */

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = content[locale as keyof typeof content] || content.en;

  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: generateAlternates('/gohighlevel', locale),
  };
}

/* ── Page ── */

export default async function GoHighLevelPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = content[locale as keyof typeof content] || content.en;
  const schema = generateGHLServiceSchema(locale);

  return (
    <div className="min-h-screen pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-violet/5 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-16 sm:py-24">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.15em] text-accent-cyan mb-4">
            GoHighLevel Partner
          </span>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {t.hero.h1}
          </h1>
          <p className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-3xl">
            {t.hero.sub}
          </p>
        </div>
      </section>

      {/* ── Problem Section ── */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.15em] text-accent-amber mb-4">
          {t.problems.label}
        </span>
        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold tracking-tight mb-12">
          {t.problems.h2}
        </h2>

        <div className="space-y-6">
          {t.problems.items.map((item, i) => {
            const Icon = getIcon(item.icon);
            return (
              <div
                key={i}
                className="flex gap-5 rounded-2xl border border-border-subtle bg-bg-card/50 p-6 sm:p-8 transition-all hover:border-accent-amber/20"
              >
                <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-accent-amber/10">
                  <Icon className="h-5 w-5 text-accent-amber" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-bold mb-2">
                    {i + 1}. {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── What We Build ── */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.15em] text-accent-cyan mb-4">
          {t.build.label}
        </span>
        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold tracking-tight mb-12">
          {t.build.h2}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.build.items.map((item, i) => {
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

      {/* ── How It Works ── */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.15em] text-accent-purple mb-4">
          {t.process.label}
        </span>
        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold tracking-tight mb-12">
          {t.process.h2}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.process.steps.map((step, i) => (
            <div
              key={i}
              className="relative rounded-2xl border border-border-subtle bg-bg-card/50 p-8"
            >
              <span className="inline-block text-[11px] font-bold uppercase tracking-[0.15em] text-accent-cyan mb-3">
                {step.week}
              </span>
              <h3 className="font-[family-name:var(--font-display)] text-lg font-bold mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {step.desc}
              </p>
              {i < t.process.steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-border-subtle" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.15em] text-accent-violet mb-4">
          {t.pricing.label}
        </span>
        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold tracking-tight mb-12">
          {t.pricing.h2}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Setup */}
          <div className="rounded-2xl border border-accent-violet/20 bg-gradient-to-br from-accent-violet/5 to-transparent p-8 sm:p-10">
            <span className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-display)] bg-gradient-to-r from-accent-violet to-accent-purple bg-clip-text text-transparent">
              {t.pricing.setup}
            </span>
            <p className="text-sm font-bold uppercase tracking-wider text-text-muted mt-2 mb-4">
              {t.pricing.setupLabel}
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              {t.pricing.setupDesc}
            </p>
          </div>

          {/* Managed */}
          <div className="rounded-2xl border border-accent-cyan/20 bg-gradient-to-br from-accent-cyan/5 to-transparent p-8 sm:p-10">
            <span className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-display)] bg-gradient-to-r from-accent-cyan to-accent-teal bg-clip-text text-transparent">
              {t.pricing.managed}
            </span>
            <p className="text-sm font-bold uppercase tracking-wider text-text-muted mt-2 mb-4">
              {t.pricing.managedLabel}
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              {t.pricing.managedDesc}
            </p>
          </div>
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
