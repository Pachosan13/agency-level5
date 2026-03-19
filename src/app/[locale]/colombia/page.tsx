// src/app/[locale]/colombia/page.tsx
import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import {
  ArrowRight,
  Bot,
  Zap,
  Globe,
  BarChart3,
  Search,
  MapPin,
  CheckCircle2,
  MessageSquare,
  HardHat,
  Building2,
  Stethoscope,
  Briefcase,
  TrendingUp,
} from 'lucide-react';
import { generateAlternates } from '@/lib/seo';

type Props = { params: Promise<{ locale: string }> };

/* ── Bilingual content (hardcoded, no message files) ── */

const content = {
  en: {
    meta: {
      title: 'AI Automation for Businesses in Colombia | Agency Level 5',
      description:
        'AI chatbots, workflow automation, and smart websites for Colombian service businesses. WhatsApp integration, field operations, and lead systems built for how Colombia works.',
    },
    hero: {
      h1: 'AI Automation for Businesses in Colombia',
      sub: 'Colombia\'s service sector is growing fast, but most operations still run on WhatsApp groups and manual follow-up. We build the systems that close the gap between growth and operations.',
    },
    market: {
      label: 'The Opportunity',
      h2: 'Colombia Is Ready — But Most Businesses Aren\'t',
      points: [
        {
          icon: 'BarChart3',
          title: 'Automation Adoption Is Below the LATAM Average',
          desc: 'Only 54% of Colombian organizations have adopted any form of automation — below the regional average. The businesses that move first will have an unfair advantage over competitors still running on manual processes.',
        },
        {
          icon: 'TrendingUp',
          title: 'Service Sector Is 60%+ of GDP',
          desc: 'Colombia\'s service economy accounts for more than 60% of GDP, but operational maturity hasn\'t kept up with the revenue growth. Companies are scaling headcount without scaling their systems.',
        },
        {
          icon: 'Building2',
          title: 'The 20-to-200 Gap Is Where Companies Break',
          desc: 'Companies scaling from 20 to 200 employees face the biggest operational gaps. What worked with a small team — group chats, verbal approvals, one person tracking everything — collapses at scale.',
        },
      ],
    },
    industries: {
      label: 'Industries in Colombia',
      h2: 'Built for Colombia\'s Service Economy',
      items: [
        {
          icon: 'HardHat',
          title: 'Construction & Engineering Services',
          desc: 'Project tracking, field crew dispatch, subcontractor coordination, and progress reporting. For companies managing multiple job sites across Bogot\u00e1, Medell\u00edn, or nationally.',
        },
        {
          icon: 'Building2',
          title: 'Facility Management & Property Services',
          desc: 'Work order management, vendor coordination, inspection workflows, and tenant communication. For property managers and facility companies handling commercial portfolios.',
        },
        {
          icon: 'Stethoscope',
          title: 'Healthcare & Medical Services',
          desc: 'Patient scheduling, appointment reminders, referral tracking, and follow-up sequences. For clinics, labs, and medical service providers scaling across Colombian cities.',
        },
        {
          icon: 'Briefcase',
          title: 'Professional Services & BPO',
          desc: 'Client onboarding workflows, task assignment, SLA tracking, and performance dashboards. For BPOs, consulting firms, and professional service companies serving local and international clients.',
        },
      ],
    },
    services: {
      label: 'What We Build',
      h2: 'Systems That Run While You Sleep',
      items: [
        {
          icon: 'Bot',
          title: 'AI Chatbots (WhatsApp-First)',
          desc: 'Your clients are on WhatsApp. Your chatbot should be too. We build AI assistants with native Spanish NLP that handle inquiries, book appointments, qualify leads, and route conversations — 24/7, on the channel Colombia actually uses.',
        },
        {
          icon: 'Zap',
          title: 'Workflow Automation',
          desc: 'Approval chains, field dispatch, job status updates, handoff sequences, and notification flows — automated end to end. When a field tech finishes a job, the invoice, follow-up, and review request happen automatically.',
        },
        {
          icon: 'Globe',
          title: 'Smart Websites',
          desc: 'Bilingual, fast, conversion-optimized websites built for the Colombian market. Not a digital brochure — a working machine with forms, chat, tracking, and local SEO built in.',
        },
        {
          icon: 'Search',
          title: 'Lead Generation',
          desc: 'Google Local Colombia, organic SEO, and targeted paid campaigns designed for Colombian search behavior. We help you show up when someone in Bogot\u00e1, Medell\u00edn, or Cali searches for what you do.',
        },
        {
          icon: 'BarChart3',
          title: 'AI Consulting',
          desc: 'We start with an operational diagnostic — where the bottlenecks are, where time leaks, where manual work is costing you money. Then we build a custom strategy and the systems to execute it.',
        },
      ],
    },
    stats: {
      label: 'Colombia by the Numbers',
      h2: 'The Market Is Moving. Are You?',
      items: [
        {
          value: '20%+',
          label: 'Annual growth in Colombia\'s digital economy',
        },
        {
          value: '70%',
          label: 'Of Colombia\'s service businesses are in Bogot\u00e1, Medell\u00edn, and Cali',
        },
        {
          value: '<1%',
          label: 'Of Colombian service businesses use AI-powered automation in their operations',
        },
      ],
    },
    cta: {
      h2: 'Ready to Upgrade Your Operations?',
      sub: 'Take our free 3-minute diagnostic to find out where your biggest operational bottlenecks are — and what to fix first.',
      button: 'Start Free Diagnostic',
    },
  },
  es: {
    meta: {
      title: 'Automatizaci\u00f3n con IA para Empresas en Colombia | Agency Level 5',
      description:
        'Chatbots con IA, automatizaci\u00f3n de flujos de trabajo y sitios web inteligentes para empresas de servicios en Colombia. Integraci\u00f3n WhatsApp, operaciones de campo y sistemas de leads.',
    },
    hero: {
      h1: 'Automatizaci\u00f3n con IA para Empresas en Colombia',
      sub: 'El sector de servicios de Colombia crece r\u00e1pido, pero la mayor\u00eda de las operaciones a\u00fan funcionan con grupos de WhatsApp y seguimiento manual. Construimos los sistemas que cierran la brecha entre crecimiento y operaciones.',
    },
    market: {
      label: 'La Oportunidad',
      h2: 'Colombia Est\u00e1 Lista — Pero la Mayor\u00eda de las Empresas No',
      points: [
        {
          icon: 'BarChart3',
          title: 'La Adopci\u00f3n de Automatizaci\u00f3n Est\u00e1 Debajo del Promedio LATAM',
          desc: 'Solo el 54% de las organizaciones colombianas han adoptado alguna forma de automatizaci\u00f3n — por debajo del promedio regional. Las empresas que se muevan primero tendr\u00e1n una ventaja injusta sobre competidores que a\u00fan operan con procesos manuales.',
        },
        {
          icon: 'TrendingUp',
          title: 'El Sector de Servicios Es M\u00e1s del 60% del PIB',
          desc: 'La econom\u00eda de servicios de Colombia representa m\u00e1s del 60% del PIB, pero la madurez operativa no ha seguido el ritmo del crecimiento en ingresos. Las empresas escalan personal sin escalar sus sistemas.',
        },
        {
          icon: 'Building2',
          title: 'La Brecha de 20 a 200 Es Donde las Empresas Se Quiebran',
          desc: 'Las empresas que escalan de 20 a 200 empleados enfrentan las mayores brechas operativas. Lo que funcionaba con un equipo peque\u00f1o — chats grupales, aprobaciones verbales, una persona rastreando todo — colapsa a escala.',
        },
      ],
    },
    industries: {
      label: 'Industrias en Colombia',
      h2: 'Construido para la Econom\u00eda de Servicios de Colombia',
      items: [
        {
          icon: 'HardHat',
          title: 'Construcci\u00f3n y Servicios de Ingenier\u00eda',
          desc: 'Seguimiento de proyectos, despacho de cuadrillas, coordinaci\u00f3n de subcontratistas y reportes de avance. Para empresas que manejan m\u00faltiples obras en Bogot\u00e1, Medell\u00edn o a nivel nacional.',
        },
        {
          icon: 'Building2',
          title: 'Facility Management y Servicios Inmobiliarios',
          desc: 'Gesti\u00f3n de \u00f3rdenes de trabajo, coordinaci\u00f3n de proveedores, flujos de inspecci\u00f3n y comunicaci\u00f3n con arrendatarios. Para administradores de propiedad y empresas de facilities con portafolios comerciales.',
        },
        {
          icon: 'Stethoscope',
          title: 'Servicios de Salud y M\u00e9dicos',
          desc: 'Programaci\u00f3n de pacientes, recordatorios de citas, seguimiento de referidos y secuencias de seguimiento. Para cl\u00ednicas, laboratorios y proveedores de servicios m\u00e9dicos escalando en ciudades colombianas.',
        },
        {
          icon: 'Briefcase',
          title: 'Servicios Profesionales y BPO',
          desc: 'Flujos de onboarding de clientes, asignaci\u00f3n de tareas, seguimiento de SLAs y dashboards de rendimiento. Para BPOs, firmas de consultor\u00eda y empresas de servicios profesionales que atienden clientes locales e internacionales.',
        },
      ],
    },
    services: {
      label: 'Lo Que Construimos',
      h2: 'Sistemas que Trabajan Mientras Duermes',
      items: [
        {
          icon: 'Bot',
          title: 'Chatbots con IA (WhatsApp Primero)',
          desc: 'Tus clientes est\u00e1n en WhatsApp. Tu chatbot tambi\u00e9n deber\u00eda estarlo. Construimos asistentes de IA con NLP nativo en espa\u00f1ol que atienden consultas, agendan citas, califican leads y enrutan conversaciones — 24/7, en el canal que Colombia realmente usa.',
        },
        {
          icon: 'Zap',
          title: 'Automatizaci\u00f3n de Workflows',
          desc: 'Cadenas de aprobaci\u00f3n, despacho de campo, actualizaciones de estado, secuencias de handoff y flujos de notificaci\u00f3n — automatizados de principio a fin. Cuando un t\u00e9cnico termina un trabajo, la factura, el seguimiento y la solicitud de rese\u00f1a suceden autom\u00e1ticamente.',
        },
        {
          icon: 'Globe',
          title: 'Sitios Web Inteligentes',
          desc: 'Sitios web biling\u00fces, r\u00e1pidos y optimizados para conversi\u00f3n, construidos para el mercado colombiano. No un folleto digital — una m\u00e1quina funcional con formularios, chat, tracking y SEO local integrados.',
        },
        {
          icon: 'Search',
          title: 'Generaci\u00f3n de Leads',
          desc: 'Google Local Colombia, SEO org\u00e1nico y campa\u00f1as pagadas dirigidas para el comportamiento de b\u00fasqueda colombiano. Te ayudamos a aparecer cuando alguien en Bogot\u00e1, Medell\u00edn o Cali busca lo que haces.',
        },
        {
          icon: 'BarChart3',
          title: 'Consultor\u00eda con IA',
          desc: 'Empezamos con un diagn\u00f3stico operativo — d\u00f3nde est\u00e1n los cuellos de botella, d\u00f3nde se pierde tiempo, d\u00f3nde el trabajo manual te est\u00e1 costando dinero. Despu\u00e9s construimos una estrategia personalizada y los sistemas para ejecutarla.',
        },
      ],
    },
    stats: {
      label: 'Colombia en N\u00fameros',
      h2: 'El Mercado Se Mueve. \u00bfT\u00fa Te Mueves?',
      items: [
        {
          value: '20%+',
          label: 'Crecimiento anual de la econom\u00eda digital de Colombia',
        },
        {
          value: '70%',
          label: 'De las empresas de servicios de Colombia est\u00e1n en Bogot\u00e1, Medell\u00edn y Cali',
        },
        {
          value: '<1%',
          label: 'De las empresas de servicios colombianas usan automatizaci\u00f3n con IA en sus operaciones',
        },
      ],
    },
    cta: {
      h2: '\u00bfListo para Mejorar tus Operaciones?',
      sub: 'Toma nuestro diagn\u00f3stico gratuito de 3 minutos para descubrir d\u00f3nde est\u00e1n tus mayores cuellos de botella operativos — y qu\u00e9 arreglar primero.',
      button: 'Iniciar Diagn\u00f3stico Gratis',
    },
  },
} as const;

