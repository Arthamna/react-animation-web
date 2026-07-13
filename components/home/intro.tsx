"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { RoundLink } from "@/components/ui/round-link";

const phrase = "I help ambitious teams turn ideas into memorable digital products. Every detail is shaped to feel clear, useful, and unmistakably human.";

export function Intro() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduceMotion = useReducedMotion();

  return (
    <section ref={ref} className="section-shell relative py-24 md:py-44">
      <div className="grid gap-10 md:grid-cols-[minmax(0,2.2fr)_minmax(240px,1fr)] md:gap-16">
        <p className="text-[clamp(1.8rem,3.2vw,3.25rem)] leading-[1.25] tracking-[-0.035em]">
          {phrase.split(" ").map((word, index) => (
            <span className="word-mask" key={`${word}-${index}`}>
              <motion.span className="inline-block will-change-transform" initial={{ y: reduceMotion ? 0 : "115%" }} animate={inView ? { y: 0 } : { y: reduceMotion ? 0 : "115%" }} transition={{ duration: 0.62, delay: reduceMotion ? 0 : index * 0.025, ease: [0.33, 1, 0.68, 1] }}>
                {word}
              </motion.span>
            </span>
          ))}
        </p>
        <motion.div className="flex flex-col justify-between gap-12 md:pt-3" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.8, delay: 0.45 }}>
          <p className="max-w-sm text-base leading-relaxed text-black/65 md:text-lg">Design curiosity, frontend craft, and a love of motion come together in interfaces that feel intentional from first glance to final click.</p>
          <RoundLink href="/about" className="size-36 border-0 text-white md:size-44">About me</RoundLink>
        </motion.div>
      </div>
    </section>
  );
}
