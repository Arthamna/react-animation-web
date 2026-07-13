"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { gallery } from "@/lib/site-data";

function Row({ reverse = false }: { reverse?: boolean }) {
  const items = reverse ? gallery.slice(3) : gallery.slice(0, 4);

  return (
    <div className={`flex w-max gap-[3vw] ${reverse ? "ml-[-14vw]" : "ml-[-3vw]"}`}>
      {items.map((item) => (
        <div className="flex h-[25vh] min-h-44 max-h-72 w-[24vw] min-w-72 shrink-0 items-center justify-center bg-[#d7d4cf]" key={item.image}>
          <div className="relative h-[80%] w-[80%] overflow-hidden">
            <Image src={item.image} alt={item.alt} fill sizes="24vw" className="object-cover transition-transform duration-700 hover:scale-105" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function GalleryStrip() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x1 = useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : -60, reduceMotion ? 0 : 90]);
  const x2 = useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : 90, reduceMotion ? 0 : -60]);

  return (
    <section ref={ref} className="hidden overflow-hidden bg-white py-14 md:block md:py-20" aria-label="Curated collection of architectural forms and visual references">
      <motion.div style={{ x: x1 }}><Row /></motion.div>
      <motion.div className="mt-[3vw]" style={{ x: x2 }}><Row reverse /></motion.div>
    </section>
  );
}
