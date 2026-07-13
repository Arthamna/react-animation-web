"use client";

import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useSpring } from "motion/react";
import { useState } from "react";
import { projects } from "@/lib/site-data";
import { RoundLink } from "@/components/ui/round-link";

export function ProjectList() {
  const [active, setActive] = useState<number | null>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 110, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 110, damping: 18 });

  return (
    <section className="section-shell pb-28 md:pb-44" onPointerMove={(event) => { x.set(event.clientX); y.set(event.clientY); }}>
      <p className="mb-8 text-[11px] uppercase tracking-[0.18em] text-black/40">Selected work</p>
      <div className="border-b border-black/20">
        {projects.map((project, index) => (
          <a key={project.title} href={project.href} target="_blank" rel="noreferrer" className="project-row group" onPointerEnter={(event) => event.pointerType !== "touch" && setActive(index)} onPointerLeave={() => setActive(null)}>
            <div>
              <h2 className="transition-transform duration-500 group-hover:translate-x-3">{project.title}</h2>
              <p className="mt-2 text-sm text-black/50 md:hidden">{project.discipline}</p>
            </div>
            <div className="hidden text-right text-sm md:block"><p>{project.discipline}</p><p className="mt-2 text-black/45">{project.date}</p></div>
          </a>
        ))}
      </div>
      <div className="mt-14 flex justify-center"><RoundLink href="/work">More work</RoundLink></div>

      <AnimatePresence>
        {active !== null && (
          <motion.div className="pointer-events-none fixed left-0 top-0 z-30 hidden h-[270px] w-[360px] overflow-hidden md:block" style={{ x, y }} initial={{ scale: 0, translateX: "-50%", translateY: "-50%" }} animate={{ scale: 1, translateX: "-50%", translateY: "-50%" }} exit={{ scale: 0, translateX: "-50%", translateY: "-50%" }} transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}>
            <div className="relative size-full p-8" style={{ background: projects[active].color }}>
              <Image src={projects[active].image} alt={`Preview of ${projects[active].title}`} fill sizes="360px" className="object-contain p-8" />
              <span className="absolute right-3 top-3 grid size-14 place-items-center rounded-full bg-[#455ce9] text-xs text-white">View</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
