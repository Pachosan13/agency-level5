import { MessageSquare, Workflow, Globe, Target, Brain } from 'lucide-react';

export interface ServiceData {
  slug: string;
  icon: typeof MessageSquare;
  gradient: string;
  href: '/services/ai-chatbots' | '/services/automation' | '/services/smart-websites' | '/services/lead-generation' | '/services/ai-consulting';
}

export const services: ServiceData[] = [
  {
    slug: 'ai-chatbots',
    icon: MessageSquare,
    gradient: 'from-accent-violet to-accent-purple',
    href: '/services/ai-chatbots',
  },
  {
    slug: 'automation',
    icon: Workflow,
    gradient: 'from-accent-cyan to-accent-teal',
    href: '/services/automation',
  },
  {
    slug: 'smart-websites',
    icon: Globe,
    gradient: 'from-accent-purple to-accent-cyan',
    href: '/services/smart-websites',
  },
  {
    slug: 'lead-generation',
    icon: Target,
    gradient: 'from-accent-amber to-accent-violet',
    href: '/services/lead-generation',
  },
  {
    slug: 'ai-consulting',
    icon: Brain,
    gradient: 'from-accent-teal to-accent-violet',
    href: '/services/ai-consulting',
  },
];
