// /src/app/[locale]/services/hvac-automation/page.tsx
import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import {
  ArrowLeft,
  ArrowRight,
  Phone,
  Zap,
  Clock,
  CalendarCheck,
  Star,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  AlertTriangle,
  TrendingUp,
} from 'lucide-react';
import {
  generateServiceSchema,
  generateFAQSchema,
  generateAlternates,
} from '@/lib/seo';

type Props = { params: Promise<{ locale: string }> };

const SLUG = 'hvac-automation';

const content = {
  en: {
    back: 'Services',
    meta: {
      title:
        'AI Automation for HVAC Companies — Lead Response, Scheduling & Dispatch | Agency Level 5',
      description:
        'HVAC companies lose $15K+/month to missed calls and slow follow-up. We build AI answering systems, automated scheduling, and dispatch workflows that recover lost revenue.',
    },
    hero: {
      headline: 'Your Techs Are on the Roof. Your Leads Are Walking Away.',
      sub: 'We build the systems that answer, qualify, and book while your team is doing the work that matters.',
    },
    revenueLeak: {
      title: 'The HVAC Revenue Leak',
      intro:
        'Every unanswered call is a job your competitor books. Here is the math most HVAC owners never run:',
      metrics: [
        {
          value: '62%',
          label: 'of calls to HVAC companies go unanswered during business hours',
        },
        {
          value: '$3,500 - $8,500',
          label: 'average HVAC job value',
        },
        {
          value: '$22,500/mo',
          label:
            'walking out the door — 30 missed calls x $5,000 avg x 15% close rate',
        },
      ],
    },
    solutions: {
      title: 'What We Build for HVAC Companies',
      items: [
        {
          title: 'AI Answering System',
          description:
            'Picks up in under 5 seconds. Qualifies the caller, captures job details, and books the appointment — no hold music, no voicemail.',
        },
        {
          title: 'Speed-to-Lead Automation',
          description:
            'Form submission or missed call triggers a text-back in 30 seconds. The homeowner gets a response before they finish Googling your competitor.',
        },
        {
          title: 'Dispatch & Scheduling Workflows',
          description:
            'Auto-assign techs by zone, skill set, and availability. Your dispatcher stops juggling spreadsheets and starts managing exceptions.',
        },
        {
          title: 'Appointment Reminder Sequences',
          description:
            'Text and email reminders at 24 hours and 2 hours before the appointment. Reduces no-shows by 40%.',
        },
        {
          title: 'Post-Job Review Automation',
          description:
            'Automatic Google review request sent after every completed job. Your 5-star count grows on autopilot.',
        },
        {
          title: 'Real-Time Pipeline Dashboard',
          description:
            'Know your numbers daily, not monthly. Open estimates, booked jobs, revenue closed, tech utilization — one screen.',
        },
      ],
    },
    results: {
      title: 'Results from HVAC Clients',
      stats: [
        { value: '4+ hrs → 47 sec', label: 'Lead response time' },
        { value: '+185%', label: 'Booked appointments' },
        { value: '+$34,000', label: 'Monthly revenue increase' },
        { value: '15+ hrs/week', label: 'Owner time freed' },
      ],
    },
    process: {
      title: 'How It Works',
      steps: [
        {
          week: 'Week 1',
          title: 'HVAC Operations Audit',
          description:
            'We map your entire lead-to-invoice flow. Where do calls land? How fast do you respond? Where do jobs fall through the cracks? We find every leak.',
        },
        {
          week: 'Weeks 2-3',
          title: 'Build & Configure',
          description:
            'Pipelines, automations, AI answering system, dashboard — all built and tested against your real workflow. No generic templates.',
        },
        {
          week: 'Week 4',
          title: 'Go Live + Team Training',
          description:
            'Your dispatcher and techs learn the system. We stay on call for the first two weeks after launch to handle any adjustments.',
        },
      ],
    },
    pricing: {
      title: 'Pricing',
      text: 'HVAC automation packages start at $4,000. Most HVAC companies choose our Growth tier ($5K-$12K) for the complete pipeline + AI answering system.',
      cta: 'Get Your Custom Quote',
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        {
          question: 'Will this work with ServiceTitan / Housecall Pro?',
          answer:
            'Yes. We integrate with your existing field service software. ServiceTitan, Housecall Pro, Jobber, FieldEdge — we have built connections to all of them. Your techs keep using what they know.',
        },
        {
          question: 'Do I need to change my phone number?',
          answer:
            'No. We forward or port your existing number into the system. Your customers call the same number they always have. Nothing changes on their end.',
        },
        {
          question: 'How fast can this be running?',
          answer:
            'Most HVAC setups are live within 3 weeks. Simple configurations (missed-call text-back + pipeline) can be running in under 10 days.',
        },
        {
          question: 'What happens during off-hours?',
          answer:
            'The AI system runs 24/7, including weekends and holidays. Emergency calls get flagged and routed. Non-urgent requests get booked for the next available slot. You never miss a lead again.',
        },
      ],
    },
    cta: {
      headline: 'Stop Losing $22K/Month to Missed Calls',
      sub: 'Get a free HVAC Revenue Leak Audit. We will show you exactly where jobs are falling through and what it is costing you.',
      button: 'Get Your HVAC Revenue Leak Audit',
    },
  },
  es: {
    back: 'Servicios',
    meta: {
      title:
        'Automatizacion con IA para Empresas de HVAC — Respuesta a Leads, Agendamiento y Despacho | Agency Level 5',
      description:
        'Las empresas de HVAC pierden $15K+/mes por llamadas perdidas y seguimiento lento. Construimos sistemas de respuesta con IA, agendamiento automatizado y despacho.',
    },
    hero: {
      headline:
        'Tus Tecnicos Estan en el Techo. Tus Leads Se Estan Yendo.',
      sub: 'Construimos los sistemas que contestan, califican y agendan mientras tu equipo hace el trabajo que importa.',
    },
    revenueLeak: {
      title: 'La Fuga de Ingresos en HVAC',
      intro:
        'Cada llamada sin contestar es un trabajo que agenda tu competencia. Aqui van los numeros que la mayoria de duenos de HVAC nunca calculan:',
      metrics: [
        {
          value: '62%',
          label:
            'de las llamadas a empresas de HVAC no se contestan en horario laboral',
        },
        {
          value: '$3,500 - $8,500',
          label: 'valor promedio de un trabajo de HVAC',
        },
        {
          value: '$22,500/mes',
          label:
            'se van por la puerta — 30 llamadas perdidas x $5,000 promedio x 15% cierre',
        },
      ],
    },
    solutions: {
      title: 'Lo Que Construimos para Empresas de HVAC',
      items: [
        {
          title: 'Sistema de Respuesta con IA',
          description:
            'Contesta en menos de 5 segundos. Califica al cliente, captura detalles del trabajo y agenda la cita — sin musica de espera, sin buzon de voz.',
        },
        {
          title: 'Velocidad de Respuesta a Leads',
          description:
            'Un formulario o llamada perdida dispara un mensaje de texto en 30 segundos. El cliente recibe respuesta antes de terminar de buscar a tu competencia.',
        },
        {
          title: 'Flujos de Despacho y Agendamiento',
          description:
            'Asignacion automatica de tecnicos por zona, habilidad y disponibilidad. Tu despachador deja de hacer malabarismo con hojas de calculo.',
        },
        {
          title: 'Secuencias de Recordatorio de Citas',
          description:
            'Recordatorios por texto y email a 24 horas y 2 horas antes de la cita. Reduce las ausencias en un 40%.',
        },
        {
          title: 'Automatizacion de Resenas Post-Trabajo',
          description:
            'Solicitud automatica de resena en Google despues de cada trabajo completado. Tu conteo de 5 estrellas crece en piloto automatico.',
        },
        {
          title: 'Dashboard de Pipeline en Tiempo Real',
          description:
            'Conoce tus numeros diariamente, no mensualmente. Estimados abiertos, trabajos agendados, ingresos cerrados, utilizacion de tecnicos — una pantalla.',
        },
      ],
    },
    results: {
      title: 'Resultados con Clientes de HVAC',
      stats: [
        { value: '4+ hrs → 47 seg', label: 'Tiempo de respuesta a leads' },
        { value: '+185%', label: 'Citas agendadas' },
        { value: '+$34,000', label: 'Aumento mensual de ingresos' },
        { value: '15+ hrs/semana', label: 'Tiempo del dueno liberado' },
      ],
    },
    process: {
      title: 'Como Funciona',
      steps: [
        {
          week: 'Semana 1',
          title: 'Auditoria de Operaciones HVAC',
          description:
            'Mapeamos todo tu flujo de lead-a-factura. Donde caen las llamadas? Que tan rapido respondes? Donde se pierden los trabajos? Encontramos cada fuga.',
        },
        {
          week: 'Semanas 2-3',
          title: 'Construccion y Configuracion',
          description:
            'Pipelines, automatizaciones, sistema de respuesta con IA, dashboard — todo construido y probado contra tu flujo real. Sin plantillas genericas.',
        },
        {
          week: 'Semana 4',
          title: 'Lanzamiento + Entrenamiento del Equipo',
          description:
            'Tu despachador y tecnicos aprenden el sistema. Nos mantenemos disponibles las primeras dos semanas despues del lanzamiento para cualquier ajuste.',
        },
      ],
    },
    pricing: {
      title: 'Precios',
      text: 'Los paquetes de automatizacion HVAC comienzan en $4,000. La mayoria de las empresas de HVAC eligen nuestro tier Growth ($5K-$12K) por el pipeline completo + sistema de respuesta con IA.',
      cta: 'Obtener Tu Cotizacion',
    },
    faq: {
      title: 'Preguntas Frecuentes',
      items: [
        {
          question: 'Funciona con ServiceTitan / Housecall Pro?',
          answer:
            'Si. Nos integramos con tu software de servicio en campo existente. ServiceTitan, Housecall Pro, Jobber, FieldEdge — hemos construido conexiones con todos. Tus tecnicos siguen usando lo que conocen.',
        },
        {
          question: 'Necesito cambiar mi numero de telefono?',
          answer:
            'No. Redirigimos o portamos tu numero existente al sistema. Tus clientes llaman al mismo numero de siempre. Nada cambia para ellos.',
        },
        {
          question: 'Que tan rapido puede estar funcionando?',
          answer:
            'La mayoria de configuraciones HVAC estan en vivo en 3 semanas. Configuraciones simples (texto automatico por llamada perdida + pipeline) pueden estar corriendo en menos de 10 dias.',
        },
        {
          question: 'Que pasa fuera de horario?',
          answer:
            'El sistema de IA funciona 24/7, incluyendo fines de semana y feriados. Las llamadas de emergencia se marcan y redirigen. Las solicitudes no urgentes se agendan para el proximo horario disponible. Nunca vuelves a perder un lead.',
        },
      ],
    },
    cta: {
      headline: 'Deja de Perder $22K/Mes por Llamadas Perdidas',
      sub: 'Obtiene una Auditoria de Fuga de Ingresos HVAC gratis. Te mostraremos exactamente donde se pierden los trabajos y cuanto te esta costando.',
      button: 'Obtener Tu Auditoria de Fuga de Ingresos HVAC',
    },
  },
};

