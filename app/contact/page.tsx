import type { Metadata } from "next";
import { Arrow } from "@/components/ui/arrow";
import { ContactFooter } from "@/components/site/contact-footer";

export const metadata: Metadata = { title: "Contact", description: "Connect with Arthamna to discuss a new interface, frontend build, or interactive digital product." };

export default function ContactPage() {
  return (
    <main className="bg-[#f1f0ec] pt-40 md:pt-52">
      <section className="section-shell pb-32 md:pb-48">
        <p className="mb-7 text-[11px] uppercase tracking-[0.18em] text-black/40">Contact</p>
        <h1 className="page-title max-w-5xl">Got something in mind?<br />Let&apos;s shape it together.</h1>
        <div className="mt-20 grid gap-12 border-t border-black/20 pt-10 md:mt-28 md:grid-cols-2">
          <div><p className="mb-3 text-xs uppercase tracking-[0.15em] text-black/40">Email</p><a className="inline-flex items-center gap-3 text-xl underline decoration-black/25 underline-offset-8 hover:decoration-black" href="mailto:hartmannkanisius@gmail.com">hartmannkanisius@gmail.com <Arrow /></a></div>
          <div><p className="mb-3 text-xs uppercase tracking-[0.15em] text-black/40">Location</p><p className="text-xl">Working from Indonesia, collaborating globally.</p></div>
        </div>
      </section>
      <ContactFooter compact />
    </main>
  );
}
