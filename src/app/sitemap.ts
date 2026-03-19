import type { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blog-posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://agencylevel5.com';
  const locales = ['en', 'es'];

  const staticPages = [
    '',
    '/about',
    '/services',
    '/services/ai-chatbots',
    '/services/automation',
    '/services/smart-websites',
    '/services/lead-generation',
    '/services/ai-consulting',
    '/diagnostic',
    '/blog',
    '/contact',
    '/gohighlevel',
    '/panama',
    '/colombia',
    '/fractional-coo',
    '/case-studies',
    '/pricing',
    '/services/hvac-automation',
    '/services/contractors',
  ];

  const entries: MetadataRoute.Sitemap = [];

  staticPages.forEach((page) => {
    locales.forEach((locale) => {
      entries.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'weekly' : 'monthly',
        priority: page === '' ? 1 : page.startsWith('/services/') ? 0.8 : 0.7,
      });
    });
  });

  blogPosts.forEach((post) => {
    locales.forEach((locale) => {
      entries.push({
        url: `${baseUrl}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    });
  });

  return entries;
}
