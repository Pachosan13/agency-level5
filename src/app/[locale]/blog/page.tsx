import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { generateAlternates } from '@/lib/seo';
import { blogPosts } from '@/data/blog-posts';
import { BlogCard } from '@/components/blog/BlogCard';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    en: 'AI Automation Blog — Insights on Workflows, Lead Systems & Business Growth',
    es: 'Blog de Automatización — Flujos de Trabajo, Sistemas de Leads y Crecimiento Empresarial',
  };

  const descriptions: Record<string, string> = {
    en: 'Practical insights on workflow automation, lead management, and operational systems for business owners who want to scale without burning out. By Pacho Sanchez.',
    es: 'Artículos prácticos sobre flujos de trabajo, gestión de leads y sistemas operativos para empresarios que quieren escalar sin quemarse. Por Pacho Sanchez.',
  };

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    alternates: generateAlternates('/blog', locale),
  };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const lang = locale as 'en' | 'es';

  const heading = {
    en: {
      title: 'Blog',
      subtitle: 'Practical frameworks for building operational systems that scale — from an operator who\'s been in the trenches.',
    },
    es: {
      title: 'Blog',
      subtitle: 'Marcos prácticos para construir sistemas operativos que escalan — de un operador que ha estado en las trincheras.',
    },
  };

  const h = heading[lang] || heading.en;

  return (
    <div className="min-h-screen pt-24">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          {h.title}
        </h1>
        <p className="text-lg text-text-secondary leading-relaxed mb-16 max-w-3xl">
          {h.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} locale={locale} />
          ))}
        </div>
      </div>
    </div>
  );
}
