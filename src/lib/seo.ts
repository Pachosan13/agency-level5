export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Agency Level 5',
    url: 'https://agencylevel5.com',
    logo: 'https://agencylevel5.com/images/logo.png',
    description: 'AI automation agency specializing in smart websites, chatbots, and business process automation.',
    sameAs: [
      'https://www.linkedin.com/company/agency-level-5',
      'https://www.instagram.com/agencylevel5',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      availableLanguage: ['English', 'Spanish'],
    },
  };
}

export function generateServiceSchema(locale: string, service: { name: string; description: string; slug: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'Agency Level 5',
    },
    url: `https://agencylevel5.com/${locale}/services/${service.slug}`,
    areaServed: {
      '@type': 'Place',
      name: locale === 'es' ? 'Latinoamérica y Estados Unidos' : 'Latin America and United States',
    },
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };
}

export function generateWebApplicationSchema(locale: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Workflow Bottleneck Score',
    description: locale === 'es'
      ? 'Herramienta gratuita de diagnóstico operativo que evalúa la madurez del flujo de trabajo de su empresa.'
      : 'Free operational diagnostic tool that assesses your company workflow maturity.',
    url: `https://agencylevel5.com/${locale}/diagnostic`,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    provider: {
      '@type': 'Organization',
      name: 'Agency Level 5',
    },
  };
}
