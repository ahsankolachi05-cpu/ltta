import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative bg-teal-deep overflow-hidden">
      {/* Decorative paint blobs */}
      <div className="blob absolute -top-20 -right-24 w-[420px] h-[420px] bg-terracotta/25 animate-float-slow" aria-hidden="true" />
      <div className="blob-2 absolute bottom-10 -left-28 w-[340px] h-[340px] bg-golden/20 animate-float-slow" style={{ animationDelay: "2s" }} aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 pt-36 pb-20 md:pt-44 md:pb-28 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center min-h-[100svh]">
        <div className="max-w-xl">
          <p className="animate-fade-up inline-block bg-cream/10 border border-cream/20 text-golden-light text-[11px] uppercase tracking-[0.35em] px-5 py-2.5 mb-8">
            A Community Arts Charity
          </p>
          <h1 className="animate-fade-up delay-100 font-serif text-5xl md:text-7xl lg:text-[4.8rem] font-medium leading-[1.04] text-cream">
            Where creativity <span className="italic text-golden">ignites</span> community.
          </h1>
          <p className="animate-fade-up delay-200 mt-7 text-base md:text-lg font-light leading-relaxed text-cream/75 max-w-lg">
            Learning Through the Arts is devoted to creativity, imagination and arts development —
            music, writing and art workshops that bring children, youth and adults together.
          </p>
          <div className="animate-fade-up delay-300 mt-10 flex flex-wrap items-center gap-5">
            <Link
              href="#workshops"
              className="bg-terracotta text-cream px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-terracotta-deep hover:shadow-xl"
            >
              Explore Workshops
            </Link>
            <Link href="#about" className="link-underline text-cream/85 text-[13px] uppercase tracking-[0.2em] hover:text-cream">
              Our story
            </Link>
          </div>
          <div className="animate-fade-up delay-400 mt-12 flex flex-wrap gap-x-8 gap-y-3 text-cream/55 text-sm">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-terracotta" aria-hidden="true" /> Borehamwood
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-golden" aria-hidden="true" /> Luton & Bedford
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal" aria-hidden="true" /> All ages welcome
            </span>
          </div>
        </div>

        {/* Image renders directly, never hidden */}
        <div className="relative animate-fade-in delay-200">
          <div className="blob overflow-hidden aspect-[4/5] max-w-md mx-auto lg:ml-auto shadow-2xl">
            <Image
              src="/images/hero-art-workshop.jpg"
              alt="A diverse group painting together at a community art workshop"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-4 lg:left-10 bg-cream px-6 py-4 shadow-xl max-w-[250px] rotate-[-2deg]">
            <p className="font-serif italic text-lg text-ink leading-snug">
              &ldquo;Creativity belongs to everyone.&rdquo;
            </p>
          </div>
          <div className="absolute -top-6 right-6 w-24 h-24 animate-spin-slow" aria-hidden="true">
            <svg viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="46" stroke="#d9a441" strokeWidth="1.5" strokeDasharray="6 8" />
              <circle cx="50" cy="50" r="8" fill="#c96f4a" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
