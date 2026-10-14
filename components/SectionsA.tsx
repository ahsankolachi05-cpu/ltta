import Image from "next/image";
import Link from "next/link";

/* ---------- Marquee ---------- */
export function Marquee() {
  const words = ["Music", "Writing", "Painting", "Community", "Imagination", "Learning", "Together"];
  const row = [...words, ...words];
  return (
    <div className="bg-terracotta overflow-hidden py-4 select-none" aria-hidden="true">
      <div className="animate-marquee flex w-max items-center gap-8 pr-8">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="font-serif italic text-2xl text-cream whitespace-nowrap">{w}</span>
            <span className="text-cream/60 text-xl">✳</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- About / Mission ---------- */
const goals = [
  "Nurture creativity, expression and artistic talents",
  "Encourage participatory, hands-on learning",
  "Build self-esteem, identity and balanced development",
  "Explore cultural and social understanding",
  "Foster harmony and social integration",
];

export function About() {
  return (
    <section id="about" className="bg-cream py-24 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="blob-2 overflow-hidden aspect-[4/3] shadow-xl">
            <Image
              src="/images/community-event.jpg"
              alt="Visitors enjoying colourful artwork at a community arts exhibition"
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 lg:right-6 bg-teal text-cream px-7 py-5 shadow-xl max-w-[260px]">
            <p className="font-serif text-3xl font-semibold">10+</p>
            <p className="text-sm text-cream/70 mt-1">years of creative community work <span className="text-cream/40">(TBC)</span></p>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <p className="text-[11px] uppercase tracking-[0.4em] text-terracotta mb-7">About Us</p>
          <h2 className="font-serif text-4xl md:text-6xl font-medium leading-[1.08] text-ink">
            Devoted to <span className="italic text-terracotta">creativity</span> & community.
          </h2>
          <p className="mt-7 text-base md:text-lg font-light leading-relaxed text-ink/70 max-w-xl">
            Learning Through the Arts (LTTA) exists to open doors through art. Our projects —
            ranging from music to writing — ignite individual imagination and creative ability,
            while our workshops promote multicultural learning and deeper understanding for
            children, youth and adults.
          </p>
          <div className="mt-9">
            <p className="text-[11px] uppercase tracking-[0.3em] text-ink/50 mb-5">Our goals</p>
            <ul className="space-y-3.5">
              {goals.map((g) => (
                <li key={g} className="flex items-start gap-4">
                  <span className="mt-1.5 w-2.5 h-2.5 blob bg-terracotta shrink-0" aria-hidden="true" />
                  <span className="font-light text-ink/75">{g}</span>
                </li>
              ))}
            </ul>
          </div>
          <Link
            href="#workshops"
            className="mt-10 inline-block bg-teal text-cream px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-teal-deep hover:shadow-lg"
          >
            See What We Do
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- Programs ---------- */
const programs = [
  {
    name: "Music Workshops",
    desc: "Rhythm, song and sound — from drumming circles to vocal sessions, discover the joy of making music together. No experience needed.",
    image: "/images/program-music.jpg",
    alt: "A community drumming circle with joyful participants",
    color: "bg-terracotta",
  },
  {
    name: "Art Workshops",
    desc: "Painting, drawing and mixed media — explore colour and texture in relaxed, encouraging sessions for every skill level.",
    image: "/images/program-art.jpg",
    alt: "Hands painting with vibrant colours on canvas",
    color: "bg-teal",
  },
  {
    name: "Writing Workshops",
    desc: "Stories, poetry and personal expression — find your voice and share it in a supportive creative circle.",
    image: "/images/program-writing.jpg",
    alt: "People writing in notebooks at a cosy workshop table",
    color: "bg-golden",
  },
];

export function Programs() {
  return (
    <section id="workshops" className="bg-parchment py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.4em] text-terracotta mb-7">Creative Experiences</p>
          <h2 className="font-serif text-4xl md:text-6xl font-medium leading-[1.08] text-ink">
            Workshops that <span className="italic text-terracotta">spark</span> something.
          </h2>
          <p className="mt-6 font-light text-ink/60 text-base md:text-lg">
            Creative art workshops for adults in Luton and Bedford — plus sessions for children
            and youth. <span className="text-ink/40">(Schedule details TBC)</span>
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((p) => (
            <article
              key={p.name}
              className="group bg-cream overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 768px) 90vw, 30vw"
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.07]"
                />
                <span className={`absolute top-4 left-4 ${p.color} text-cream px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em]`}>
                  Workshop
                </span>
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-ink">{p.name}</h3>
                <p className="mt-4 font-light leading-relaxed text-ink/65 text-[15px]">{p.desc}</p>
                <Link href="#contact" className="link-underline mt-6 inline-block text-[12px] font-semibold uppercase tracking-[0.2em] text-terracotta">
                  Join a session
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Who it's for ---------- */
const audiences = [
  {
    t: "Children",
    d: "Playful, imaginative sessions that build confidence and curiosity through making.",
    icon: "✿",
  },
  {
    t: "Youth",
    d: "A space to express identity, explore ideas and develop creative skills.",
    icon: "✦",
  },
  {
    t: "Adults",
    d: "Relaxed workshops in Luton and Bedford — creativity, connection and calm.",
    icon: "❋",
  },
];

export function Audiences() {
  return (
    <section className="bg-teal-deep text-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.4em] text-golden mb-7">Who We Welcome</p>
          <h2 className="font-serif text-4xl md:text-6xl font-medium leading-[1.08]">
            For <span className="italic text-golden-light">every</span> age, every background.
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((a) => (
            <div key={a.t} className="border border-cream/15 p-10 text-center transition-all duration-500 hover:border-golden hover:bg-cream/5">
              <p className="text-5xl" aria-hidden="true">{a.icon}</p>
              <h3 className="mt-6 font-serif text-3xl font-semibold">{a.t}</h3>
              <p className="mt-4 font-light leading-relaxed text-cream/65">{a.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
