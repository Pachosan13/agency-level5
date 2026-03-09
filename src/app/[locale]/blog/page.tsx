import { setRequestLocale } from 'next-intl/server';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata() {
  return { title: 'Blog', description: 'Insights on AI automation, business growth, and operational efficiency.' };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen pt-24">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold tracking-tight mb-6">Blog</h1>
        <p className="text-lg text-text-secondary leading-relaxed mb-16">
          Insights on AI automation, business growth, and operational efficiency.
        </p>
        <div className="rounded-2xl border border-border-subtle bg-bg-card/50 p-12 text-center">
          <p className="text-text-muted font-[family-name:var(--font-display)] text-lg">Coming soon.</p>
          <p className="text-sm text-text-muted mt-2">We&apos;re preparing expert content on AI automation and business growth.</p>
        </div>
      </div>
    </div>
  );
}
