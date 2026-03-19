import { Link } from '@/i18n/navigation';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import type { BlogPost } from '@/data/blog-posts';

interface BlogCardProps {
  post: BlogPost;
  locale: string;
}

export function BlogCard({ post, locale }: BlogCardProps) {
  const lang = locale as 'en' | 'es';

  return (
    <Link
      href={`/blog/${post.slug}` as never}
      className="group rounded-2xl border border-border-subtle bg-bg-card/50 p-8 transition-all duration-300 hover:border-accent-violet/30 hover:bg-bg-card hover:shadow-[0_0_40px_rgba(124,58,237,0.06)] flex flex-col"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-[11px] font-bold uppercase tracking-widest text-accent-purple">
          {post.category[lang]}
        </span>
      </div>

      <h2 className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight mb-3 group-hover:text-accent-purple transition-colors line-clamp-2">
        {post.title[lang]}
      </h2>

      <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-1 line-clamp-3">
        {post.description[lang]}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-[11px] text-text-muted">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3 w-3" />
            {new Date(post.date).toLocaleDateString(locale === 'es' ? 'es-ES' : 'en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3 w-3" />
            {post.readingTime} min
          </span>
        </div>

        <ArrowRight className="h-4 w-4 text-text-muted transition-all group-hover:text-accent-purple group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
