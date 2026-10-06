'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ScrollChoreography() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-scroll-panel]').forEach((panel) => {
        gsap.fromTo(
          panel,
          { autoAlpha: 0, y: 80, rotateX: 8, transformPerspective: 900 },
          {
            autoAlpha: 1,
            y: 0,
            rotateX: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: panel,
              start: 'top 82%',
              end: 'top 35%',
              scrub: 0.7,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>('[data-project-row]').forEach((row, index) => {
        gsap.fromTo(
          row,
          { xPercent: index % 2 === 0 ? -10 : 10, autoAlpha: 0.45 },
          {
            xPercent: 0,
            autoAlpha: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: row,
              start: 'top bottom',
              end: 'bottom 55%',
              scrub: true,
            },
          },
        );
      });

      gsap.to('[data-kinetic-word]', {
        xPercent: -18,
        ease: 'none',
        scrollTrigger: {
          trigger: '[data-kinetic-strip]',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
