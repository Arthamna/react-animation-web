"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function Magnetic({ children, className }: React.PropsWithChildren<{ className?: string }>) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 170, damping: 14, mass: 0.25 });
  const y = useSpring(useMotionValue(0), { stiffness: 170, damping: 14, mass: 0.25 });

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x, y }}
      onPointerMove={(event) => {
        if (event.pointerType === "touch" || !ref.current) return;
        const bounds = ref.current.getBoundingClientRect();
        x.set((event.clientX - bounds.left - bounds.width / 2) * 0.22);
        y.set((event.clientY - bounds.top - bounds.height / 2) * 0.22);
      }}
      onPointerLeave={() => { x.set(0); y.set(0); }}
    >
      {children}
    </motion.div>
  );
}
