// src/app/[locale]/fractional-coo/page.tsx
import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import {
  ArrowRight,
  Search,
  GitMerge,
  Zap,
  BarChart3,
  GraduationCap,
  Settings,
  FileWarning,
  FileX2,
  DollarSign,
  Building2,
  UserCog,
  TrendingUp,
  Wrench,
  CheckCircle2,
} from 'lucide-react';
import { generateAlternates } from '@/lib/seo';

type Props = { params: Promise<{ locale: string }> };

/* ── Bilingual content (hardcoded, no message files) ── */

const content = {
  en: {
    meta: {
      title: 'Fractional COO Services — AI-Powered Operations Leadership | Agency Level 5',
      description:
        'Get a fractional COO who builds AI-powered systems, not just strategy decks. We embed in your business, fix broken operations, and leave you with systems that run without us.',
    },
    hero: {
      label: 'Fractional COO',
      h1: 'You Don\'t Need Another Consultant. You Need an Operator.',
      sub: 'A fractional COO who embeds in your business, builds the systems, trains your team, and gets out. No PowerPoints. No theory. Just operations that work.',
    },
    problem: {
      label: 'The Problem',
      h2: 'What Traditional Consultants Get Wrong',
      items: [
        {
          icon: 'FileWarning',
          title: 'They Diagnose But Don\'t Build',
          desc: 'You pay $30,000 for a strategic assessment. You get a 60-page deck with recommendations. Then they leave, and your team has to figure out how to execute it. Nothing changes.',
        },
        {
          icon: 'FileX2',
          title: 'They Leave You with a PDF, Not a System',
          desc: 'The deliverable is a document, not a working operation. No workflows, no automations, no dashboards. Just a roadmap that sits on a shared drive until everyone forgets about it.',
        },
        {
          icon: 'DollarSign',
          title: 'They Charge by the Hour to Tell You What You Already Know',
          desc: 'You know the problems. You know the handoffs are broken. You know the approvals take too long. What you need is someone who rolls up their sleeves and fixes it.',
        },
      ],
    },
    whatWeDo: {
      label: 'What a Fractional COO Actually Does',
      h2: 'We Build the Machine. Then We Teach You How to Run It.',
      items: [
        {
          icon: 'Search',
          title: 'Audit Your Operations (Week 1)',
          desc: 'We walk every workflow, talk to every team lead, and map where time leaks, where handoffs break, and where your team is doing manually what a system should handle.',
        },
        {
          icon: 'GitMerge',
          title: 'Map and Fix Broken Handoffs',
          desc: 'The space between departments is where most businesses bleed. Sales to ops, ops to billing, billing to client. We find every gap and close it with a process.',
        },
        {
          icon: 'Zap',
          title: 'Build Automated Workflows',
          desc: 'Dispatch, approvals, follow-ups, status updates, notifications — automated end to end. When something happens, the next thing happens automatically. No chasing, no reminding.',
        },
        {
          icon: 'BarChart3',
          title: 'Set Up Real-Time Dashboards',
          desc: 'Revenue, pipeline, job status, team utilization — all visible in one place. No more asking for reports. No more waiting until end-of-month to know where you stand.',
        },
        {
          icon: 'GraduationCap',
          title: 'Train Your Team on the New Systems',
          desc: 'We don\'t just build and walk away. We train your managers, your coordinators, your field leads. Screen recordings, live walkthroughs, reference docs. Your team owns it.',
        },
        {
          icon: 'Settings',
          title: 'Stay on Retainer for Ongoing Optimization',
          desc: 'Operations aren\'t set-and-forget. New bottlenecks appear as you grow. We stay on a monthly retainer to tune, adjust, and build new workflows as your business evolves.',
        },
      ],
    },
    process: {
      label: 'How It Works',
      h2: 'Three Phases. No Fluff.',
      phases: [
        {
          phase: 'Phase 1',
          timeline: 'Week 1–2',
          title: 'Operational Audit',
          desc: 'Deep dive into every workflow, every handoff, every tool your team uses. We interview team leads, shadow daily operations, and document everything. You get a written report with the top 10 fixes ranked by impact.',
        },
        {
          phase: 'Phase 2',
          timeline: 'Week 3–6',
          title: 'Build & Deploy',
          desc: 'We build the automations, dashboards, SOPs, and workflows inside your actual tools. Not a prototype — the real thing, running in production. Your team starts using the new systems before we leave.',
        },
        {
          phase: 'Phase 3',
          timeline: 'Ongoing',
          title: 'Optimize & Scale',
          desc: 'Monthly retainer. We review performance metrics, identify new bottlenecks, build additional workflows, and make sure the systems we built keep working as your team and client base grow.',
        },
      ],
    },
    whoIsFor: {
      label: 'Who This Is For',
      h2: 'This Works Best If You\'re In One of These Situations',
      profiles: [
        {
          icon: 'Building2',
          title: 'Service Businesses Doing $1M–$10M with 10–100 Employees',
          desc: 'Big enough that manual processes are slowing you down. Small enough that a full-time COO at $250K/year doesn\'t make financial sense yet.',
        },
        {
          icon: 'UserCog',
          title: 'Founders Who Are Still the Bottleneck in Every Decision',
          desc: 'If your team can\'t move forward without your approval on every job, every hire, every purchase — you don\'t have a team, you have a dependency. We fix that.',
        },
        {
          icon: 'TrendingUp',
          title: 'Companies That Have Outgrown Spreadsheets but Aren\'t Ready for a Full-Time COO',
          desc: 'You need operational leadership and systems, not another salary on the payroll. A fractional COO gives you the expertise at a fraction of the cost.',
        },
        {
          icon: 'Wrench',
          title: 'Businesses Where Leads Fall Through Cracks and Jobs Get Delayed',
          desc: 'If you\'re losing revenue because of missed follow-ups, late dispatches, or jobs that stall between departments — that\'s an operations problem, and it\'s exactly what we solve.',
        },
      ],
    },
    pricing: {
      label: 'Investment',
      h2: 'Straightforward Pricing',
      buildout: '$8,000–$20,000',
      buildoutLabel: 'Operations Buildout (one-time)',
      buildoutDesc: 'Full operational audit, workflow automation, dashboard setup, SOP documentation, and team training. 4 to 6 weeks depending on complexity. You own everything we build.',
      retainer: '$2,500–$5,000/mo',
      retainerLabel: 'Ongoing Retainer (post-buildout)',
      retainerDesc: 'Monthly optimization cycles, new workflow builds, performance reviews, and priority support. Cancel anytime — no long-term contracts.',
    },
    cta: {
      h2: 'Book Your Operational Audit',
      sub: 'We\'ll look at how your business runs today, identify the top bottlenecks, and tell you exactly what we\'d fix first — and what it would cost. No pitch decks.',
      button: 'Book a Call',
    },
  },
  es: {
    meta: {
      title: 'COO Fraccional — Liderazgo Operativo con IA | Agency Level 5',
      description:
        'Obt\u00e9n un COO fraccional que construye sistemas con IA, no solo presentaciones. Nos integramos a tu empresa, arreglamos operaciones rotas y dejamos sistemas que funcionan sin nosotros.',
    },
    hero: {
      label: 'COO Fraccional',
      h1: 'No Necesitas Otro Consultor. Necesitas un Operador.',
      sub: 'Un COO fraccional que se integra a tu negocio, construye los sistemas, entrena a tu equipo y se retira. Sin presentaciones. Sin teor\u00eda. Solo operaciones que funcionan.',
    },
    problem: {
      label: 'El Problema',
      h2: 'Lo Que los Consultores Tradicionales Hacen Mal',
      items: [
        {
          icon: 'FileWarning',
          title: 'Diagnostican Pero No Construyen',
          desc: 'Pagas $30,000 por una evaluaci\u00f3n estrat\u00e9gica. Recibes un documento de 60 p\u00e1ginas con recomendaciones. Despu\u00e9s se van, y tu equipo tiene que averiguar c\u00f3mo ejecutarlo. Nada cambia.',
        },
        {
          icon: 'FileX2',
          title: 'Te Dejan un PDF, No un Sistema',
          desc: 'El entregable es un documento, no una operaci\u00f3n funcional. Sin workflows, sin automatizaciones, sin dashboards. Solo una hoja de ruta que se queda en un drive compartido hasta que todos la olvidan.',
        },
        {
          icon: 'DollarSign',
          title: 'Cobran por Hora para Decirte lo Que Ya Sabes',
          desc: 'T\u00fa conoces los problemas. Sabes que los handoffs est\u00e1n rotos. Sabes que las aprobaciones tardan demasiado. Lo que necesitas es alguien que se arremangue y lo arregle.',
        },
      ],
    },
    whatWeDo: {
      label: 'Lo Que un COO Fraccional Realmente Hace',
      h2: 'Construimos la M\u00e1quina. Despu\u00e9s Te Ense\u00f1amos a Operarla.',
      items: [
        {
          icon: 'Search',
          title: 'Auditar Tus Operaciones (Semana 1)',
          desc: 'Recorremos cada workflow, hablamos con cada l\u00edder de equipo y mapeamos d\u00f3nde se pierde tiempo, d\u00f3nde se rompen los handoffs y d\u00f3nde tu equipo hace manualmente lo que un sistema deber\u00eda manejar.',
        },
        {
          icon: 'GitMerge',
          title: 'Mapear y Reparar Handoffs Rotos',
          desc: 'El espacio entre departamentos es donde la mayor\u00eda de los negocios sangran. Ventas a operaciones, operaciones a facturaci\u00f3n, facturaci\u00f3n a cliente. Encontramos cada brecha y la cerramos con un proceso.',
        },
        {
          icon: 'Zap',
          title: 'Construir Workflows Automatizados',
          desc: 'Despacho, aprobaciones, seguimientos, actualizaciones de estado, notificaciones — automatizados de principio a fin. Cuando algo sucede, lo siguiente sucede autom\u00e1ticamente. Sin perseguir, sin recordar.',
        },
        {
          icon: 'BarChart3',
          title: 'Configurar Dashboards en Tiempo Real',
          desc: 'Ingresos, pipeline, estado de trabajos, utilizaci\u00f3n del equipo — todo visible en un solo lugar. Sin pedir reportes. Sin esperar al fin de mes para saber d\u00f3nde est\u00e1s parado.',
        },
        {
          icon: 'GraduationCap',
          title: 'Entrenar a Tu Equipo en los Nuevos Sistemas',
          desc: 'No solo construimos y nos vamos. Entrenamos a tus gerentes, coordinadores y l\u00edderes de campo. Grabaciones de pantalla, walkthroughs en vivo, documentos de referencia. Tu equipo lo controla.',
        },
        {
          icon: 'Settings',
          title: 'Retainer Continuo para Optimizaci\u00f3n',
          desc: 'Las operaciones no se configuran y se olvidan. Nuevos cuellos de botella aparecen al crecer. Nos quedamos en retainer mensual para ajustar, afinar y construir nuevos workflows a medida que tu negocio evoluciona.',
        },
      ],
    },
    process: {
      label: 'C\u00f3mo Funciona',
      h2: 'Tres Fases. Sin Relleno.',
      phases: [
        {
          phase: 'Fase 1',
          timeline: 'Semana 1–2',
          title: 'Auditor\u00eda Operativa',
          desc: 'Inmersi\u00f3n profunda en cada workflow, cada handoff, cada herramienta que tu equipo usa. Entrevistamos l\u00edderes, observamos operaciones diarias y documentamos todo. Recibes un reporte escrito con los 10 principales arreglos ordenados por impacto.',
        },
        {
          phase: 'Fase 2',
          timeline: 'Semana 3–6',
          title: 'Construir y Desplegar',
          desc: 'Construimos las automatizaciones, dashboards, SOPs y workflows dentro de tus herramientas reales. No es un prototipo — es el sistema real, corriendo en producci\u00f3n. Tu equipo empieza a usar los nuevos sistemas antes de que nos vayamos.',
        },
        {
          phase: 'Fase 3',
          timeline: 'Continuo',
          title: 'Optimizar y Escalar',
          desc: 'Retainer mensual. Revisamos m\u00e9tricas de rendimiento, identificamos nuevos cuellos de botella, construimos workflows adicionales y nos aseguramos de que los sistemas funcionen mientras tu equipo y base de clientes crecen.',
        },
      ],
    },
    whoIsFor: {
      label: 'Para Qui\u00e9n Es Esto',
      h2: 'Funciona Mejor Si Est\u00e1s en Una de Estas Situaciones',
      profiles: [
        {
          icon: 'Building2',
          title: 'Empresas de Servicios de $1M–$10M con 10–100 Empleados',
          desc: 'Lo suficientemente grande para que los procesos manuales te frenen. Lo suficientemente peque\u00f1o para que un COO de tiempo completo a $250K/a\u00f1o no tenga sentido financiero a\u00fan.',
        },
        {
          icon: 'UserCog',
          title: 'Fundadores Que Siguen Siendo el Cuello de Botella en Cada Decisi\u00f3n',
          desc: 'Si tu equipo no puede avanzar sin tu aprobaci\u00f3n en cada trabajo, cada contrataci\u00f3n, cada compra — no tienes un equipo, tienes una dependencia. Eso lo arreglamos.',
        },
        {
          icon: 'TrendingUp',
          title: 'Empresas Que Superaron las Hojas de C\u00e1lculo Pero No Est\u00e1n Listas para un COO de Tiempo Completo',
          desc: 'Necesitas liderazgo operativo y sistemas, no otro salario en la n\u00f3mina. Un COO fraccional te da la experiencia a una fracci\u00f3n del costo.',
        },
        {
          icon: 'Wrench',
          title: 'Negocios Donde los Leads Se Pierden y los Trabajos Se Retrasan',
          desc: 'Si est\u00e1s perdiendo ingresos por seguimientos perdidos, despachos tard\u00edos o trabajos que se estancan entre departamentos — es un problema de operaciones, y es exactamente lo que resolvemos.',
        },
      ],
    },
    pricing: {
      label: 'Inversi\u00f3n',
      h2: 'Precios Claros',
      buildout: '$8,000–$20,000',
      buildoutLabel: 'Construcci\u00f3n Operativa (\u00fanica vez)',
      buildoutDesc: 'Auditor\u00eda operativa completa, automatizaci\u00f3n de workflows, configuraci\u00f3n de dashboards, documentaci\u00f3n de SOPs y entrenamiento del equipo. 4 a 6 semanas seg\u00fan complejidad. Todo lo que construimos es tuyo.',
      retainer: '$2,500–$5,000/mes',
      retainerLabel: 'Retainer Continuo (post-construcci\u00f3n)',
      retainerDesc: 'Ciclos mensuales de optimizaci\u00f3n, nuevos workflows, revisiones de rendimiento y soporte prioritario. Cancela cuando quieras — sin contratos a largo plazo.',
    },
    cta: {
      h2: 'Agenda Tu Auditor\u00eda Operativa',
      sub: 'Revisamos c\u00f3mo opera tu negocio hoy, identificamos los principales cuellos de botella y te decimos exactamente qu\u00e9 arreglar\u00edamos primero — y cu\u00e1nto costar\u00eda. Sin presentaciones.',
      button: 'Agendar Llamada',
    },
  },
} as const;

