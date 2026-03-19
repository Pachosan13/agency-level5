'use client';

import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface CountUpProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function CountUp({ end, suffix = '', prefix = '', duration = 2, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(end);

  useGSAP(() => {
    const obj = { val: 0 };

    ScrollTrigger.create({
      trigger: ref.current,
      start: 'top 85%',
      onEnter: () => {
        setValue(0);
        gsap.to(obj, {
          val: end,
          duration,
          ease: 'power2.out',
          onUpdate: () => setValue(Math.round(obj.val)),
        });
      },
    });
  }, { scope: ref });

  return (
    <span ref={ref} className={className}>
      {prefix}{value.toLocaleString()}{suffix}
    </span>
  );
}
