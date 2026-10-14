import Hero from "@/components/Hero";
import { Marquee, About, Programs, Audiences } from "@/components/SectionsA";
import { KidsSpotlight, Events, GetInvolved, Testimonials, CTABanner, Contact } from "@/components/SectionsB";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Programs />
      <Audiences />
      <KidsSpotlight />
      <Events />
      <GetInvolved />
      <Testimonials />
      <CTABanner />
      <Contact />
    </>
  );
}
