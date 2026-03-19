// /src/app/[locale]/services/contractors/page.tsx
import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import {
  ArrowLeft,
  ArrowRight,
  PhoneMissed,
  Send,
  Kanban,
  CalendarCheck,
  Star,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  HardHat,
  TrendingUp,
  Wrench,
  Zap,
  Paintbrush,
  Hammer,
  Plug,
  TreePine,
  Droplets,
  BrickWall,
} from 'lucide-react';
import {
  generateServiceSchema,
  generateFAQSchema,
  generateAlternates,
} from '@/lib/seo';

type Props = { params: Promise<{ locale: string }> };

const SLUG = 'contractors';

const content = {
  en: {
    back: 'Services',
    meta: {
      title:
        'Business Automation for Contractors — CRM, Lead Follow-Up & Job Management | Agency Level 5',
      description:
        'Contractors lose jobs to slow follow-up and manual processes. We build CRM pipelines, automated lead response, and job management systems. Starts at $2,000.',
    },
    hero: {
      headline: "You Didn't Start a Business to Chase Paperwork.",
      sub: 'We build the back-office systems that let contractors focus on the job site, not the inbox.',
    },
    dilemma: {
      title: "The Contractor's Dilemma",
      pains: [
        {
          title: 'Wearing Too Many Hats',
          description:
            "You are quoting jobs, managing crews, AND trying to follow up on leads. Something always falls through the cracks — and it is usually the money.",
        },
        {
          title: 'Slow Response = Lost Job',
          description:
            "By the time you call back, the homeowner already hired someone else. You did not lose the job on quality or price. You lost it on speed.",
        },
        {
          title: 'The Sticky Note CRM',
          description:
            'Your "CRM" is a combination of text messages, sticky notes, and your memory. That worked at 10 jobs a month. It breaks at 30.',
        },
      ],
    },
    solutions: {
      title: 'What We Build for Contractors',
      items: [
        {
          title: 'Missed Call Text-Back',
          description:
            'Never lose a lead because you are on a job. Missed call triggers an instant text: "Hey, we saw you called — how can we help?" Keeps the conversation alive.',
        },
        {
          title: 'Automated Estimate Follow-Up',
          description:
            "Sent a quote? Auto follow-up on day 2, 5, and 10. No more wondering if they got it. No more forgetting to chase it down.",
        },
        {
          title: 'Pipeline Management',
          description:
            'New Lead, Estimate Sent, Sold, Scheduled, Complete, Review — every job moves through clear stages. Nothing gets lost. You see the full picture.',
        },
        {
          title: 'Online Booking System',
          description:
            'Customers book directly from your website or Google listing. Syncs with your calendar. No phone tag. No double-booking.',
        },
        {
          title: 'Review Generation Engine',
          description:
            'Automated review request after every completed job. Makes it easy for happy customers to leave you a 5-star review on Google.',
        },
        {
          title: 'Weekly Business Dashboard',
          description:
            'Leads, estimates, close rate, revenue — in one screen. Know how your business is doing every Monday morning, not every tax season.',
        },
      ],
    },
    trades: {
      title: 'Built for These Trades',
      items: [
        { name: 'General Contractors' },
        { name: 'Roofing Companies' },
        { name: 'Plumbing Services' },
        { name: 'Electrical Contractors' },
        { name: 'Landscaping & Hardscaping' },
        { name: 'Painting Companies' },
        { name: 'Remodeling & Renovation' },
        { name: 'Concrete & Masonry' },
      ],
    },
    numbers: {
      title: 'The Numbers',
      stats: [
        {
          value: '10+ hrs/week',
          label:
            'Average contractor wastes on admin tasks that can be automated',
        },
        {
          value: '78%',
          label: 'of homeowners hire the first contractor who responds',
        },
        {
          value: '2-3x',
          label:
            'more booked estimates our contractor clients see within 30 days',
        },
      ],
    },
    pricing: {
      title: 'Pricing',
      text: 'Contractor automation starts at $2,000 for a single workflow (like missed-call text-back). Full pipeline setup with CRM, automations, and AI answering: $5,000-$12,000.',
      cta: 'Get Your Custom Quote',
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        {
          question: "I'm not tech-savvy. Will I be able to use this?",
          answer:
            'Yes. We build for operators, not IT teams. If you can send a text message, you can run the system. We train you and your team, and we are available for support after launch.',
        },
        {
          question: 'Which CRM do you recommend?',
          answer:
            'GoHighLevel for most contractors. It handles CRM, texting, reviews, and booking in one platform. No juggling five different subscriptions.',
        },
        {
          question:
            'Can I start with just one automation and add more later?',
          answer:
            'Absolutely. Most contractors start with missed-call text-back ($2K) because it pays for itself in the first month. Then they expand to full pipeline and review automation.',
        },
        {
          question: 'Do you work with my existing website?',
          answer:
            'Yes. We can add lead capture, chatbots, and speed-to-lead to your current site. Or, if your site needs an upgrade, we build smart websites that convert visitors into booked jobs.',
        },
      ],
    },
    cta: {
      headline: 'Stop Losing Jobs to Slow Follow-Up',
      sub: 'Get a free Contractor Business Diagnostic. We will map your current workflow and show you exactly where jobs are leaking out.',
      button: 'Get Your Free Contractor Business Diagnostic',
    },
  },
  es: {
    back: 'Servicios',
    meta: {
      title:
        'Automatizacion para Contratistas — CRM, Seguimiento de Leads y Gestion de Trabajos | Agency Level 5',
      description:
        'Los contratistas pierden trabajos por seguimiento lento y procesos manuales. Construimos pipelines CRM, respuesta automatica a leads y gestion de trabajos. Desde $2,000.',
    },
    hero: {
      headline: 'No Empezaste un Negocio para Perseguir Papeles.',
      sub: 'Construimos los sistemas de back-office que permiten a los contratistas enfocarse en la obra, no en la bandeja de entrada.',
    },
    dilemma: {
      title: 'El Dilema del Contratista',
      pains: [
        {
          title: 'Demasiados Sombreros',
          description:
            'Estas cotizando trabajos, manejando cuadrillas, Y tratando de dar seguimiento a leads. Algo siempre se cae — y usualmente es el dinero.',
        },
        {
          title: 'Respuesta Lenta = Trabajo Perdido',
          description:
            'Para cuando devuelves la llamada, el cliente ya contrato a otro. No perdiste el trabajo por calidad ni precio. Lo perdiste por velocidad.',
        },
        {
          title: 'El CRM de Post-its',
          description:
            'Tu "CRM" es una combinacion de mensajes de texto, notas adhesivas y tu memoria. Eso funcionaba con 10 trabajos al mes. Se rompe con 30.',
        },
      ],
    },
    solutions: {
      title: 'Lo Que Construimos para Contratistas',
      items: [
        {
          title: 'Texto Automatico por Llamada Perdida',
          description:
            'Nunca pierdas un lead porque estas en una obra. Llamada perdida dispara un texto instantaneo: "Hola, vimos que llamaste — en que te podemos ayudar?" Mantiene la conversacion viva.',
        },
        {
          title: 'Seguimiento Automatico de Cotizaciones',
          description:
            'Enviaste una cotizacion? Auto seguimiento en dia 2, 5 y 10. Sin preguntarte si la recibieron. Sin olvidar darle seguimiento.',
        },
        {
          title: 'Gestion de Pipeline',
          description:
            'Lead Nuevo, Cotizacion Enviada, Vendido, Agendado, Completado, Resena — cada trabajo se mueve por etapas claras. Nada se pierde. Ves el panorama completo.',
        },
        {
          title: 'Sistema de Reservas Online',
          description:
            'Los clientes reservan directamente desde tu sitio web o tu ficha de Google. Se sincroniza con tu calendario. Sin jugar al telefono. Sin doble reserva.',
        },
        {
          title: 'Motor de Generacion de Resenas',
          description:
            'Solicitud automatica de resena despues de cada trabajo completado. Facilita que los clientes satisfechos te dejen una resena de 5 estrellas en Google.',
        },
        {
          title: 'Dashboard Semanal del Negocio',
          description:
            'Leads, cotizaciones, tasa de cierre, ingresos — en una pantalla. Sabe como va tu negocio cada lunes, no cada temporada de impuestos.',
        },
      ],
    },
    trades: {
      title: 'Construido para Estos Oficios',
      items: [
        { name: 'Contratistas Generales' },
        { name: 'Empresas de Techos' },
        { name: 'Servicios de Plomeria' },
        { name: 'Contratistas Electricos' },
        { name: 'Paisajismo y Hardscaping' },
        { name: 'Empresas de Pintura' },
        { name: 'Remodelacion y Renovacion' },
        { name: 'Concreto y Mamposteria' },
      ],
    },
    numbers: {
      title: 'Los Numeros',
      stats: [
        {
          value: '10+ hrs/semana',
          label:
            'El contratista promedio pierde en tareas administrativas que se pueden automatizar',
        },
        {
          value: '78%',
          label:
            'de los clientes contratan al primer contratista que responde',
        },
        {
          value: '2-3x',
          label:
            'mas cotizaciones agendadas ven nuestros clientes contratistas en 30 dias',
        },
      ],
    },
    pricing: {
      title: 'Precios',
      text: 'La automatizacion para contratistas comienza en $2,000 por un solo flujo de trabajo (como texto automatico por llamada perdida). Pipeline completo con CRM, automatizaciones y respuesta con IA: $5,000-$12,000.',
      cta: 'Obtener Tu Cotizacion',
    },
    faq: {
      title: 'Preguntas Frecuentes',
      items: [
        {
          question:
            'No soy bueno con la tecnologia. Voy a poder usar esto?',
          answer:
            'Si. Construimos para operadores, no para equipos de IT. Si puedes enviar un mensaje de texto, puedes operar el sistema. Te entrenamos a ti y a tu equipo, y estamos disponibles para soporte despues del lanzamiento.',
        },
        {
          question: 'Que CRM recomiendan?',
          answer:
            'GoHighLevel para la mayoria de contratistas. Maneja CRM, mensajes de texto, resenas y reservas en una sola plataforma. Sin malabarear cinco suscripciones diferentes.',
        },
        {
          question:
            'Puedo empezar con una sola automatizacion y agregar mas despues?',
          answer:
            'Por supuesto. La mayoria de contratistas empiezan con texto automatico por llamada perdida ($2K) porque se paga solo en el primer mes. Luego expanden a pipeline completo y automatizacion de resenas.',
        },
        {
          question: 'Trabajan con mi sitio web actual?',
          answer:
            'Si. Podemos agregar captura de leads, chatbots y respuesta rapida a tu sitio actual. O, si tu sitio necesita una mejora, construimos smart websites que convierten visitantes en trabajos agendados.',
        },
      ],
    },
    cta: {
      headline: 'Deja de Perder Trabajos por Seguimiento Lento',
      sub: 'Obtiene un Diagnostico de Negocio para Contratistas gratis. Mapearemos tu flujo actual y te mostraremos exactamente donde se estan fugando los trabajos.',
      button: 'Obtener Tu Diagnostico Gratis para Contratistas',
    },
  },
};

