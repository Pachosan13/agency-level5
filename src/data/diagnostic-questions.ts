import { Question } from './diagnostic-types';

export const QUESTIONS: Question[] = [
  {
    id: 'q1',
    pillar: 'process',
    text: {
      en: 'What best describes your core company operations?',
      es: '¿Qué describe mejor las operaciones principales de su empresa?'
    },
    answers: [
      {
        id: 'q1a1',
        text: { en: 'Highly structured with clear digital workflows', es: 'Altamente estructuradas con flujos digitales claros' },
        score: 10,
        pillarWeights: { process: 1 }
      },
      {
        id: 'q1a2',
        text: { en: 'Mostly defined but relies on manual handoffs', es: 'Mayormente definidas pero dependen de entregas manuales' },
        score: 6,
        pillarWeights: { process: 1 }
      },
      {
        id: 'q1a3',
        text: { en: 'Informal, changing based on the project or person', es: 'Informales, cambian según el proyecto o la persona' },
        score: 3,
        pillarWeights: { process: 1 }
      }
    ]
  },
  {
    id: 'q2',
    pillar: 'visibility',
    text: {
      en: 'How do new jobs or tasks usually enter your business?',
      es: '¿Cómo suelen entrar los nuevos trabajos o tareas en su negocio?'
    },
    answers: [
      {
        id: 'q2a1',
        text: { en: 'Centralized system with automatic tracking', es: 'Sistema centralizado con seguimiento automático' },
        score: 10,
        pillarWeights: { visibility: 1 }
      },
      {
        id: 'q2a2',
        text: { en: 'Emails and forms that require manual entry', es: 'Correos y formularios que requieren entrada manual' },
        score: 5,
        pillarWeights: { visibility: 1 }
      },
      {
        id: 'q2a3',
        text: { en: 'WhatsApp, calls, and verbal requests', es: 'WhatsApp, llamadas y solicitudes verbales' },
        score: 2,
        pillarWeights: { visibility: 1 }
      }
    ]
  },
  {
    id: 'q3',
    pillar: 'visibility',
    text: {
      en: 'How visible is the real-time status of ongoing work?',
      es: '¿Qué tan visible es el estado en tiempo real del trabajo en curso?'
    },
    answers: [
      {
        id: 'q3a1',
        text: { en: 'Instant visibility via live dashboards', es: 'Visibilidad instantánea mediante tableros en vivo' },
        score: 10,
        pillarWeights: { visibility: 1 }
      },
      {
        id: 'q3a2',
        text: { en: 'Requires checking spreadsheets or asking people', es: 'Requiere revisar hojas de cálculo o preguntar a las personas' },
        score: 5,
        pillarWeights: { visibility: 1 }
      },
      {
        id: 'q3a3',
        text: { en: 'We only know when something is finished or late', es: 'Solo sabemos cuando algo termina o se retrasa' },
        score: 2,
        pillarWeights: { visibility: 1 }
      }
    ]
  },
  {
    id: 'q4',
    pillar: 'approvals',
    text: {
      en: 'How are approvals (quotes, designs, stages) usually handled?',
      es: '¿Cómo se manejan habitualmente las aprobaciones (cotizaciones, diseños, etapas)?'
    },
    answers: [
      {
        id: 'q4a1',
        text: { en: 'Automated workflow with digital signatures', es: 'Flujo automatizado con firmas digitales' },
        score: 10,
        pillarWeights: { approvals: 1 }
      },
      {
        id: 'q4a2',
        text: { en: 'Email threads that often get buried', es: 'Hilos de correo que a menudo se entierran' },
        score: 4,
        pillarWeights: { approvals: 1 }
      },
      {
        id: 'q4a3',
        text: { en: 'Verbal or physical signatures on paper', es: 'Firmas verbales o físicas en papel' },
        score: 2,
        pillarWeights: { approvals: 1 }
      }
    ]
  },
  {
    id: 'q5',
    pillar: 'execution',
    text: {
      en: 'How often does work depend on someone "remembering" to follow up?',
      es: '¿Con qué frecuencia el trabajo depende de que alguien "recuerde" hacer el seguimiento?'
    },
    answers: [
      {
        id: 'q5a1',
        text: { en: 'Rarely, the system triggers alerts and tasks', es: 'Rara vez, el sistema activa alertas y tareas' },
        score: 10,
        pillarWeights: { execution: 1 }
      },
      {
        id: 'q5a2',
        text: { en: 'Occasionally, for complex or non-standard jobs', es: 'Ocasionalmente, para trabajos complejos o no estándar' },
        score: 5,
        pillarWeights: { execution: 1 }
      },
      {
        id: 'q5a3',
        text: { en: 'Constantly, it is the primary way work moves', es: 'Constantemente, es la forma principal en que se mueve el trabajo' },
        score: 1,
        pillarWeights: { execution: 1 }
      }
    ]
  },
  {
    id: 'q6',
    pillar: 'execution',
    text: {
      en: 'Where do your teams currently manage their daily work?',
      es: '¿Dónde gestionan sus equipos actualmente su trabajo diario?'
    },
    answers: [
      {
        id: 'q6a1',
        text: { en: 'A unified operational platform (ERP/Custom)', es: 'Una plataforma operativa unificada (ERP/Personalizada)' },
        score: 10,
        pillarWeights: { execution: 1 }
      },
      {
        id: 'q6a2',
        text: { en: 'Fragmented across Excel, Trello, and Email', es: 'Fragmentado en Excel, Trello y correo electrónico' },
        score: 4,
        pillarWeights: { execution: 1 }
      },
      {
        id: 'q6a3',
        text: { en: 'WhatsApp, notebooks, and memory', es: 'WhatsApp, libretas y memoria' },
        score: 1,
        pillarWeights: { execution: 1 }
      }
    ]
  },
  {
    id: 'q7',
    pillar: 'reporting',
    text: {
      en: 'How easy is it to know what is delayed, blocked, or pending?',
      es: '¿Qué tan fácil es saber qué está retrasado, bloqueado o pendiente?'
    },
    answers: [
      {
        id: 'q7a1',
        text: { en: 'One click to see all bottlenecks', es: 'Un clic para ver todos los cuellos de botella' },
        score: 10,
        pillarWeights: { reporting: 1 }
      },
      {
        id: 'q7a2',
        text: { en: 'Requires a manual audit or meeting', es: 'Requiere una auditoría manual o una reunión' },
        score: 5,
        pillarWeights: { reporting: 1 }
      },
      {
        id: 'q7a3',
        text: { en: 'We find out when a client complains', es: 'Nos enteramos cuando un cliente se queja' },
        score: 2,
        pillarWeights: { reporting: 1 }
      }
    ]
  },
  {
    id: 'q8',
    pillar: 'reporting',
    text: {
      en: 'How structured is your reporting and dashboard visibility?',
      es: '¿Qué tan estructurada es su visibilidad de informes y tableros?'
    },
    answers: [
      {
        id: 'q8a1',
        text: { en: 'Automated, accurate, and real-time', es: 'Automatizada, precisa y en tiempo real' },
        score: 10,
        pillarWeights: { reporting: 1 }
      },
      {
        id: 'q8a2',
        text: { en: 'Manual reports compiled weekly/monthly', es: 'Informes manuales compilados semanal/mensualmente' },
        score: 5,
        pillarWeights: { reporting: 1 }
      },
      {
        id: 'q8a3',
        text: { en: 'Gut feeling and bank balance', es: 'Intuición y saldo bancario' },
        score: 2,
        pillarWeights: { reporting: 1 }
      }
    ]
  },
  {
    id: 'q9',
    pillar: 'process',
    text: {
      en: 'How many people touch a request before completion?',
      es: '¿Cuántas personas tocan una solicitud antes de completarla?'
    },
    answers: [
      {
        id: 'q9a1',
        text: { en: 'Optimized: only necessary stakeholders', es: 'Optimizado: solo los interesados necesarios' },
        score: 10,
        pillarWeights: { process: 1 }
      },
      {
        id: 'q9a2',
        text: { en: 'Several, with frequent back-and-forth', es: 'Varios, con frecuentes idas y venidas' },
        score: 5,
        pillarWeights: { process: 1 }
      },
      {
        id: 'q9a3',
        text: { en: 'Too many: it gets lost in handoffs', es: 'Demasiados: se pierde en las entregas' },
        score: 2,
        pillarWeights: { process: 1 }
      }
    ]
  },
  {
    id: 'q10',
    pillar: 'process',
    text: {
      en: 'If a key employee disappears for 3 days, how affected is the workflow?',
      es: 'Si un empleado clave desaparece por 3 días, ¿qué tan afectado se ve el flujo de trabajo?'
    },
    answers: [
      {
        id: 'q10a1',
        text: { en: 'Minimal impact: processes are documented and digital', es: 'Impacto mínimo: los procesos están documentados y son digitales' },
        score: 10,
        pillarWeights: { process: 1 }
      },
      {
        id: 'q10a2',
        text: { en: 'Significant delays in specific areas', es: 'Retrasos significativos en áreas específicas' },
        score: 4,
        pillarWeights: { process: 1 }
      },
      {
        id: 'q10a3',
        text: { en: 'Total paralysis: they hold all the "know-how"', es: 'Parálisis total: ellos tienen todo el "know-how"' },
        score: 1,
        pillarWeights: { process: 1 }
      }
    ]
  }
];
