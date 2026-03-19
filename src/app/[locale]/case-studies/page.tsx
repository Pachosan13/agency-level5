import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import {
  ArrowRight,
  Thermometer,
  Cable,
  Building2,
  Briefcase,
  Clock,
  TrendingUp,
  CalendarCheck,
  CheckCircle2,
  Trophy,
} from 'lucide-react';
import { generateAlternates } from '@/lib/seo';

type Props = { params: Promise<{ locale: string }> };

/* -- Bilingual content (hardcoded, no message files) -- */

const content = {
  en: {
    meta: {
      title: 'Results & Case Studies — Real Outcomes from AI Automation | Agency Level 5',
      description:
        'See how service businesses save 20+ hours per week, respond to leads in under 60 seconds, and scale operations without adding headcount.',
    },
    hero: {
      h1: 'Real Results. Real Businesses. No Fluff.',
      sub: 'Every number below comes from actual client engagements. We show our work.',
    },
    stats: [
      { value: '280%', label: 'Avg. increase in organic traffic' },
      { value: '<60s', label: 'Avg. lead response time (from 4+ hrs)' },
      { value: '20+', label: 'Hours saved per week per client' },
      { value: '3.2x', label: 'Lead-to-appointment conversion improvement' },
    ],
    cases: [
      {
        icon: 'Thermometer',
        industry: 'HVAC Company',
        location: 'Panama, 45 employees',
        accent: 'accent-cyan',
        challenge:
          'Missing 60% of inbound leads because no one answers the phone during field jobs. Leads called, got voicemail, and moved on to the next company on Google.',
        solution:
          'AI chatbot handling inbound inquiries 24/7, speed-to-lead automation responding in under a minute, and a GHL pipeline tracking every lead from first contact to closed job.',
        results: [
          { metric: 'Lead response', before: '4 hours', after: '47 seconds' },
          { metric: 'Booked appointments', before: 'baseline', after: '+185%' },
          { metric: 'Monthly revenue', before: 'baseline', after: '+$34K' },
        ],
        timeline: '3 weeks to deploy',
      },
      {
        icon: 'Cable',
        industry: 'Electrical Contractor',
        location: 'US Southeast, 28 employees',
        accent: 'accent-amber',
        challenge:
          'The owner was the bottleneck for everything. Every quote needed his approval, every job needed his dispatch. He worked 70-hour weeks and still couldn\'t keep up.',
        solution:
          'Automated dispatch workflow assigning jobs based on technician location and skill set. Quote approval system with thresholds. Real-time dashboard showing job status, crew location, and pipeline value.',
        results: [
          { metric: 'Owner time freed', before: '0 hrs/week', after: '22 hrs/week' },
          { metric: 'Quote turnaround', before: '3 days', after: '4 hours' },
          { metric: 'Job completion rate', before: 'baseline', after: '+31%' },
        ],
        timeline: '5 weeks to deploy',
      },
      {
        icon: 'Building2',
        industry: 'Property Management Company',
        location: 'Colombia, 60 employees',
        accent: 'accent-purple',
        challenge:
          'Tenant requests came through WhatsApp with no tracking. Maintenance tasks fell through the cracks. The team spent more time searching chat history than fixing problems.',
        solution:
          'WhatsApp-to-CRM integration capturing every tenant request automatically. Automated ticket routing by category and urgency. Tenant portal showing request status in real time.',
        results: [
          { metric: 'Response time', before: '12 hours', after: '2 minutes' },
          { metric: 'Unresolved tickets', before: 'baseline', after: '-74%' },
          { metric: 'Tenant satisfaction', before: 'baseline', after: '+40%' },
        ],
        timeline: '4 weeks to deploy',
      },
      {
        icon: 'Briefcase',
        industry: 'Professional Services Firm',
        location: 'US, 15 employees',
        accent: 'accent-violet',
        challenge:
          'Website was a brochure. Zero leads from organic search. 100% of new business came from referrals, which meant growth was unpredictable and completely out of their control.',
        solution:
          'Smart website built for conversion, not vanity. SEO content strategy targeting high-intent keywords. Lead capture forms with automated email nurture sequences.',
        results: [
          { metric: 'Organic traffic', before: 'baseline', after: '+280% in 90 days' },
          { metric: 'Inbound leads', before: '0/month', after: '12/month' },
          { metric: 'Cost per lead', before: 'N/A', after: '$0 (organic)' },
        ],
        timeline: '6 weeks to deploy',
      },
    ],
    includes: {
      label: 'What Every Engagement Includes',
      items: [
        'Operational audit (week 1)',
        'Custom workflow design',
        'Full deployment and testing',
        'Team training session',
        '30-day post-launch support',
        'Documentation you actually own',
      ],
    },
    cta: {
      h2: 'See What We\'d Build for You',
      sub: 'Every business is different. Tell us what\'s broken and we\'ll show you how we\'d fix it — with a clear scope, timeline, and price.',
      button: 'Start Free Diagnostic',
    },
    caseLabels: {
      challenge: 'THE CHALLENGE',
      solution: 'WHAT WE BUILT',
      results: 'THE RESULTS',
      timeline: 'Timeline',
      before: 'Before',
      after: 'After',
    },
  },
  es: {
    meta: {
      title: 'Resultados y Casos de Éxito — Resultados Reales de Automatización con IA | Agency Level 5',
      description:
        'Vea cómo las empresas de servicios ahorran 20+ horas por semana, responden a leads en menos de 60 segundos y escalan operaciones sin contratar más personal.',
    },
    hero: {
      h1: 'Resultados Reales. Empresas Reales. Sin Rodeos.',
      sub: 'Cada número a continuación proviene de compromisos reales con clientes. Mostramos nuestro trabajo.',
    },
    stats: [
      { value: '280%', label: 'Aumento promedio en tráfico orgánico' },
      { value: '<60s', label: 'Tiempo promedio de respuesta a leads (antes 4+ hrs)' },
      { value: '20+', label: 'Horas ahorradas por semana por cliente' },
      { value: '3.2x', label: 'Mejora en conversión de lead a cita' },
    ],
    cases: [
      {
        icon: 'Thermometer',
        industry: 'Empresa de HVAC',
        location: 'Panamá, 45 empleados',
        accent: 'accent-cyan',
        challenge:
          'Perdían el 60% de los leads entrantes porque nadie contesta el teléfono durante los trabajos de campo. Los leads llamaban, les caía buzón y pasaban a la siguiente empresa en Google.',
        solution:
          'Chatbot con IA atendiendo consultas 24/7, automatización speed-to-lead respondiendo en menos de un minuto, y pipeline en GHL rastreando cada lead desde el primer contacto hasta el cierre.',
        results: [
          { metric: 'Tiempo de respuesta', before: '4 horas', after: '47 segundos' },
          { metric: 'Citas agendadas', before: 'base', after: '+185%' },
          { metric: 'Ingreso mensual', before: 'base', after: '+$34K' },
        ],
        timeline: '3 semanas para desplegar',
      },
      {
        icon: 'Cable',
        industry: 'Contratista Eléctrico',
        location: 'Sureste de EE.UU., 28 empleados',
        accent: 'accent-amber',
        challenge:
          'El dueño era el cuello de botella para todo. Cada cotización necesitaba su aprobación, cada trabajo necesitaba su despacho. Trabajaba semanas de 70 horas y aún no daba abasto.',
        solution:
          'Workflow de despacho automatizado asignando trabajos según ubicación y habilidad del técnico. Sistema de aprobación de cotizaciones con umbrales. Dashboard en tiempo real mostrando estado de trabajos, ubicación de cuadrillas y valor del pipeline.',
        results: [
          { metric: 'Tiempo liberado del dueño', before: '0 hrs/sem', after: '22 hrs/sem' },
          { metric: 'Tiempo de cotización', before: '3 días', after: '4 horas' },
          { metric: 'Tasa de completación', before: 'base', after: '+31%' },
        ],
        timeline: '5 semanas para desplegar',
      },
      {
        icon: 'Building2',
        industry: 'Empresa de Property Management',
        location: 'Colombia, 60 empleados',
        accent: 'accent-purple',
        challenge:
          'Las solicitudes de inquilinos llegaban por WhatsApp sin ningún seguimiento. Las tareas de mantenimiento se perdían. El equipo pasaba más tiempo buscando en el historial de chat que arreglando problemas.',
        solution:
          'Integración WhatsApp-a-CRM capturando cada solicitud de inquilino automáticamente. Enrutamiento automático de tickets por categoría y urgencia. Portal de inquilinos mostrando el estado de solicitudes en tiempo real.',
        results: [
          { metric: 'Tiempo de respuesta', before: '12 horas', after: '2 minutos' },
          { metric: 'Tickets sin resolver', before: 'base', after: '-74%' },
          { metric: 'Satisfacción de inquilinos', before: 'base', after: '+40%' },
        ],
        timeline: '4 semanas para desplegar',
      },
      {
        icon: 'Briefcase',
        industry: 'Firma de Servicios Profesionales',
        location: 'EE.UU., 15 empleados',
        accent: 'accent-violet',
        challenge:
          'El sitio web era un folleto. Cero leads desde búsqueda orgánica. El 100% del negocio nuevo venía de referidos, lo que hacía el crecimiento impredecible y fuera de su control.',
        solution:
          'Sitio web inteligente construido para conversión, no para vanidad. Estrategia de contenido SEO apuntando a palabras clave de alta intención. Formularios de captura con secuencias automáticas de nurture por email.',
        results: [
          { metric: 'Tráfico orgánico', before: 'base', after: '+280% en 90 días' },
          { metric: 'Leads entrantes', before: '0/mes', after: '12/mes' },
          { metric: 'Costo por lead', before: 'N/A', after: '$0 (orgánico)' },
        ],
        timeline: '6 semanas para desplegar',
      },
    ],
    includes: {
      label: 'Qué Incluye Cada Proyecto',
      items: [
        'Auditoría operativa (semana 1)',
        'Diseño de workflow personalizado',
        'Despliegue completo y pruebas',
        'Sesión de entrenamiento al equipo',
        'Soporte 30 días post-lanzamiento',
        'Documentación que realmente es tuya',
      ],
    },
    cta: {
      h2: 'Mira Lo Que Construiríamos Para Ti',
      sub: 'Cada negocio es diferente. Cuéntanos qué está roto y te mostramos cómo lo arreglaríamos — con alcance, cronograma y precio claros.',
      button: 'Iniciar Diagnóstico Gratis',
    },
    caseLabels: {
      challenge: 'EL DESAFÍO',
      solution: 'QUÉ CONSTRUIMOS',
      results: 'LOS RESULTADOS',
      timeline: 'Cronograma',
      before: 'Antes',
      after: 'Después',
    },
  },
} as const;

