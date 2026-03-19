import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'es'],
  defaultLocale: 'en',
  localePrefix: 'always',
  pathnames: {
    '/': '/',
    '/about': {
      en: '/about',
      es: '/nosotros',
    },
    '/services': {
      en: '/services',
      es: '/servicios',
    },
    '/services/ai-chatbots': {
      en: '/services/ai-chatbots',
      es: '/servicios/chatbots-ia',
    },
    '/services/automation': {
      en: '/services/automation',
      es: '/servicios/automatizacion',
    },
    '/services/smart-websites': {
      en: '/services/smart-websites',
      es: '/servicios/sitios-web-inteligentes',
    },
    '/services/lead-generation': {
      en: '/services/lead-generation',
      es: '/servicios/generacion-de-leads',
    },
    '/services/ai-consulting': {
      en: '/services/ai-consulting',
      es: '/servicios/consultoria-ia',
    },
    '/diagnostic': {
      en: '/diagnostic',
      es: '/diagnostico',
    },
    '/blog': {
      en: '/blog',
      es: '/blog',
    },
    '/contact': {
      en: '/contact',
      es: '/contacto',
    },
    '/gohighlevel': {
      en: '/gohighlevel',
      es: '/gohighlevel',
    },
    '/panama': {
      en: '/panama',
      es: '/panama',
    },
    '/colombia': {
      en: '/colombia',
      es: '/colombia',
    },
    '/fractional-coo': {
      en: '/fractional-coo',
      es: '/coo-fraccional',
    },
    '/case-studies': {
      en: '/case-studies',
      es: '/casos-de-exito',
    },
    '/pricing': {
      en: '/pricing',
      es: '/precios',
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];
