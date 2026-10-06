'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Sparkles } from 'lucide-react';
import { projects } from '@/data/projects';
import { SkillsMarquee } from '@/components/SkillsMarquee';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const profileLinks = [
  {
    label: 'Email',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=vishuvishmitha84@gmail.com',
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/vishmitha-poojary-39122a320',
    icon: LinkedinIcon,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/vishmithapoojary84',
    icon: GithubIcon,
  },
];

const capabilities = [
  'Voice AI systems',
  'Agentic workflows',
  'Full-stack platforms',
  'Realtime backends',
  'LLM product engineering',
];

const experience = [
  {
    role: 'Software Engineer',
    company: 'Trikon Software Labs',
    period: 'Jul 2026 - Present',
    points: [
      'Built a real-time multilingual voice AI speaking 30+ languages.',
      'Led a zero-data-loss cloud database migration with preserved permissions.',
      'Engineered smart traffic-pacing for high-volume enterprise calling.',
      'Built audio filters that stopped AI interruptions and reduced API waste.',
    ],
  },
  {
    role: 'Software Developer Intern',
    company: 'TechBrew Solutions',
    period: 'Jan 2026 - Jun 2026',
    points: [
      'Translated OpenAPI contracts into schema, database models, and validation logic.',
      'Built type-safe endpoints with Hono.js, Drizzle ORM, Bun, and Zod.',
      'Co-built a 4-agent LangGraph intraday trading system.',
      'Implemented LLM-driven news ranking and Telegram alert delivery.',
    ],
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.26em] text-[var(--muted)]">
      <Sparkles className="h-4 w-4 text-[var(--accent)]" />
      {children}
    </div>
  );
}

function HeroCollage() {
  return (
    <div className="relative min-h-[560px] w-full overflow-hidden">
      <Image
        src="/hero-cutout.png"
        alt="Vishmitha"
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-contain object-bottom grayscale contrast-110"
      />
    </div>
  );
}

