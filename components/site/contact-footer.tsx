"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Arrow } from "@/components/ui/arrow";
import { RoundLink } from "@/components/ui/round-link";

export function ContactFooter({ compact = false }: { compact?: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : -80, 0]);

  return (
    <footer ref={ref} className={`bg-[#141516] text-white ${compact ? "pt-36" : "pt-28 md:pt-48"}`}>
      <div className="section-shell">
        <div className="relative border-b border-white/25 pb-20 md:pb-28">
          <h2 className="text-[clamp(3.5rem,8vw,8rem)] font-light leading-[0.93] tracking-[-0.055em]">Let&apos;s create<br />something remarkable</h2>
          <motion.div className="absolute right-[4%] top-[10%] hidden md:block" style={{ rotate }}><Arrow className="size-7" /></motion.div>
          <div className="absolute -bottom-16 right-[8%] md:-bottom-20 md:right-[12%]">
            <RoundLink href="mailto:hartmannkanisius@gmail.com" external className="size-32 border-0 bg-[#455ce9] text-white md:size-40">Start a conversation</RoundLink>
          </div>
        </div>
        <div className="mt-28 flex flex-wrap gap-3 md:mt-32">
          <a className="contact-pill" href="mailto:hartmannkanisius@gmail.com">hartmannkanisius@gmail.com</a>
        </div>
        <div className="flex flex-col-reverse justify-between gap-8 pb-8 pt-20 text-sm md:flex-row md:items-end">
          <div><p className="mb-2 text-[10px] uppercase tracking-[0.16em] text-white/40">Current release</p><p>2026 © Portfolio edition</p></div>
          <div className="flex gap-6">
            <a className="footer-link" href="https://www.linkedin.com/in/hartmann-kanisius/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="footer-link" href="https://github.com/Arthamna" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