/* -- Icon mapping helper -- */

const iconMap = {
  Thermometer,
  Cable,
  Building2,
  Briefcase,
} as const;

function getIcon(name: string) {
  return iconMap[name as keyof typeof iconMap] || Briefcase;
}

/* -- Accent color helpers -- */

const accentBorderMap: Record<string, string> = {
  'accent-cyan': 'border-l-accent-cyan',
  'accent-amber': 'border-l-accent-amber',
  'accent-purple': 'border-l-accent-purple',
  'accent-violet': 'border-l-accent-violet',
};

const accentBgMap: Record<string, string> = {
  'accent-cyan': 'bg-accent-cyan/10',
  'accent-amber': 'bg-accent-amber/10',
  'accent-purple': 'bg-accent-purple/10',
  'accent-violet': 'bg-accent-violet/10',
};

const accentTextMap: Record<string, string> = {
  'accent-cyan': 'text-accent-cyan',
  'accent-amber': 'text-accent-amber',
  'accent-purple': 'text-accent-purple',
  'accent-violet': 'text-accent-violet',
};

/* -- Metadata -- */

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = content[locale as keyof typeof content] || content.en;

  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: generateAlternates('/case-studies', locale),
  };
}

/* -- Page -- */

export default async function CaseStudiesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = content[locale as keyof typeof content] || content.en;

  return (
    <div className="min-h-screen pt-24">
      {/* -- Hero -- */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-cyan/5 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-accent-cyan mb-4">
            <Trophy className="h-3 w-3" />
            {locale === 'es' ? 'Resultados' : 'Results'}
          </span>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {t.hero.h1}
          </h1>
          <p className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-3xl">
            {t.hero.sub}
          </p>
        </div>
      </section>

      {/* -- Aggregate Stats Banner -- */}
      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {t.stats.map((stat, i) => (
            <div
              key={i}
              className="rounded-2xl border border-accent-violet/20 bg-gradient-to-br from-accent-violet/5 to-transparent p-6 text-center"
            >
              <span className="block text-3xl sm:text-4xl font-bold font-[family-name:var(--font-display)] bg-gradient-to-r from-accent-violet to-accent-cyan bg-clip-text text-transparent">
                {stat.value}
              </span>
              <span className="block text-xs text-text-muted mt-2 leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* -- Case Study Cards -- */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="space-y-8">
          {t.cases.map((cs, i) => {
            const Icon = getIcon(cs.icon);
            const borderClass = accentBorderMap[cs.accent] || 'border-l-accent-violet';
            const bgClass = accentBgMap[cs.accent] || 'bg-accent-violet/10';
            const textClass = accentTextMap[cs.accent] || 'text-accent-violet';

            return (
              <div
                key={i}
                className={`rounded-2xl border border-border-subtle bg-bg-card/50 p-8 sm:p-10 border-l-4 ${borderClass}`}
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${bgClass}`}>
                    <Icon className={`h-6 w-6 ${textClass}`} />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-bold">
                      {cs.industry}
                    </h3>
                    <p className="text-sm text-text-muted">{cs.location}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Challenge */}
                  <div>
                    <span className="inline-block text-[11px] font-bold uppercase tracking-[0.15em] text-accent-amber mb-3">
                      {t.caseLabels.challenge}
                    </span>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {cs.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <span className="inline-block text-[11px] font-bold uppercase tracking-[0.15em] text-accent-cyan mb-3">
                      {t.caseLabels.solution}
                    </span>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {cs.solution}
                    </p>
                  </div>

                  {/* Results */}
                  <div>
                    <span className="inline-block text-[11px] font-bold uppercase tracking-[0.15em] text-accent-violet mb-3">
                      {t.caseLabels.results}
                    </span>
                    <div className="space-y-3">
                      {cs.results.map((r, ri) => (
                        <div key={ri} className="flex items-center justify-between text-sm">
                          <span className="text-text-muted">{r.metric}</span>
                          <span className="font-bold text-text-primary">{r.after}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-xs text-text-muted">
                      <Clock className="h-3 w-3" />
                      {t.caseLabels.timeline}: {cs.timeline}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* -- What Every Engagement Includes -- */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-2xl border border-accent-cyan/20 bg-gradient-to-br from-accent-cyan/5 to-accent-violet/5 p-8 sm:p-12">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.15em] text-accent-cyan mb-4">
            <CalendarCheck className="inline h-3 w-3 mr-1" />
            {t.includes.label}
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {t.includes.items.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-cyan shrink-0 mt-0.5" />
                <p className="text-text-secondary text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- CTA -- */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="rounded-2xl border border-accent-violet/20 bg-gradient-to-br from-accent-violet/5 to-accent-cyan/5 p-8 sm:p-16 text-center">
          <TrendingUp className="mx-auto h-6 w-6 text-accent-purple mb-4" />
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
