"use client";

import Image from "next/image";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import { Arrow } from "@/components/ui/arrow";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const direction = useRef(-1);
  const reduceMotion = useReducedMotion();
  const marqueeX = useMotionValue(0);
  const marqueeTransform = useTransform(marqueeX, (value) => `translate3d(${value}%, 0, 0)`);
  const { scrollY, scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 160]);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? current;
    direction.current = current > previous ? -1 : 1;
  });

  useAnimationFrame((_, delta) => {
    if (reduceMotion) return;

    let next = marqueeX.get() + direction.current * delta * 0.006;
    if (next <= -50) next = 0;
    if (next > 0) next = -50;
    marqueeX.set(next);
  });

  return (
    <section ref={ref} className="relative flex h-[100svh] min-h-[620px] overflow-hidden bg-[#242426] text-white">
      <motion.div className="absolute inset-0 scale-[1.04]" style={{ y }}>
        <Image src="/images/hero-new.webp" alt="Abstract modern architecture used as the portfolio backdrop" fill preload sizes="100vw" className="object-cover object-[center_42%] brightness-[0.58]" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
      <motion.div
        className="absolute bottom-[11vh] flex w-max whitespace-nowrap"
        style={{ transform: marqueeTransform }}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.25, ease: [0.33, 1, 0.68, 1] }}
      >
        <h1 className="hero-marquee shrink-0 pr-[0.22em]">Web Developer <span>—</span></h1>
        <h1 className="hero-marquee shrink-0 pr-[0.22em]" aria-hidden="true">Web Developer <span>—</span></h1>
      </motion.div>
      <motion.div className="absolute left-[8vw] top-[38%] md:left-auto md:right-[10vw]" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.7 }}>
        <Arrow className="mb-12 rotate-90 md:mb-20" />
        <p className="text-xl font-light leading-snug md:text-2xl">Web<br />Designer & Developer</p>
      </motion.div>
    </section>
  );
}
