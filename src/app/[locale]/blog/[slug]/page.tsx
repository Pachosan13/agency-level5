import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';
import { generateAlternates, generateArticleSchema, generateFAQSchema } from '@/lib/seo';
import { blogPosts, getBlogPost } from '@/data/blog-posts';
import { BlogContent } from '@/components/blog/BlogContent';

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return blogPosts.flatMap((post) => [
    { locale: 'en', slug: post.slug },
    { locale: 'es', slug: post.slug },
  ]);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getBlogPost(slug);

  if (!post) return {};

  const lang = locale as 'en' | 'es';

  return {
    title: post.title[lang],
    description: post.description[lang],
    alternates: generateAlternates(`/blog/${slug}`, locale),
    openGraph: {
      type: 'article',
      title: post.title[lang],
      description: post.description[lang],
      locale: locale === 'es' ? 'es_ES' : 'en_US',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const post = getBlogPost(slug);
  if (!post) notFound();

  const lang = locale as 'en' | 'es';

  const articleSchema = generateArticleSchema(locale, {
    title: post.title[lang],
    description: post.description[lang],
    slug: post.slug,
    date: post.date,
  });

  const faqSchema = generateFAQSchema(post.faqs[lang]);

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="min-h-screen pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="mx-auto max-w-3xl px-6 py-16">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-text-muted hover:text-text-primary transition-colors mb-8"
        >
          <ArrowLeft className="h-3 w-3" /> Blog
        </Link>

        {/* Category */}
        <div className="mb-4">
          <span className="text-[11px] font-bold uppercase tracking-widest text-accent-purple">
            {post.category[lang]}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-tight mb-6">
          {post.title[lang]}
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted mb-12 pb-8 border-b border-border-subtle">
          <span className="flex items-center gap-1.5">
            <User className="h-3.5 w-3.5" />
            {post.author}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {new Date(post.date).toLocaleDateString(locale === 'es' ? 'es-ES' : 'en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {post.readingTime} min {locale === 'es' ? 'de lectura' : 'read'}
          </span>
        </div>

        {/* Content */}
        <BlogContent html={post.content[lang]} />

        {/* FAQ Section */}
        <div className="mt-16 pt-8 border-t border-border-subtle">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight mb-8">
            {locale === 'es' ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
          </h2>
          <div className="space-y-6">
            {post.faqs[lang].map((faq, i) => (
              <div key={i} className="rounded-xl border border-border-subtle bg-bg-card/50 p-6">
                <h3 className="font-[family-name:var(--font-display)] text-base font-bold mb-3">
                  {faq.question}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl border border-accent-violet/20 bg-accent-violet/5 p-8 sm:p-12 text-center">
          <h3 className="font-[family-name:var(--font-display)] text-xl font-bold mb-4">
            {locale === 'es'
              ? '¿Listo para construir sistemas que escalan?'
              : 'Ready to build systems that scale?'}
          </h3>
          <p className="text-sm text-text-secondary mb-6 max-w-lg mx-auto">
            {locale === 'es'
              ? 'Toma nuestro diagnóstico gratuito y descubre dónde están los cuellos de botella en tu operación.'
              : 'Take our free diagnostic and discover where the bottlenecks are in your operation.'}
          </p>
          <Link
            href="/diagnostic"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent-violet to-accent-purple px-8 py-4 text-sm font-bold font-[family-name:var(--font-display)] text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.3)] hover:scale-105"
          >
            {locale === 'es' ? 'Diagnóstico Gratuito' : 'Free Diagnostic'}
          </Link>
        </div>
      </article>

      {/* Related Posts */}
      {otherPosts.length > 0 && (
        <section className="bg-bg-secondary py-16">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight mb-8">
              {locale === 'es' ? 'Sigue Leyendo' : 'Keep Reading'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}` as never}
                  className="group rounded-2xl border border-border-subtle bg-bg-card/50 p-6 transition-all duration-300 hover:border-accent-violet/30 hover:bg-bg-card"
                >
                  <span className="text-[11px] font-bold uppercase tracking-widest text-accent-purple">
                    {p.category[lang]}
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-bold mt-2 mb-2 group-hover:text-accent-purple transition-colors line-clamp-2">
                    {p.title[lang]}
                  </h3>
                  <p className="text-sm text-text-secondary line-clamp-2">{p.description[lang]}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