export default function Home() {
  const featuredProjects = projects.slice(0, 6);

  return (
    <main id="home" className="min-h-screen bg-[var(--paper)] text-[var(--ink)] selection:bg-[var(--accent)]/30">
      <section className="grid min-h-screen border-b border-[var(--line)] px-4 pt-28 sm:px-6 lg:grid-cols-[1.04fr_0.96fr] lg:px-10">
        <div className="flex flex-col justify-between pb-10">
          <div className="max-w-5xl">
            <Eyebrow>AI Engineer / Full-stack systems</Eyebrow>
            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="mt-8 text-[clamp(2.5rem,6.8vw,6.5rem)] font-black uppercase leading-[0.9] tracking-normal"
            >
              Vishmitha
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease: 'easeOut' }}
              className="mt-8 max-w-2xl text-xl font-medium leading-snug text-[var(--muted-strong)] sm:text-2xl"
            >
              I build scalable intelligent systems that bridge complex AI models and elegant, accessible user experiences.
            </motion.p>
          </div>

          <div className="mt-14 flex flex-col gap-6 lg:max-w-3xl">
            <div className="flex flex-wrap gap-2">
              {capabilities.map((item) => (
                <span key={item} className="border border-[var(--line)] px-3 py-2 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted-strong)]">
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=vishuvishmitha84@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 bg-[var(--ink)] px-5 py-4 font-mono text-sm font-bold uppercase tracking-[0.16em] text-[var(--paper)] transition-transform hover:-translate-y-1"
              >
                Open the door
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <a
                href="/Vishmitha_Poojary_Resume.pdf"
                download="Vishmitha_Poojary_Resume.pdf"
                className="inline-flex items-center border border-[var(--line)] px-5 py-4 font-mono text-sm font-bold uppercase tracking-[0.16em] text-[var(--ink)] transition-colors hover:bg-[var(--panel)]"
              >
                Resume
              </a>
              <div className="flex gap-2">
                {profileLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="flex h-12 w-12 items-center justify-center border border-[var(--line)] text-[var(--ink)] transition-colors hover:bg-[var(--ink)] hover:text-[var(--paper)]"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <HeroCollage />
      </section>

      <section id="about" className="grid border-b border-[var(--line)] lg:grid-cols-[0.72fr_1.28fr]">
        <div className="border-b border-[var(--line)] p-6 sm:p-10 lg:border-b-0 lg:border-r">
          <Eyebrow>About me</Eyebrow>
          <h2 className="mt-6 max-w-md text-4xl font-black uppercase leading-none sm:text-6xl">Human sense. Artificial intelligence.</h2>
        </div>
        <div className="p-6 sm:p-10">
          <p className="max-w-5xl text-base font-medium leading-relaxed sm:text-lg">
            I build backend systems, full-stack applications, and AI products. To accelerate my workflow and ship features faster, I leverage AI IDEs to amplify my productivity, going way beyond simple autocomplete. Before I even start coding, I set up an AGENTS.md file to give the AI the exact project context, helping me map out a solid implementation plan. I also automate repetitive tasks by packaging them into SKILL.md files. By treating AI as a highly capable assistant rather than a crutch, and by planning first, setting strict context, and offloading the busywork, I&apos;m able to significantly boost my output and deliver high-quality code at a much faster pace.
          </p>
        </div>
      </section>

      <section id="projects" className="border-y border-[var(--line)] bg-[var(--paper)]">
        <div className="flex flex-col gap-4 border-b border-[var(--line)] p-6 sm:p-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Eyebrow>Selected projects</Eyebrow>
            <h2 className="mt-5 text-5xl font-black uppercase leading-none sm:text-7xl">Work index</h2>
          </div>
          <p className="max-w-md text-base font-medium text-[var(--muted-strong)]">
            Selected project work across voice AI, full-stack platforms, and agentic systems.
          </p>
        </div>

        <div>
          {featuredProjects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group grid border-b border-[var(--line)] transition-colors hover:bg-[var(--ink)] hover:text-[var(--paper)] lg:grid-cols-[0.35fr_1fr_0.6fr_0.18fr]"
            >
              <div className="flex items-center border-b border-[var(--line)] p-5 font-mono text-sm font-bold uppercase tracking-[0.22em] text-[var(--muted)] group-hover:text-[var(--paper)] lg:border-b-0 lg:border-r">
                0{index + 1}
              </div>
              <div className="p-5 sm:p-8">
                <h3 className="text-3xl font-black uppercase leading-none sm:text-5xl">{project.title}</h3>
                <p className="mt-4 max-w-2xl text-base font-medium text-[var(--muted-strong)] group-hover:text-white/78">{project.shortDescription}</p>
              </div>
              <div className="flex flex-wrap content-center gap-2 p-5 sm:p-8">
                {project.tags.slice(0, 4).map((tag) => (
                  <span key={tag} className="border border-current px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.16em] opacity-80">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-start p-5 lg:justify-center lg:border-l lg:border-[var(--line)]">
                <ArrowUpRight className="h-8 w-8 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <SkillsMarquee />

      <section id="experience" className="grid border-b border-[var(--line)] lg:grid-cols-[0.82fr_1.18fr]">
        <div className="border-b border-[var(--line)] p-6 sm:p-10 lg:border-b-0 lg:border-r">
          <Eyebrow>Career history</Eyebrow>
          <h2 className="mt-5 text-5xl font-black uppercase leading-none sm:text-7xl">Built in production</h2>
        </div>
        <div>
          {experience.map((item) => (
            <article key={item.company} className="border-b border-[var(--line)] p-6 last:border-b-0 sm:p-10">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-3xl font-black uppercase leading-none">{item.role}</h3>
                  <p className="mt-2 font-mono text-sm font-bold uppercase tracking-[0.16em] text-[var(--accent-strong)]">{item.company}</p>
                </div>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[var(--muted)]">{item.period}</p>
              </div>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {item.points.map((point) => (
                  <li key={point} className="border-l-2 border-[var(--line)] pl-4 text-sm font-medium leading-relaxed text-[var(--muted-strong)]">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <footer id="contact" className="bg-[var(--ink)] px-4 py-14 text-[var(--paper)] sm:px-10 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-[var(--paper)]">Leave your details</p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.5fr] lg:items-end">
            <h2 className="text-[clamp(3.7rem,12vw,10rem)] font-black uppercase leading-[0.82] tracking-normal">Open the door</h2>
            <div className="space-y-5">
              <p className="text-xl font-medium leading-tight text-[var(--paper)]">
                Or just write: vishuvishmitha84@gmail.com. A real reply, usually fast.
              </p>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=vishuvishmitha84@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-[var(--accent)] px-5 py-4 font-mono text-sm font-black uppercase tracking-[0.16em] text-black transition-transform hover:-translate-y-1"
              >
                Contact me
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="mt-14 flex flex-col gap-4 border-t border-white/16 pt-6 font-mono text-xs font-bold uppercase tracking-[0.18em] text-[var(--paper)] sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Vishmitha</p>
            <div className="flex gap-4">
              <a href="https://github.com/vishmithapoojary84" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
              <a href="https://linkedin.com/in/vishmitha-poojary-39122a320" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
              <a href="/Vishmitha_Poojary_Resume.pdf" download="Vishmitha_Poojary_Resume.pdf" className="hover:underline">Resume</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
