"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { navigation } from "@/lib/site-data";
import { Magnetic } from "@/components/ui/magnetic";

export function Header() {
  const pathname = usePathname();
  const [menu, setMenu] = useState({ open: false, pathname });
  const open = menu.pathname === pathname && menu.open;
  const isHome = pathname === "/";

  return (
    <header className={`site-header ${isHome ? "text-white" : "text-[#171719]"}`}>
      <Magnetic><Link href="/" className="logo group" aria-label="Hartmann Kanisius — home"><span className="logo-mark">©</span><span className="logo-name"><span className="logo-code">Code by</span><span className="logo-adam">Mann</span></span></Link></Magnetic>
      <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
        {navigation.slice(1).map((item) => <Magnetic key={item.href}><Link className={`nav-link ${pathname === item.href ? "is-active" : ""}`} href={item.href}>{item.label}</Link></Magnetic>)}
      </nav>
      <button className={`menu-button ${open ? "is-open" : ""}`} onClick={() => setMenu({ open: !open, pathname })} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}><span /><span /></button>
      <AnimatePresence>
        {open && (
          <motion.div id="mobile-menu" className="fixed inset-0 z-40 flex bg-[#1c1d20] text-white md:hidden" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}>
            <div className="flex w-full flex-col justify-between px-8 pb-10 pt-32">
              <div><p className="mb-8 border-b border-white/25 pb-4 text-[11px] uppercase tracking-[0.18em] text-white/45">Navigation</p><nav className="flex flex-col" aria-label="Mobile navigation">
                {navigation.map((item, index) => <motion.div key={item.href} initial={{ x: 60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: index * 0.06 + 0.12 }}><Link className="block py-1 text-[clamp(2.8rem,14vw,4.5rem)] font-light leading-none" href={item.href}>{pathname === item.href && <span className="mr-4 inline-block size-2 rounded-full bg-white align-middle" />}{item.label}</Link></motion.div>)}
              </nav></div>
              <div className="flex gap-5 text-sm text-white/70"><a href="https://github.com/Arthamna" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/hartmann-kanisius/" target="_blank" rel="noreferrer">LinkedIn</a></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
