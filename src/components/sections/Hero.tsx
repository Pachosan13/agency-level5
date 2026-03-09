'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { GradientMesh } from '@/components/animations/GradientMesh';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';

export function Hero() {
  const t = useTranslations('home.hero');

  return (
    <section className="relative overflow-hidden">
      <GradientMesh />

      <div className="relative z-10">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-white">
                {t('headline_lead')} <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-gradient-to-r from-accent-violet via-accent-purple to-accent-cyan bg-clip-text text-transparent">
                  {t('headline_main')}
                </span>
              </h1>
            </>
          }
        >
          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80"
            alt="AI automation dashboard showing workflow analytics and real-time data"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
            priority
          />
        </ContainerScroll>
      </div>
    </section>
  );
}
