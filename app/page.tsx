import { IntroLoader } from "@/components/home/intro-loader";
import { Hero } from "@/components/home/hero";
import { Intro } from "@/components/home/intro";
import { ProjectList } from "@/components/home/project-list";
import { GalleryStrip } from "@/components/home/gallery-strip";
import { ContactFooter } from "@/components/site/contact-footer";

export default function Home() {
  return (
    <main className="overflow-clip bg-[#f1f0ec]">
      <IntroLoader /><Hero /><Intro /><ProjectList /><GalleryStrip /><ContactFooter />
    </main>
  );
}