const solutionIcons = [Phone, Zap, CalendarCheck, Clock, Star, BarChart3];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = locale === 'es' ? content.es : content.en;
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: generateAlternates(`/services/${SLUG}`, locale),
  };
}

export default async function HvacAutomationPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = locale === 'es' ? content.es : content.en;

  const serviceSchema = generateServiceSchema(locale, {
    name: t.meta.title,
    description: t.meta.description,
    slug: SLUG,
  });

  const faqSchema = generateFAQSchema(
    t.faq.items.map((item) => ({
      question: item.question,
      answer: item.answer,
    }))
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

      {/* ─── HERO ─── */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-text-muted hover:text-text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-3 w-3" /> {t.back}
          </Link>

          <div className="max-w-4xl">
            <span className="inline-block rounded-full border border-accent-violet/30 bg-accent-violet/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent-violet mb-6">
              {locale === 'es' ? 'HVAC' : 'HVAC'}
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {t.hero.headline}
            </h1>
            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-3xl">
              {t.hero.sub}
            </p>
          </div>
        </div>
      </section>

      {/* ─── THE HVAC REVENUE LEAK ─── */}
      <section className="py-24 bg-bg-secondary">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="h-6 w-6 text-amber-400" />
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold tracking-tight">
              {t.revenueLeak.title}
            </h2>
          </div>
          <p className="text-text-secondary leading-relaxed mb-12 max-w-3xl">
            {t.revenueLeak.intro}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.revenueLeak.metrics.map((metric, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border-subtle bg-bg-card/50 p-8 text-center"
              >
                <div className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-accent-cyan mb-3">
                  {metric.value}
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT WE BUILD ─── */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold tracking-tight mb-12">
            {t.solutions.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.solutions.items.map((item, i) => {
              const Icon = solutionIcons[i];
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-border-subtle bg-bg-card/50 p-8 transition-all hover:border-accent-violet/20 hover:bg-bg-card"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-violet/10">
                      <Icon className="h-5 w-5 text-accent-violet" />
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-bold">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── RESULTS ─── */}
      <section className="py-24 bg-bg-secondary">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center gap-3 mb-12">
            <TrendingUp className="h-6 w-6 text-accent-cyan" />
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold tracking-tight">
              {t.results.title}
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {t.results.stats.map((stat, i) => (
              <div
                key={i}
                className="rounded-2xl border border-accent-cyan/20 bg-accent-cyan/5 p-8 text-center"
              >
                <div className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-accent-cyan mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-text-secondary">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold tracking-tight mb-12">
            {t.process.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.process.steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-violet/10 text-sm font-bold text-accent-violet">
                    {i + 1}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-accent-purple">
                    {step.week}
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section className="py-24 bg-bg-secondary">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-2xl border border-border-subtle bg-bg-card/50 p-8 sm:p-12 max-w-3xl mx-auto text-center">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight mb-6">
              {t.pricing.title}
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              {t.pricing.text}
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-violet to-accent-purple px-8 py-4 text-sm font-bold text-white transition-all hover:shadow-[0_0_30px_rgba(124,58,237,0.3)] hover:scale-105"
            >
              {t.pricing.cta}{' '}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold tracking-tight mb-12">
            {t.faq.title}
          </h2>

          <div className="space-y-4 max-w-3xl">
            {t.faq.items.map((item, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-border-subtle bg-bg-card/50 transition-all hover:border-accent-violet/20"
              >
                <summary className="flex cursor-pointer items-center justify-between p-6 sm:p-8">
                  <h3 className="font-[family-name:var(--font-display)] text-base sm:text-lg font-bold pr-4">
                    {item.question}
                  </h3>
                  <ChevronDown className="h-5 w-5 text-text-muted shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-24 bg-bg-secondary">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            {t.cta.headline}
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
            {t.cta.sub}
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-violet to-accent-purple px-8 py-4 text-sm font-bold text-white transition-all hover:shadow-[0_0_30px_rgba(124,58,237,0.3)] hover:scale-105"
          >
            {t.cta.button}{' '}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
