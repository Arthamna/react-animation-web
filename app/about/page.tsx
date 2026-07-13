import type { Metadata } from "next";
import { Arrow } from "@/components/ui/arrow";
import { Globe } from "@/components/about/globe";
import { ContactFooter } from "@/components/site/contact-footer";

export const metadata: Metadata = { title: "About", description: "Discover Hartmann Kanisius's approach to interface design, frontend engineering, and interactive experiences." };

const services = [
  { number: "01", title: "Visual direction", text: "I translate brand goals into coherent interface systems that feel distinctive, intuitive, and easy to navigate." },
  { number: "02", title: "Frontend engineering", text: "I develop responsive Next.js products with maintainable structure, refined motion, and reliable performance." },
  { number: "03", title: "End-to-end delivery", text: "From early exploration through launch, I connect creative decisions and implementation in one focused workflow." },
];

export default function AboutPage() {
  return (
    <main className="bg-[#f1f0ec] pt-40 md:pt-52">
      <section className="section-shell">
        <h1 className="page-title max-w-6xl">Building digital identities<br />with clarity and character.</h1>
        <div className="relative mt-20 border-b border-black/25 pb-24 md:mt-28 md:pb-32"><Globe /></div>
        <div className="grid gap-14 py-28 md:grid-cols-[1fr_1.4fr] md:py-40">
          <Arrow className="size-5 rotate-90" />
          <div className="max-w-2xl"><p className="text-[clamp(1.5rem,2.8vw,2.75rem)] leading-tight tracking-[-0.03em]">I partner with teams across different places to create solutions around their specific goals. Every engagement is guided by care, relevance, and solid execution.</p><p className="mt-8 text-lg text-black/45">Continuously learning<span className="animated-dots" aria-hidden="true">...</span></p></div>
        </div>
      </section>
      <section className="section-shell pb-32 md:pb-48">
        <h2 className="mb-16 text-[clamp(2.5rem,5vw,5rem)] font-light tracking-[-0.045em]">Ways I can contribute…</h2>
        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {services.map((service) => <article key={service.number} className="border-t border-black/25 pt-6"><p className="mb-12 text-sm text-black/40">{service.number}</p><h3 className="mb-6 text-3xl">{service.title}</h3><p className="leading-relaxed text-black/65">{service.text}</p></article>)}
        </div>
      </section>
      <ContactFooter compact />
    </main>
  );
}