/* ── Icon mapping helper ── */

const iconMap = {
  Search,
  GitMerge,
  Zap,
  BarChart3,
  GraduationCap,
  Settings,
  FileWarning,
  FileX2,
  DollarSign,
  Building2,
  UserCog,
  TrendingUp,
  Wrench,
} as const;

function getIcon(name: string) {
  return iconMap[name as keyof typeof iconMap] || Zap;
}

/* ── Schema ── */

function generateFractionalCOOSchema(locale: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name:
      locale === 'es'
        ? 'COO Fraccional — Liderazgo Operativo con IA'
        : 'Fractional COO — AI-Powered Operations Leadership',
    description:
      locale === 'es'
        ? 'Servicios de COO fraccional: auditor\u00eda operativa, automatizaci\u00f3n de workflows, dashboards en tiempo real, entrenamiento de equipo y optimizaci\u00f3n continua.'
        : 'Fractional COO services: operational audit, workflow automation, real-time dashboards, team training, and ongoing optimization.',
    provider: {
      '@type': 'Organization',
      name: 'Agency Level 5',
      url: 'https://agencylevel5.com',
    },
    url: `https://agencylevel5.com/${locale}/fractional-coo`,
    serviceType: 'Fractional COO & Operational Consulting',
    priceRange: '$8,000–$20,000 (buildout) / $2,500–$5,000/mo (retainer)',
    areaServed: [
      { '@type': 'Place', name: 'United States' },
      { '@type': 'Place', name: 'Latin America' },
    ],
    availableLanguage: ['English', 'Spanish'],
  };
}

