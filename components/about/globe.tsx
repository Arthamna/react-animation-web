"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Globe() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : -80, reduceMotion ? 0 : 100]);

  return (
    <motion.div ref={ref} style={{ x }} className="absolute -bottom-20 right-[8%] size-40 overflow-hidden rounded-full bg-black md:size-48">
      <video className="size-full object-cover" autoPlay loop muted playsInline preload="metadata" aria-label="Rotating globe">
        <source src="/videos/looping-globe.mp4" type="video/mp4" />
      </video>
    </motion.div>
  );
}
