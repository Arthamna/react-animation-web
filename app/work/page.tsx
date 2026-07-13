import type { Metadata } from "next";
import Image from "next/image";
import { Arrow } from "@/components/ui/arrow";
import { ContactFooter } from "@/components/site/contact-footer";
import { projects } from "@/lib/site-data";

export const metadata: Metadata = { title: "Work", description: "A curated collection of interface design and frontend projects created by Hartmann Kanisius." };

export default function WorkPage() {
  return (
    <main className="bg-[#f1f0ec] pt-36 md:pt-48">
      <section className="section-shell pb-24 md:pb-36"><p className="mb-7 text-[11px] uppercase tracking-[0.18em] text-black/40">Featured projects</p><h1 className="page-title max-w-5xl">Digital work built to feel clear, alive, and memorable.</h1></section>
      <section className="section-shell grid gap-x-8 gap-y-16 pb-28 md:grid-cols-2 md:pb-44">
        {projects.map((project, index) => (
          <a href={project.href} target="_blank" rel="noreferrer" className={`${index % 2 ? "md:mt-28" : ""} group`} key={project.title}>
            <div className="relative aspect-[1.28] overflow-hidden" style={{ background: project.color }}><Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain p-[7%] transition-transform duration-700 group-hover:scale-[1.04]" /></div>
            <div className="flex items-start justify-between border-b border-black/20 py-5"><div><h2 className="text-2xl md:text-3xl">{project.title}</h2><p className="mt-2 text-sm text-black/50">{project.discipline}</p></div><Arrow className="mt-2 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" /></div>
          </a>
        ))}
      </section>
      <ContactFooter compact />
    </main>
  );
}
