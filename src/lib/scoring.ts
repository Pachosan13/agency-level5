import { AssessmentResult, AssessmentState, Pillar, PillarScore } from '@/data/diagnostic-types';
import { QUESTIONS } from '@/data/diagnostic-questions';

const PILLAR_LABELS: Record<Pillar, { en: string; es: string }> = {
  visibility: { en: 'Visibility', es: 'Visibilidad' },
  process: { en: 'Process Control', es: 'Control de Procesos' },
  execution: { en: 'Execution & Follow-up', es: 'Ejecución y Seguimiento' },
  approvals: { en: 'Approvals & Handoffs', es: 'Aprobaciones y Entregas' },
  reporting: { en: 'Reporting & Accountability', es: 'Informes y Responsabilidad' },
};

const MATURITY_LEVELS = {
  fragile: {
    label: { en: 'Fragile', es: 'Frágil' },
    description: {
      en: 'Operations depend heavily on individual memory and manual effort. High risk of error and burnout.',
      es: 'Las operaciones dependen en gran medida de la memoria individual y el esfuerzo manual. Alto riesgo de error y agotamiento.',
    },
    color: '#ef4444',
  },
  reactive: {
    label: { en: 'Reactive', es: 'Reactiva' },
    description: {
      en: 'Processes exist but are fragmented. Management spends most of their time firefighting instead of scaling.',
      es: 'Los procesos existen pero están fragmentados. La gerencia pasa la mayor parte de su tiempo apagando incendios en lugar de escalar.',
    },
    color: '#f59e0b',
  },
  functional: {
    label: { en: 'Functional but Constrained', es: 'Funcional pero Limitada' },
    description: {
      en: 'Solid foundation, but manual handoffs and visibility gaps are preventing the next level of growth.',
      es: 'Base sólida, pero las entregas manuales y las brechas de visibilidad impiden el siguiente nivel de crecimiento.',
    },
    color: '#3b82f6',
  },
  strong: {
    label: { en: 'Strong Foundation', es: 'Base Sólida' },
    description: {
      en: 'Highly digital and automated. Operations are a competitive advantage, not a bottleneck.',
      es: 'Altamente digital y automatizada. Las operaciones son una ventaja competitiva, no un cuello de botella.',
    },
    color: '#10b981',
  },
};

const BOTTLENECK_MAP: Record<Pillar, { title: { en: string; es: string }; description: { en: string; es: string } }> = {
  visibility: {
    title: { en: 'Operational Visibility Gap', es: 'Brecha de Visibilidad Operativa' },
    description: {
      en: 'Management lacks real-time insight into job status, leading to reactive decision-making.',
      es: 'La gerencia carece de información en tiempo real sobre el estado del trabajo, lo que lleva a una toma de decisiones reactiva.',
    },
  },
  process: {
    title: { en: 'Data Fragmentation', es: 'Fragmentación de Datos' },
    description: {
      en: 'Information is scattered across WhatsApp, Excel, and Email, creating islands of knowledge.',
      es: 'La información está dispersa en WhatsApp, Excel y correo electrónico, creando islas de conocimiento.',
    },
  },
  execution: {
    title: { en: 'Manual Follow-up Dependency', es: 'Dependencia de Seguimiento Manual' },
    description: {
      en: 'Work moves because people remember to push it, not because the system pulls it forward.',
      es: 'El trabajo se mueve porque las personas recuerdan impulsarlo, no porque el sistema lo atraiga.',
    },
  },
  approvals: {
    title: { en: 'Approval & Handoff Friction', es: 'Fricción en Aprobaciones y Entregas' },
    description: {
      en: 'Critical stages are delayed waiting for manual sign-offs or lost in email threads.',
      es: 'Las etapas críticas se retrasan esperando aprobaciones manuales o se pierden en hilos de correo.',
    },
  },
  reporting: {
    title: { en: 'Reporting Blindness', es: 'Ceguera de Informes' },
    description: {
      en: 'Lack of automated KPIs makes it impossible to identify where the business is actually losing money.',
      es: 'La falta de KPIs automatizados hace imposible identificar dónde está perdiendo dinero el negocio realmente.',
    },
  },
};

const RECOMMENDATIONS: Record<Pillar, { en: string; es: string }> = {
  visibility: {
    en: 'Centralize all work intake into a single digital source of truth to eliminate blind spots.',
    es: 'Centralice toda la entrada de trabajo en una única fuente digital de verdad para eliminar puntos ciegos.',
  },
  process: {
    en: 'Standardize core workflows and document handoff protocols to reduce dependency on specific individuals.',
    es: 'Estandarice los flujos de trabajo principales y documente los protocolos de entrega para reducir la dependencia de personas específicas.',
  },
  execution: {
    en: 'Implement automated task triggers and status alerts to replace manual follow-up loops.',
    es: 'Implemente activadores de tareas automatizados y alertas de estado para reemplazar los ciclos de seguimiento manual.',
  },
  approvals: {
    en: 'Digitize the approval chain with clear ownership and automated escalations for delayed sign-offs.',
    es: 'Digitalice la cadena de aprobación con una propiedad clara y escalamientos automatizados para firmas retrasadas.',
  },
  reporting: {
    en: 'Establish a real-time operational dashboard to track lead times, throughput, and bottleneck points.',
    es: 'Establezca un tablero operativo en tiempo real para rastrear los tiempos de entrega, el rendimiento y los puntos de cuello de botella.',
  },
};

export function calculateResults(state: AssessmentState): AssessmentResult {
  const pillarTotals: Record<Pillar, { score: number; count: number }> = {
    visibility: { score: 0, count: 0 },
    process: { score: 0, count: 0 },
    execution: { score: 0, count: 0 },
    approvals: { score: 0, count: 0 },
    reporting: { score: 0, count: 0 },
  };

  let totalScore = 0;
  let totalQuestions = 0;

  Object.entries(state.answers).forEach(([qId, aId]) => {
    const question = QUESTIONS.find((q) => q.id === qId);
    if (!question) return;

    const answer = question.answers.find((a) => a.id === aId);
    if (!answer) return;

    totalScore += answer.score;
    totalQuestions++;

    const pillar = question.pillar;
    pillarTotals[pillar].score += answer.score;
    pillarTotals[pillar].count++;
  });

  const overallScore = totalQuestions > 0 ? Math.round((totalScore / (totalQuestions * 10)) * 100) : 0;

  const pillarScores: PillarScore[] = Object.entries(pillarTotals).map(([pillar, data]) => {
    const score = data.count > 0 ? Math.round((data.score / (data.count * 10)) * 100) : 0;
    return {
      pillar: pillar as Pillar,
      score,
      label: PILLAR_LABELS[pillar as Pillar],
    };
  });

  let maturityKey: 'fragile' | 'reactive' | 'functional' | 'strong' = 'fragile';
  if (overallScore >= 80) maturityKey = 'strong';
  else if (overallScore >= 60) maturityKey = 'functional';
  else if (overallScore >= 40) maturityKey = 'reactive';

  const sortedPillars = [...pillarScores].sort((a, b) => a.score - b.score);
  const topBottlenecks = sortedPillars.slice(0, 3).map((ps) => BOTTLENECK_MAP[ps.pillar]);

  const lowestPillar = sortedPillars[0].pillar;

  return {
    overallScore,
    maturityKey,
    pillarScores,
    maturity: MATURITY_LEVELS[maturityKey],
    topBottlenecks,
    recommendation: RECOMMENDATIONS[lowestPillar],
  };
}