const solutionIcons = [PhoneMissed, Send, Kanban, CalendarCheck, Star, BarChart3];
const tradeIcons = [HardHat, HardHat, Droplets, Plug, TreePine, Paintbrush, Hammer, BrickWall];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = locale === 'es' ? content.es : content.en;
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: generateAlternates(`/services/${SLUG}`, locale),
  };
}

export default async function ContractorsPage({ params }: Props) {
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
              {locale === 'es' ? 'Contratistas' : 'Contractors'}
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

      {/* ─── THE CONTRACTOR'S DILEMMA ─── */}
      <section className="py-24 bg-bg-secondary">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold tracking-tight mb-12">
            {t.dilemma.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.dilemma.pains.map((pain, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border-subtle bg-bg-card/50 p-8"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/10 mb-4">
                  <Wrench className="h-5 w-5 text-amber-400" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold mb-3">
                  {pain.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {pain.description}
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

      {/* ─── BUILT FOR THESE TRADES ─── */}
      <section className="py-24 bg-bg-secondary">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold tracking-tight mb-12">
            {t.trades.title}
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {t.trades.items.map((trade, i) => {
              const Icon = tradeIcons[i];
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-2xl border border-border-subtle bg-bg-card/50 p-5 transition-all hover:border-accent-cyan/20 hover:bg-bg-card"
                >
                  <Icon className="h-5 w-5 text-accent-cyan shrink-0" />
                  <span className="text-sm font-semibold">{trade.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── THE NUMBERS ─── */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center gap-3 mb-12">
            <TrendingUp className="h-6 w-6 text-accent-cyan" />
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold tracking-tight">
              {t.numbers.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.numbers.stats.map((stat, i) => (
              <div
                key={i}
                className="rounded-2xl border border-accent-cyan/20 bg-accent-cyan/5 p-8 text-center"
              >
                <div className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-accent-cyan mb-3">
                  {stat.value}
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {stat.label}
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
            href="/diagnostic"
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
