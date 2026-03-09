'use client';

import { useEffect, useRef } from 'react';

export function GradientMesh({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    const animate = () => {
      time += 0.002;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;

      ctx.clearRect(0, 0, w, h);

      const blobs = [
        {
          x: w * 0.3 + Math.sin(time) * 100,
          y: h * 0.4 + Math.cos(time * 0.8) * 80,
          r: Math.min(w, h) * 0.4,
          color: 'rgba(124, 58, 237, 0.12)',
        },
        {
          x: w * 0.7 + Math.cos(time * 1.2) * 120,
          y: h * 0.6 + Math.sin(time * 0.6) * 100,
          r: Math.min(w, h) * 0.35,
          color: 'rgba(6, 182, 212, 0.1)',
        },
        {
          x: w * 0.5 + Math.sin(time * 0.7) * 80,
          y: h * 0.3 + Math.cos(time * 1.1) * 60,
          r: Math.min(w, h) * 0.3,
          color: 'rgba(168, 85, 247, 0.08)',
        },
      ];

      blobs.forEach(({ x, y, r, color }) => {
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, r);
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, w, h);
      });

      animationId = requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className || ''}`}
      style={{ width: '100%', height: '100%' }}
    />
  );
}