/* ── Icon mapping helper ── */

const iconMap = {
  Bot,
  Zap,
  Globe,
  BarChart3,
  Search,
  MessageSquare,
  HardHat,
  Building2,
  Stethoscope,
  Briefcase,
  TrendingUp,
} as const;

function getIcon(name: string) {
  return iconMap[name as keyof typeof iconMap] || Zap;
}

/* ── Schema ── */

function generateColombiaServiceSchema(locale: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name:
      locale === 'es'
        ? 'Automatizaci\u00f3n con IA para Empresas en Colombia'
        : 'AI Automation for Businesses in Colombia',
    description:
      locale === 'es'
        ? 'Chatbots con IA, automatizaci\u00f3n de workflows, sitios web inteligentes y generaci\u00f3n de leads para empresas de servicios en Colombia.'
        : 'AI chatbots, workflow automation, smart websites, and lead generation for service businesses in Colombia.',
    provider: {
      '@type': 'Organization',
      name: 'Agency Level 5',
      url: 'https://agencylevel5.com',
    },
    url: `https://agencylevel5.com/${locale}/colombia`,
    serviceType: 'AI Automation & Operational Consulting',
    areaServed: {
      '@type': 'Country',
      name: 'Colombia',
      sameAs: 'https://en.wikipedia.org/wiki/Colombia',
    },
    availableLanguage: ['Spanish', 'English'],
  };
}

