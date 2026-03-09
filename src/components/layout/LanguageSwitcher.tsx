'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: 'en' | 'es') => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center rounded-lg border border-border-subtle overflow-hidden">
      <button
        onClick={() => switchLocale('en')}
        className={cn(
          'px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider transition-all',
          locale === 'en'
            ? 'bg-accent-violet/20 text-accent-purple'
            : 'text-text-muted hover:text-text-secondary'
        )}
      >
        EN
      </button>
      <div className="w-px h-4 bg-border-subtle" />
      <button
        onClick={() => switchLocale('es')}
        className={cn(
          'px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider transition-all',
          locale === 'es'
            ? 'bg-accent-violet/20 text-accent-purple'
            : 'text-text-muted hover:text-text-secondary'
        )}
      >
        ES
      </button>
    </div>
  );
}
