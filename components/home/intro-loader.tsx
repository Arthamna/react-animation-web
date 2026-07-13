"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const words = ["Hello", "Bonjour", "Ciao", "Olá", "やあ", "Hallå", "Guten tag", "Hallo"];

export function IntroLoader() {
  const [visible, setVisible] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!visible || index === words.length - 1) return;
    const timer = window.setTimeout(() => setIndex((value) => value + 1), index === 0 ? 550 : 125);
    return () => window.clearTimeout(timer);
  }, [index, visible]);

  useEffect(() => {
    const exitTimer = window.setTimeout(() => setVisible(false), 1650);
    return () => window.clearTimeout(exitTimer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div className="fixed inset-0 z-[100] grid place-items-center bg-[#141516] text-white" initial={{ y: 0 }} exit={{ y: "-110%" }} transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}>
          <motion.p className="flex items-center gap-4 text-[clamp(2.75rem,5vw,4.5rem)] font-normal tracking-[-0.035em]" initial={{ opacity: 0 }} animate={{ opacity: 0.9 }}>
            <span className="size-2.5 rounded-full bg-white" />{words[index]}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
