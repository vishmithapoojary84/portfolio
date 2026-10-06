'use client';

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { use, useEffect, useState } from 'react';
import { projects } from '@/data/projects';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
  </svg>
);

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);
  const projectIdx = projects.findIndex((p) => p.slug === slug);
  const navigationProjects = projects.filter(
    ({ slug: projectSlug }) =>
      projectSlug !== 'blog-platform' && projectSlug !== 'memory-game' && projectSlug !== 'bubble-pop-game',
  );
  const navigationIndex = navigationProjects.findIndex((item) => item.slug === slug);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) {
    notFound();
  }

  const gallery = 'gallery' in project && project.gallery ? project.gallery : project.image ? [project.image] : [];
  const nextProject = navigationIndex < 0
    ? null
    : navigationProjects[(navigationIndex + 1) % navigationProjects.length];
  const prevProject = navigationIndex < 0
    ? null
    : navigationProjects[(navigationIndex - 1 + navigationProjects.length) % navigationProjects.length];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  useEffect(() => {
    if (gallery.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % gallery.length);
    }, 4200);

    return () => clearInterval(interval);
  }, [gallery.length]);

  return (
    <main className="min-h-screen bg-[var(--paper)] text-[var(--ink)] selection:bg-[var(--accent)]/30">
      <section className="border-b border-[var(--line)] px-4 pb-10 pt-28 sm:px-6 lg:px-10">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 border border-[var(--line)] bg-[var(--panel)] px-4 py-3 font-mono text-xs font-black uppercase tracking-[0.18em] transition-transform hover:-translate-y-0.5"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to work
          </Link>
          <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[var(--muted)]">
            Project / {String(projectIdx + 1).padStart(2, '0')}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_0.54fr] lg:items-end">
          <div>
            <div className="mb-5 flex flex-wrap gap-2">
              {project.tags.slice(0, 6).map((tag) => (
                <span key={tag} className="border border-[var(--line)] px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--muted-strong)]">
                  {tag}
                </span>
              ))}
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="max-w-full break-words text-[clamp(2.8rem,13vw,10rem)] font-black uppercase leading-[0.82] tracking-normal [overflow-wrap:anywhere]"
            >
              {project.title}
            </motion.h1>
          </div>
          <div className="border-l-4 border-[var(--ink)] pl-5">
            <p className="text-2xl font-semibold leading-tight text-[var(--muted-strong)]">{project.shortDescription}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.repoLink && (
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[var(--ink)] px-4 py-3 font-mono text-xs font-black uppercase tracking-[0.16em] text-[var(--paper)] transition-transform hover:-translate-y-0.5"
                >
                  <GithubIcon className="h-4 w-4" />
                  Source
                </a>
              )}
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[var(--accent)] px-4 py-3 font-mono text-xs font-black uppercase tracking-[0.16em] text-black transition-transform hover:-translate-y-0.5"
                >
                  Live demo
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {gallery.length > 0 && (
        <section className="border-b border-[var(--line)] p-4 sm:p-6 lg:p-10">
          <div className="relative aspect-[16/9] overflow-hidden border border-[var(--line)] bg-[var(--panel)] shadow-[12px_12px_0_var(--shadow)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={gallery[currentImageIndex]}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0"
              >
                <Image
                  src={gallery[currentImageIndex]}
                  alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {gallery.length > 1 && (
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button
                  onClick={prevImage}
                  className="flex h-11 w-11 items-center justify-center bg-[var(--paper)] text-[var(--ink)] shadow-[4px_4px_0_var(--shadow-strong)]"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="flex h-11 w-11 items-center justify-center bg-[var(--paper)] text-[var(--ink)] shadow-[4px_4px_0_var(--shadow-strong)]"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      <section className="grid border-b border-[var(--line)] lg:grid-cols-[0.42fr_0.58fr]">
        <div className="border-b border-[var(--line)] p-6 sm:p-10 lg:border-b-0 lg:border-r">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[var(--muted)]">About this project</p>
          <h2 className="mt-5 text-4xl font-black uppercase leading-none sm:text-6xl">What changed</h2>
        </div>
        <div className="p-6 sm:p-10">
          <p className="text-xl font-medium leading-relaxed text-[var(--muted-strong)] sm:text-2xl">{project.description}</p>
        </div>
      </section>

      <section className="grid border-b border-[var(--line)] lg:grid-cols-[0.42fr_0.58fr]">
        <div className="border-b border-[var(--line)] p-6 sm:p-10 lg:border-b-0 lg:border-r">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[var(--muted)]">Key highlights</p>
          <h2 className="mt-5 text-4xl font-black uppercase leading-none sm:text-6xl">Proof points</h2>
        </div>
        <div className="divide-y divide-[var(--line)]">
          {project.highlights.map((highlight) => (
            <div key={highlight} className="flex gap-4 p-6 sm:p-8">
              <span className="flex h-8 w-8 flex-none items-center justify-center bg-[var(--accent)] text-black">
                <Check className="h-5 w-5" />
              </span>
              <p className="text-lg font-semibold leading-snug">{highlight}</p>
            </div>
          ))}
        </div>
      </section>

      {prevProject && nextProject && (
        <nav className="grid lg:grid-cols-2">
          <Link href={`/projects/${prevProject.slug}`} className="group border-b border-[var(--line)] p-6 transition-colors hover:bg-[var(--ink)] hover:text-[var(--paper)] sm:p-10 lg:border-b-0 lg:border-r">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[var(--muted)] group-hover:text-white/48">Previous</p>
            <h3 className="mt-4 text-3xl font-black uppercase leading-none sm:text-5xl">{prevProject.title}</h3>
          </Link>
          <Link href={`/projects/${nextProject.slug}`} className="group p-6 text-right transition-colors hover:bg-[var(--ink)] hover:text-[var(--paper)] sm:p-10">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[var(--muted)] group-hover:text-white/48">Next</p>
            <h3 className="mt-4 text-3xl font-black uppercase leading-none sm:text-5xl">{nextProject.title}</h3>
          </Link>
        </nav>
      )}
    </main>
  );
}
