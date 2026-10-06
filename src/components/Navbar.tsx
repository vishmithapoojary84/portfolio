'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

const menuItems = [
  { name: 'Home', href: '/#home' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Contact', href: '/#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const saved = window.localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = saved === 'dark' || (!saved && prefersDark) ? 'dark' : 'light';
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem('theme', next);
  };

  return (
    <>
      <nav className="fixed left-0 top-0 z-[60] flex w-full items-center justify-between px-4 py-4 mix-blend-normal sm:px-6 lg:px-10">
        <a
          href="/#home"
          className="pointer-events-auto border border-[var(--line)] bg-[var(--paper)] px-3 py-2 font-mono text-xs font-black uppercase tracking-[0.2em] text-[var(--ink)] shadow-[4px_4px_0_var(--shadow)] transition-transform hover:-translate-y-0.5"
        >
          V / P
        </a>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="flex h-11 w-11 items-center justify-center border border-[var(--line)] bg-[var(--paper)] text-[var(--ink)] shadow-[4px_4px_0_var(--shadow)] transition-transform hover:-translate-y-0.5"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            onClick={() => setIsOpen((value) => !value)}
            className="relative z-[60] flex h-11 w-14 flex-col items-center justify-center gap-1.5 border border-[var(--line)] bg-[var(--paper)] text-[var(--ink)] shadow-[4px_4px_0_var(--shadow)] transition-transform hover:-translate-y-0.5"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <motion.span
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 4 : 0 }}
              className="h-0.5 w-7 bg-current"
            />
            <motion.span animate={{ opacity: isOpen ? 0 : 1 }} className="h-0.5 w-7 bg-current" />
            <motion.span
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -4 : 0 }}
              className="h-0.5 w-7 bg-current"
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[55] flex flex-col justify-between bg-[var(--paper)] p-6 text-[var(--ink)] sm:p-10"
          >
            <div className="pt-20">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-[var(--muted)]">Navigate</p>
              <ul className="mt-8 divide-y divide-[var(--line)] border-y border-[var(--line)]">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 * index, duration: 0.35 }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center justify-between py-5 text-5xl font-black uppercase leading-none transition-colors hover:text-[var(--accent)] sm:text-7xl"
                    >
                      {item.name}
                      <span className="font-mono text-sm text-[var(--muted)] transition-transform group-hover:translate-x-2">0{index + 1}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[var(--muted)]">
              vishuvishmitha84@gmail.com
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
