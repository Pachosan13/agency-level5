'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  staggerAmount?: number;
  highlightWords?: string[];
}

export function TextReveal({
  text,
  className,
  as: Tag = 'h2',
  staggerAmount = 0.02,
  highlightWords = [],
}: TextRevealProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const containerRef = useRef<any>(null);

  useGSAP(() => {
    const chars = containerRef.current?.querySelectorAll('.char');
    if (!chars) return;

    gsap.fromTo(
      chars,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: staggerAmount,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, { scope: containerRef });

  const words = text.split(' ');

  return (
    <Tag ref={containerRef} className={className}>
      {words.map((word, wi) => {
        const isHighlight = highlightWords.includes(word.replace(/[.,!?]/g, ''));
        return (
          <span key={wi} className="inline-block mr-[0.25em]">
            {word.split('').map((char, ci) => (
              <span
                key={ci}
                className={`char inline-block ${isHighlight ? 'bg-gradient-to-r from-accent-violet to-accent-cyan bg-clip-text text-transparent' : ''}`}
                style={{ opacity: 0 }}
              >
                {char}
              </span>
            ))}
          </span>
        );
      })}
    </Tag>
  );
}
