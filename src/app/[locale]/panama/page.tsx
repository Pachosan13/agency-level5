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
  Thermometer,
  Cable,
  Building2,
  Factory,
  MapPin,
  CheckCircle2,
  MessageSquare,
  ClipboardCheck,
  Users,
} from 'lucide-react';
import { generateAlternates } from '@/lib/seo';

type Props = { params: Promise<{ locale: string }> };

/* ── Bilingual content (hardcoded, no message files) ── */

const content = {
  en: {
    meta: {
      title: 'AI Automation for Businesses in Panama | Agency Level 5',
      description:
        'We help Panama service companies respond faster, close more deals, and eliminate manual operations. WhatsApp automation, smart websites, and field service workflows.',
    },
    hero: {
      h1: 'AI Automation for Businesses in Panama',
      sub: 'We help Panama\'s service companies respond faster, close more deals, and eliminate manual operations.',
    },
    market: {
      label: 'Why Panama, Why Now',
      h2: 'Panama\'s Service Sector Is Growing — But Operations Haven\'t Caught Up',
      points: [
        {
          icon: 'MessageSquare',
          title: 'WhatsApp Groups Are Not a System',
          desc: 'Most service companies in Panama run their field operations through WhatsApp groups and phone calls. Job assignments get lost, approvals take hours, and there\'s no audit trail when something goes wrong.',
        },
        {
          icon: 'ClipboardCheck',
          title: 'Excel Spreadsheets Are Not a Dashboard',
          desc: 'Revenue tracking, job scheduling, and client management live in spreadsheets that one person maintains. When that person is out, the business slows down. There\'s no real-time visibility.',
        },
        {
          icon: 'Users',
          title: 'No Local Agencies Specialize in This',
          desc: 'Panama has marketing agencies and web designers. But nobody focuses on the operational side — the workflows, the automations, the systems that make a 50-person service company run like a 200-person one.',
        },
      ],
    },
    industries: {
      label: 'Industries We Serve',
      h2: 'Built for Panama\'s Service Economy',
      items: [
        {
          icon: 'Thermometer',
          title: 'HVAC & Refrigeration',
          desc: 'Dispatch automation, preventive maintenance scheduling, technician routing, and post-service follow-ups. Built for companies managing 10+ daily service calls.',
        },
        {
          icon: 'Cable',
          title: 'Electrical & Engineering Services',
          desc: 'Project tracking, quote-to-invoice workflows, field crew management, and client approval flows. Designed for teams that juggle residential and commercial projects.',
        },
        {
          icon: 'Building2',
          title: 'Facility Management & Maintenance',
          desc: 'Work order management, vendor coordination, inspection checklists, and SLA tracking. For companies managing multiple buildings or client sites across the city.',
        },
        {
          icon: 'Factory',
          title: 'Industrial Services & Manufacturing Support',
          desc: 'Equipment maintenance logs, spare parts tracking, safety compliance workflows, and shutdown scheduling. For operations that can\'t afford unplanned downtime.',
        },
      ],
    },
    services: {
      label: 'What We Build',
      h2: 'Systems That Run While You Sleep',
      items: [
        {
          icon: 'Bot',
          title: 'AI Chatbots with WhatsApp',
          desc: 'Your clients are on WhatsApp. Your chatbot should be too. We build AI assistants that handle inquiries, book appointments, and qualify leads — in Spanish, 24/7, on the channel your clients already use.',
        },
        {
          icon: 'Zap',
          title: 'Workflow Automation',
          desc: 'Field dispatch, approval flows, job status updates, and handoff sequences — automated end to end. When a technician finishes a job, the invoice, follow-up, and review request happen automatically.',
        },
        {
          icon: 'Globe',
          title: 'Smart Websites',
          desc: 'Bilingual, fast, conversion-optimized websites that actually generate leads. Not a digital brochure — a working machine with forms, chat, and tracking built in.',
        },
        {
          icon: 'Search',
          title: 'Lead Generation',
          desc: 'Google Local, organic SEO, and targeted paid campaigns designed for Panama\'s market. We help you show up when someone in your city searches for what you do.',
        },
        {
          icon: 'BarChart3',
          title: 'Operational Consulting',
          desc: 'We start with a diagnostic of your current operations — where the bottlenecks are, where time leaks, and where manual work can be replaced with systems. Then we build the fix.',
        },
      ],
    },
    credibility: {
      label: 'Local Knowledge',
      h2: 'We\'ve Done the Research',
      points: [
        'We\'ve prospected and studied 50+ Panama service companies across HVAC, electrical, facility management, and industrial services.',
        'We understand the operational challenges of field service businesses in the Canal Zone and metropolitan area — the dispatch chaos, the WhatsApp-driven approvals, the lack of reporting.',
        'Our systems are built in Spanish first, with pricing and workflows designed for the Panamanian market.',
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
      title: 'Automatización con IA para Empresas en Panamá | Agency Level 5',
      description:
        'Ayudamos a empresas de servicios en Panamá a responder más rápido, cerrar más negocios y eliminar operaciones manuales. Automatización de WhatsApp, sitios web inteligentes y flujos de trabajo para campo.',
    },
    hero: {
      h1: 'Automatización con IA para Empresas en Panamá',
      sub: 'Ayudamos a las empresas de servicios de Panamá a responder más rápido, cerrar más negocios y eliminar operaciones manuales.',
    },
    market: {
      label: 'Por Qué Panamá, Por Qué Ahora',
      h2: 'El Sector de Servicios de Panamá Crece — Pero las Operaciones No Han Seguido el Ritmo',
      points: [
        {
          icon: 'MessageSquare',
          title: 'Los Grupos de WhatsApp No Son un Sistema',
          desc: 'La mayoría de las empresas de servicios en Panamá manejan sus operaciones de campo con grupos de WhatsApp y llamadas. Las asignaciones se pierden, las aprobaciones tardan horas y no hay registro cuando algo sale mal.',
        },
        {
          icon: 'ClipboardCheck',
          title: 'Las Hojas de Excel No Son un Dashboard',
          desc: 'El seguimiento de ingresos, la programación de trabajos y la gestión de clientes viven en hojas de cálculo que una persona mantiene. Cuando esa persona falta, el negocio se frena. No hay visibilidad en tiempo real.',
        },
        {
          icon: 'Users',
          title: 'Ninguna Agencia Local Se Especializa en Esto',
          desc: 'Panamá tiene agencias de marketing y diseñadores web. Pero nadie se enfoca en el lado operativo — los workflows, las automatizaciones, los sistemas que hacen que una empresa de 50 personas opere como una de 200.',
        },
      ],
    },
    industries: {
      label: 'Industrias que Atendemos',
      h2: 'Construido para la Economía de Servicios de Panamá',
      items: [
        {
          icon: 'Thermometer',
          title: 'HVAC y Refrigeración',
          desc: 'Automatización de despacho, programación de mantenimiento preventivo, ruteo de técnicos y seguimientos post-servicio. Para empresas que manejan 10+ llamadas diarias de servicio.',
        },
        {
          icon: 'Cable',
          title: 'Servicios Eléctricos e Ingeniería',
          desc: 'Seguimiento de proyectos, flujos cotización-a-factura, gestión de cuadrillas en campo y flujos de aprobación de clientes. Para equipos que manejan proyectos residenciales y comerciales.',
        },
        {
          icon: 'Building2',
          title: 'Facility Management y Mantenimiento',
          desc: 'Gestión de órdenes de trabajo, coordinación de proveedores, checklists de inspección y seguimiento de SLAs. Para empresas que manejan múltiples edificios o sitios de clientes.',
        },
        {
          icon: 'Factory',
          title: 'Servicios Industriales y Soporte de Manufactura',
          desc: 'Bitácoras de mantenimiento de equipos, tracking de repuestos, flujos de cumplimiento de seguridad y programación de paradas. Para operaciones que no pueden permitirse tiempo muerto no planificado.',
        },
      ],
    },
    services: {
      label: 'Lo Que Construimos',
      h2: 'Sistemas que Trabajan Mientras Duermes',
      items: [
        {
          icon: 'Bot',
          title: 'Chatbots con IA en WhatsApp',
          desc: 'Tus clientes están en WhatsApp. Tu chatbot también debería estarlo. Construimos asistentes de IA que atienden consultas, agendan citas y califican leads — en español, 24/7, en el canal que tus clientes ya usan.',
        },
        {
          icon: 'Zap',
          title: 'Automatización de Workflows',
          desc: 'Despacho de campo, flujos de aprobación, actualizaciones de estado de trabajos y secuencias de handoff — automatizados de principio a fin. Cuando un técnico termina un trabajo, la factura, el seguimiento y la solicitud de reseña suceden automáticamente.',
        },
        {
          icon: 'Globe',
          title: 'Sitios Web Inteligentes',
          desc: 'Sitios web bilingües, rápidos y optimizados para conversión que realmente generan leads. No un folleto digital — una máquina funcional con formularios, chat y tracking integrados.',
        },
        {
          icon: 'Search',
          title: 'Generación de Leads',
          desc: 'Google Local, SEO orgánico y campañas pagadas dirigidas para el mercado panameño. Te ayudamos a aparecer cuando alguien en tu ciudad busca lo que haces.',
        },
        {
          icon: 'BarChart3',
          title: 'Consultoría Operativa',
          desc: 'Empezamos con un diagnóstico de tus operaciones actuales — dónde están los cuellos de botella, dónde se pierde tiempo y dónde el trabajo manual se puede reemplazar con sistemas. Después construimos la solución.',
        },
      ],
    },
    credibility: {
      label: 'Conocimiento Local',
      h2: 'Hemos Hecho la Investigación',
      points: [
        'Hemos prospectado y estudiado más de 50 empresas de servicios en Panamá en HVAC, electricidad, facility management y servicios industriales.',
        'Entendemos los desafíos operativos de las empresas de servicio en campo en la Zona del Canal y el área metropolitana — el caos del despacho, las aprobaciones por WhatsApp, la falta de reportes.',
        'Nuestros sistemas se construyen primero en español, con precios y flujos de trabajo diseñados para el mercado panameño.',
      ],
    },
    cta: {
      h2: '¿Listo para Mejorar tus Operaciones?',
      sub: 'Toma nuestro diagnóstico gratuito de 3 minutos para descubrir dónde están tus mayores cuellos de botella operativos — y qué arreglar primero.',
      button: 'Iniciar Diagnóstico Gratis',
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
  Thermometer,
  Cable,
  Building2,
  Factory,
  MapPin,
  MessageSquare,
  ClipboardCheck,
  Users,
} as const;

function getIcon(name: string) {
  return iconMap[name as keyof typeof iconMap] || Zap;
}

/* ── Schema ── */

function generatePanamaServiceSchema(locale: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name:
      locale === 'es'
        ? 'Automatización con IA para Empresas en Panamá'
        : 'AI Automation for Businesses in Panama',
    description:
      locale === 'es'
        ? 'Automatización de operaciones, chatbots con IA en WhatsApp, sitios web inteligentes y generación de leads para empresas de servicios en Panamá.'
        : 'Operational automation, AI chatbots on WhatsApp, smart websites, and lead generation for service companies in Panama.',
    provider: {
      '@type': 'Organization',
      name: 'Agency Level 5',
      url: 'https://agencylevel5.com',
    },
    url: `https://agencylevel5.com/${locale}/panama`,
    serviceType: 'AI Automation & Operational Consulting',
    areaServed: {
      '@type': 'Country',
      name: 'Panama',
      sameAs: 'https://en.wikipedia.org/wiki/Panama',
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
    alternates: generateAlternates('/panama', locale),
  };
}

/* ── Page ── */

export default async function PanamaPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = content[locale as keyof typeof content] || content.en;
  const schema = generatePanamaServiceSchema(locale);

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

      {/* ── Local Credibility ── */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-2xl border border-accent-cyan/20 bg-gradient-to-br from-accent-cyan/5 to-accent-violet/5 p-8 sm:p-12">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.15em] text-accent-cyan mb-4">
            {t.credibility.label}
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold tracking-tight mb-8">
            {t.credibility.h2}
          </h2>

          <ul className="space-y-5">
            {t.credibility.points.map((point, i) => (
              <li key={i} className="flex gap-4">
                <CheckCircle2 className="h-5 w-5 text-accent-cyan shrink-0 mt-0.5" />
                <p className="text-text-secondary leading-relaxed">{point}</p>
              </li>
            ))}
          </ul>
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