/* ── Metadata ── */

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = content[locale as keyof typeof content] || content.en;

  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: generateAlternates('/colombia', locale),
  };
}

/* ── Page ── */

export default async function ColombiaPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = content[locale as keyof typeof content] || content.en;
  const schema = generateColombiaServiceSchema(locale);

  return (
    <div className="min-h-screen pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-cyan/5 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-16 sm:py-24">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-accent-cyan mb-4">
            <MapPin className="h-3 w-3" /> Colombia
          </span>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {t.hero.h1}
          </h1>
          <p className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-3xl">
            {t.hero.sub}
          </p>
        </div>
      </section>

      {/* ── Market Context ── */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.15em] text-accent-amber mb-4">
          {t.market.label}
        </span>
        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold tracking-tight mb-12">
          {t.market.h2}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.market.points.map((point, i) => {
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

      {/* ── Industries ── */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.15em] text-accent-cyan mb-4">
          {t.industries.label}
        </span>
        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold tracking-tight mb-12">
          {t.industries.h2}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.industries.items.map((item, i) => {
            const Icon = getIcon(item.icon);
            return (
              <div
                key={i}
                className="rounded-2xl border border-border-subtle bg-bg-card/50 p-6 transition-all hover:border-accent-cyan/20 hover:bg-bg-card"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-cyan/10 mb-4">
                  <Icon className="h-5 w-5 text-accent-cyan" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-base font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {item.desc}
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

      {/* ── Colombia Stats ── */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-2xl border border-accent-cyan/20 bg-gradient-to-br from-accent-cyan/5 to-accent-violet/5 p-8 sm:p-12">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.15em] text-accent-cyan mb-4">
            {t.stats.label}
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold tracking-tight mb-10">
            {t.stats.h2}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.stats.items.map((stat, i) => (
              <div key={i} className="text-center">
                <span className="block text-4xl sm:text-5xl font-bold font-[family-name:var(--font-display)] bg-gradient-to-r from-accent-cyan to-accent-violet bg-clip-text text-transparent mb-3">
                  {stat.value}
                </span>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
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
