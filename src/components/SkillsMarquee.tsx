'use client';
import React from 'react';
import { motion } from 'framer-motion';

const techIcons: Record<string, { svg: React.ReactNode; color: string }> = {
  Python: {
    color: '#3776AB',
    svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/></svg>,
  },
  TypeScript: {
    color: '#3178C6',
    svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/></svg>,
  },
  React: {
    color: '#61DAFB',
    svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.31 0-.592.068-.846.196-1.105.56-1.522 2.16-.912 4.544C3.958 6.73 3 7.622 3 8.64c0 1.02.958 1.912 2.345 2.568-.61 2.384-.193 3.984.912 4.544.254.128.536.196.846.196 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.604 4.887 2.604.31 0 .592-.068.846-.196 1.105-.56 1.522-2.16.912-4.544C20.042 10.552 21 9.66 21 8.64c0-1.02-.958-1.912-2.345-2.568.61-2.384.193-3.984-.912-4.544a1.896 1.896 0 0 0-.846-.196z"/></svg>,
  },

  'Node.js': {
    color: '#339933',
    svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339a.29.29 0 0 0 .272 0l8.795-5.076a.277.277 0 0 0 .134-.238V6.921a.28.28 0 0 0-.137-.242l-8.791-5.072a.278.278 0 0 0-.271 0L3.075 6.68a.284.284 0 0 0-.139.241v10.15a.27.27 0 0 0 .138.236l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675a1.857 1.857 0 0 1-.922-1.604V6.921c0-.659.353-1.275.922-1.603l8.795-5.082c.557-.315 1.296-.315 1.848 0l8.794 5.082c.57.329.924.944.924 1.603v10.15a1.86 1.86 0 0 1-.924 1.604l-8.794 5.078c-.28.163-.6.247-.925.247z"/></svg>,
  },
  FastAPI: {
    color: '#009688',
    svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path d="M12 0C5.375 0 0 5.375 0 12c0 6.627 5.375 12 12 12 6.626 0 12-5.373 12-12 0-6.625-5.373-12-12-12zm-.624 21.62v-7.528H7.19L13.203 2.38v7.528h4.029L11.376 21.62z"/></svg>,
  },
  PostgreSQL: {
    color: '#4169E1',
    svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6zm4 4h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>,
  },
  MongoDB: {
    color: '#47A248',
    svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218z"/></svg>,
  },
  Docker: {
    color: '#2496ED',
    svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185"/></svg>,
  },
  LangGraph: {
    color: '#1C3C3C',
    svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
  },
  'Gemini AI': {
    color: '#8E75B2',
    svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 3.6c2.07 0 3.96.76 5.42 2.01L12 12 6.58 5.61A8.35 8.35 0 0 1 12 3.6z"/></svg>,
  },
  WebRTC: {
    color: '#333333',
    svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>,
  },
  'REST APIs': {
    color: '#0082C9',
    svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path d="M4 1C2.34 1 1 2.34 1 4v16c0 1.66 1.34 3 3 3h16c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3H4zm8 4a7 7 0 110 14 7 7 0 010-14zm0 2a5 5 0 100 10 5 5 0 000-10z"/></svg>,
  },
};

export function SkillsMarquee() {
  const skillNames = Object.keys(techIcons);
  const row1 = [...skillNames, ...skillNames];
  const row2 = [...skillNames].reverse().concat(skillNames);

  return (
    <section id="skills" className="py-20 overflow-hidden bg-[var(--paper)] relative border-b border-[var(--line)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14 px-6"
      >
        <h2 className="text-4xl md:text-6xl font-black text-[var(--ink)] uppercase tracking-normal mb-4">Tech Stack</h2>
        <p className="text-[var(--muted-strong)] text-lg max-w-xl mx-auto">Technologies I use daily to build production systems.</p>
      </motion.div>

      <div className="relative mb-5">
        <div className="flex gap-4 animate-marquee hover:[animation-play-state:paused]">
          {row1.map((name, idx) => {
            const tech = techIcons[name];
            return (
              <div key={`r1-${idx}`} className="flex-shrink-0 flex items-center gap-3 px-6 py-4 bg-[var(--panel)] border border-[var(--line)] hover:bg-[var(--ink)] hover:text-[var(--paper)] hover:-translate-y-0.5 transition-all duration-200 cursor-default group">
                <div style={{ color: tech.color }} className="group-hover:scale-110 transition-transform duration-200">{tech.svg}</div>
                <span className="font-bold text-sm whitespace-nowrap">{name}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative">
        <div className="flex gap-4 animate-marquee-reverse hover:[animation-play-state:paused]">
          {row2.map((name, idx) => {
            const tech = techIcons[name];
            return (
              <div key={`r2-${idx}`} className="flex-shrink-0 flex items-center gap-3 px-6 py-4 bg-[var(--panel)] border border-[var(--line)] hover:bg-[var(--ink)] hover:text-[var(--paper)] hover:-translate-y-0.5 transition-all duration-200 cursor-default group">
                <div style={{ color: tech.color }} className="group-hover:scale-110 transition-transform duration-200">{tech.svg}</div>
                <span className="font-bold text-sm whitespace-nowrap">{name}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[var(--paper)] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[var(--paper)] to-transparent z-10 pointer-events-none" />
    </section>
  );
}
