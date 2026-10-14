"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/* ---------- Kids spotlight ---------- */
export function KidsSpotlight() {
  return (
    <section className="bg-cream py-24 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-[11px] uppercase tracking-[0.4em] text-terracotta mb-7">Young Creatives</p>
          <h2 className="font-serif text-4xl md:text-6xl font-medium leading-[1.08] text-ink">
            Big imaginations start <span className="italic text-terracotta">small.</span>
          </h2>
          <p className="mt-7 text-base md:text-lg font-light leading-relaxed text-ink/70 max-w-lg">
            Our children&rsquo;s workshops turn curiosity into creation — colourful, joyful sessions
            where young minds explore art, story and sound while building self-esteem and new
            friendships.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["After-school clubs", "Holiday workshops", "Family sessions"].map((t) => (
              <span key={t} className="bg-parchment border border-ink/10 px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] text-ink/60">
                {t} <span className="text-ink/30">(TBC)</span>
              </span>
            ))}
          </div>
          <Link href="#contact" className="link-underline mt-9 inline-block text-[13px] font-semibold uppercase tracking-[0.2em] text-terracotta">
            Ask about children's sessions
          </Link>
        </div>
        <div className="relative">
          <div className="blob overflow-hidden aspect-square max-w-md mx-auto shadow-xl">
            <Image
              src="/images/kids-workshop.jpg"
              alt="Happy children painting and crafting together"
              fill
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-4 right-6 bg-golden text-ink px-6 py-4 shadow-lg rotate-[2deg]">
            <p className="font-serif italic text-lg">Joy, guaranteed.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Events ---------- */
const events = [
  {
    date: "TBC",
    title: "Community Art Exhibition",
    desc: "Celebrating work created in our workshops — open to all, free entry.",
  },
  {
    date: "TBC",
    title: "Family Creative Day",
    desc: "A day of making together: painting, music and storytelling for all ages.",
  },
  {
    date: "TBC",
    title: "Adult Workshop Taster",
    desc: "Try a session in Luton or Bedford — no experience necessary.",
  },
];

export function Events() {
  return (
    <section id="events" className="bg-parchment py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.4em] text-terracotta mb-7">Events</p>
            <h2 className="font-serif text-4xl md:text-6xl font-medium leading-[1.08] text-ink">
              Come and <span className="italic text-terracotta">create</span> with us.
            </h2>
          </div>
          <p className="text-[11px] uppercase tracking-[0.25em] text-ink/40">Dates to be confirmed</p>
        </div>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((e) => (
            <div key={e.title} className="bg-cream p-9 shadow-md border-t-4 border-terracotta transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
              <p className="inline-block bg-teal text-cream px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em]">{e.date}</p>
              <h3 className="mt-5 font-serif text-2xl font-semibold text-ink">{e.title}</h3>
              <p className="mt-3 font-light text-ink/65 leading-relaxed text-[15px]">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Get involved ---------- */
const ways = [
  {
    t: "Join a Workshop",
    d: "Book a place in Luton, Bedford or Borehamwood — all abilities welcome.",
    cta: "Find a workshop",
  },
  {
    t: "Volunteer",
    d: "Share your time and talents — help us bring creativity to more people.",
    cta: "Volunteer with us",
  },
  {
    t: "Support Us",
    d: "As a charity, every donation helps keep workshops accessible to all.",
    cta: "Donate or partner",
  },
];

export function GetInvolved() {
  return (
    <section className="bg-cream py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.4em] text-terracotta mb-7">Get Involved</p>
          <h2 className="font-serif text-4xl md:text-6xl font-medium leading-[1.08] text-ink">
            There&rsquo;s a place for <span className="italic text-terracotta">you</span> here.
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {ways.map((w, i) => (
            <div key={w.t} className={`p-10 text-center transition-all duration-500 hover:-translate-y-2 ${i === 1 ? "bg-teal text-cream shadow-xl" : "bg-parchment shadow-md"}`}>
              <p className={`font-serif italic text-5xl ${i === 1 ? "text-golden" : "text-terracotta"}`}>0{i + 1}</p>
              <h3 className="mt-5 font-serif text-2xl md:text-3xl font-semibold">{w.t}</h3>
              <p className={`mt-4 font-light leading-relaxed text-[15px] ${i === 1 ? "text-cream/70" : "text-ink/65"}`}>{w.d}</p>
              <Link
                href="#contact"
                className={`mt-8 inline-block px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${i === 1 ? "bg-golden text-ink hover:bg-golden-light" : "bg-terracotta text-cream hover:bg-terracotta-deep"}`}
              >
                {w.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
const quotes = [
  {
    q: "The workshops gave me confidence I didn't know I had. I've met wonderful people and discovered a love for painting.",
    n: "Workshop participant",
    d: "Adult art workshop, Luton",
  },
  {
    q: "My daughter counts down the days to her art club. It's the highlight of her week.",
    n: "Parent",
    d: "Children's workshop",
  },
  {
    q: "A warm, welcoming space where everyone belongs. The drumming circle is pure joy.",
    n: "Workshop participant",
    d: "Music workshop, Bedford",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const n = quotes.length;
  return (
    <section className="bg-teal-deep text-cream py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-[11px] uppercase tracking-[0.4em] text-golden mb-7">Stories</p>
        <h2 className="font-serif text-4xl md:text-5xl font-medium">
          In their <span className="italic text-golden-light">words.</span>
        </h2>
        <div className="mt-12 min-h-[240px] md:min-h-[200px]">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" style={{ transform: `translateX(-${i * 100}%)` }}>
              {quotes.map((t, k) => (
                <div key={k} className="w-full shrink-0 px-4" aria-hidden={k !== i}>
                  <p className="font-serif italic text-2xl md:text-3xl font-light leading-snug text-cream/90">&ldquo;{t.q}&rdquo;</p>
                  <p className="mt-7 text-[12px] uppercase tracking-[0.3em] text-golden">{t.n}</p>
                  <p className="mt-2 text-sm font-light text-cream/50">{t.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button onClick={() => setI((i - 1 + n) % n)} aria-label="Previous story" className="w-11 h-11 border border-cream/25 flex items-center justify-center hover:bg-golden hover:text-ink hover:border-golden transition-all duration-300">
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M12 3L6 9l6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
          </button>
          <div className="flex gap-2">
            {quotes.map((_, k) => (
              <button key={k} onClick={() => setI(k)} aria-label={`Go to story ${k + 1}`} className={`h-1.5 transition-all duration-300 ${k === i ? "w-8 bg-golden" : "w-3 bg-cream/25"}`} />
            ))}
          </div>
          <button onClick={() => setI((i + 1) % n)} aria-label="Next story" className="w-11 h-11 border border-cream/25 flex items-center justify-center hover:bg-golden hover:text-ink hover:border-golden transition-all duration-300">
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M6 3l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
          </button>
        </div>
        <p className="mt-8 text-[11px] uppercase tracking-[0.25em] text-cream/30">Testimonials are placeholders</p>
      </div>
    </section>
  );
}

/* ---------- CTA banner ---------- */
export function CTABanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[60vh] min-h-[420px]">
        <Image
          src="/images/cta-creative.jpg"
          alt="Colourful art supplies arranged on a warm background"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-teal-deep/70" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="max-w-3xl text-center">
            <h2 className="font-serif text-4xl md:text-6xl font-medium leading-[1.08] text-cream">
              Everyone is <span className="italic text-golden-light">creative.</span>
              <br />Come and prove it.
            </h2>
            <p className="mt-6 max-w-xl mx-auto font-light text-cream/75 text-base md:text-lg">
              No experience needed. No judgement. Just bring yourself — we&rsquo;ll bring the paint.
            </p>
            <Link
              href="#contact"
              className="mt-10 inline-block bg-terracotta text-cream px-10 py-4 text-[13px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-terracotta-deep hover:shadow-xl"
            >
              Join Us Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", interest: "Joining a workshop", message: "", website: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (form.name.trim().length < 2) errs.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Please enter a valid email.";
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    if (form.website) { setStatus("sent"); return; }
    setStatus("sending");
    const subject = encodeURIComponent(`Enquiry: ${form.interest} — ${form.name}`);
    const body = encodeURIComponent(`${form.message || "(No message)"}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:p.henderson@learningthroughthearts.co.uk?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  const input = "w-full bg-white border border-ink/12 px-5 py-4 text-base font-light placeholder:text-ink/30 outline-none transition-all focus:border-terracotta";

  return (
    <section id="contact" className="bg-cream py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-14">
        <div>
          <p className="text-[11px] uppercase tracking-[0.4em] text-terracotta mb-7">Contact</p>
          <h2 className="font-serif text-4xl md:text-6xl font-medium leading-[1.08] text-ink">
            Say <span className="italic text-terracotta">hello.</span>
          </h2>
          <p className="mt-7 font-light leading-relaxed text-ink/65 max-w-md text-base md:text-lg">
            Questions about workshops, volunteering or supporting our work? We&rsquo;d love to hear from you.
          </p>
          <div className="mt-10 space-y-5">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-ink/45">Email</p>
              <a href="mailto:p.henderson@learningthroughthearts.co.uk" className="font-serif italic text-xl md:text-2xl text-terracotta hover:text-terracotta-deep transition-colors break-all">
                p.henderson@learningthroughthearts.co.uk
              </a>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-ink/45">Phone</p>
              <a href="tel:+447510917517" className="font-light text-ink/75 text-lg">07510 917517</a>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-ink/45">Find us</p>
              <p className="font-light text-ink/75">4 Penta Court, Station Road,<br />Borehamwood, WD6 1SL</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 md:p-10 shadow-xl border border-ink/5">
          {status === "sent" ? (
            <div role="status" className="py-12 text-center">
              <p className="font-serif text-4xl italic text-terracotta">Thank you!</p>
              <p className="mt-5 font-light text-ink/65 leading-relaxed max-w-sm mx-auto">
                Your email app should now open with your message ready to send — nothing was submitted automatically.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              <input type="text" value={form.website} onChange={(e) => set("website", e.target.value)} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="l-name" className="text-[11px] uppercase tracking-[0.28em] text-ink/55">Name *</label>
                    <input id="l-name" type="text" value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Your name" className={`${input} mt-2`} aria-invalid={!!errors.name} />
                    {errors.name && <p className="mt-2 text-sm text-red-800">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="l-email" className="text-[11px] uppercase tracking-[0.28em] text-ink/55">Email *</label>
                    <input id="l-email" type="email" value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="you@example.com" className={`${input} mt-2`} aria-invalid={!!errors.email} />
                    {errors.email && <p className="mt-2 text-sm text-red-800">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="l-interest" className="text-[11px] uppercase tracking-[0.28em] text-ink/55">I&rsquo;m interested in</label>
                  <select id="l-interest" value={form.interest} onChange={(e) => set("interest", e.target.value)} className={`${input} mt-2`}>
                    {["Joining a workshop", "Children's sessions", "Volunteering", "Supporting / donating", "Something else"].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="l-msg" className="text-[11px] uppercase tracking-[0.28em] text-ink/55">Message</label>
                  <textarea id="l-msg" rows={4} value={form.message} onChange={(e) => set("message", e.target.value)} placeholder="Tell us what's on your mind…" className={`${input} mt-2 resize-none`} />
                </div>
              </div>
              <button type="submit" disabled={status === "sending"} className="mt-8 w-full bg-terracotta text-cream py-4 text-[13px] font-semibold uppercase tracking-[0.22em] transition-all duration-300 hover:bg-terracotta-deep disabled:opacity-60">
                {status === "sending" ? "Preparing…" : "Send Message"}
              </button>
              <p className="mt-5 text-xs font-light text-ink/40">This form opens your email app — no data is stored on a server.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
