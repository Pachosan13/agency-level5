export type Language = 'en' | 'es';

export type Pillar = 'visibility' | 'process' | 'execution' | 'approvals' | 'reporting';

export interface Answer {
  id: string;
  text: { en: string; es: string };
  score: number;
  pillarWeights: Partial<Record<Pillar, number>>;
}

export interface Question {
  id: string;
  pillar: Pillar;
  text: { en: string; es: string };
  answers: Answer[];
}

export interface LeadData {
  name: string;
  company: string;
  email: string;
  phone?: string;
}

export interface AssessmentState {
  answers: Record<string, string>;
  currentStep: number;
  lead?: LeadData;
}

export interface PillarScore {
  pillar: Pillar;
  score: number;
  label: { en: string; es: string };
}

export interface AssessmentResult {
  overallScore: number;
  maturityKey: 'fragile' | 'reactive' | 'functional' | 'strong';
  pillarScores: PillarScore[];
  maturity: {
    label: { en: string; es: string };
    description: { en: string; es: string };
    color: string;
  };
  topBottlenecks: {
    title: { en: string; es: string };
    description: { en: string; es: string };
  }[];
  recommendation: { en: string; es: string };
}