/* ── Metadata ── */

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = content[locale as keyof typeof content] || content.en;

  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: generateAlternates('/fractional-coo', locale),
  };
}

/* ── Page ── */

export default async function FractionalCOOPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = content[locale as keyof typeof content] || content.en;
  const schema = generateFractionalCOOSchema(locale);

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
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.15em] text-accent-violet mb-4">
            {t.hero.label}
          </span>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {t.hero.h1}
          </h1>
          <p className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-3xl">
            {t.hero.sub}
          </p>
        </div>
      </section>

      {/* ── The Problem ── */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.15em] text-accent-amber mb-4">
          {t.problem.label}
        </span>
        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold tracking-tight mb-12">
          {t.problem.h2}
        </h2>

        <div className="space-y-6">
          {t.problem.items.map((item, i) => {
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
                    {item.title}
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

      {/* ── What a Fractional COO Actually Does ── */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.15em] text-accent-cyan mb-4">
          {t.whatWeDo.label}
        </span>
        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold tracking-tight mb-12">
          {t.whatWeDo.h2}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.whatWeDo.items.map((item, i) => {
            const Icon = getIcon(item.icon);
            return (
              <div
                key={i}
                className="rounded-2xl border border-border-subtle bg-bg-card/50 p-8 transition-all hover:border-accent-cyan/20 hover:bg-bg-card"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-cyan/10 mb-5">
                  <Icon className="h-6 w-6 text-accent-cyan" />
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
          {t.process.phases.map((phase, i) => (
            <div
              key={i}
              className="relative rounded-2xl border border-border-subtle bg-bg-card/50 p-8"
            >
              <span className="inline-block text-[11px] font-bold uppercase tracking-[0.15em] text-accent-cyan mb-1">
                {phase.phase}
              </span>
              <span className="block text-xs text-text-muted mb-3">
                {phase.timeline}
              </span>
              <h3 className="font-[family-name:var(--font-display)] text-lg font-bold mb-3">
                {phase.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {phase.desc}
              </p>
              {i < t.process.phases.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-border-subtle" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Who This Is For ── */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.15em] text-accent-violet mb-4">
          {t.whoIsFor.label}
        </span>
        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold tracking-tight mb-12">
          {t.whoIsFor.h2}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.whoIsFor.profiles.map((profile, i) => {
            const Icon = getIcon(profile.icon);
            return (
              <div
                key={i}
                className="flex gap-5 rounded-2xl border border-border-subtle bg-bg-card/50 p-8 transition-all hover:border-accent-violet/20 hover:bg-bg-card"
              >
                <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-violet/10">
                  <Icon className="h-6 w-6 text-accent-violet" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-base font-bold mb-2">
                    {profile.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {profile.desc}
                  </p>
                </div>
              </div>
            );
          })}
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
          {/* Buildout */}
          <div className="rounded-2xl border border-accent-violet/20 bg-gradient-to-br from-accent-violet/5 to-transparent p-8 sm:p-10">
            <span className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-display)] bg-gradient-to-r from-accent-violet to-accent-purple bg-clip-text text-transparent">
              {t.pricing.buildout}
            </span>
            <p className="text-sm font-bold uppercase tracking-wider text-text-muted mt-2 mb-4">
              {t.pricing.buildoutLabel}
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              {t.pricing.buildoutDesc}
            </p>
          </div>

          {/* Retainer */}
          <div className="rounded-2xl border border-accent-cyan/20 bg-gradient-to-br from-accent-cyan/5 to-transparent p-8 sm:p-10">
            <span className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-display)] bg-gradient-to-r from-accent-cyan to-accent-teal bg-clip-text text-transparent">
              {t.pricing.retainer}
            </span>
            <p className="text-sm font-bold uppercase tracking-wider text-text-muted mt-2 mb-4">
              {t.pricing.retainerLabel}
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              {t.pricing.retainerDesc}
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
