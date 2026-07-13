import Link from "next/link";

export default function NotFound() {
  return <main className="grid min-h-screen place-items-center bg-[#141516] px-6 text-center text-white"><div><p className="text-sm uppercase tracking-[0.2em] text-white/45">404</p><h1 className="my-5 text-[clamp(4rem,14vw,10rem)] font-light leading-none">Off route?</h1><p className="mb-10 text-white/60">This address does not lead to an active page.</p><Link href="/" className="contact-pill">Return home</Link></div></main>;
}
