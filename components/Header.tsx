"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#workshops", label: "Workshops" },
  { href: "#community", label: "Community" },
  { href: "#events", label: "Events" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open ]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || open ? "bg-cream/95 backdrop-blur-md shadow-[0_1px_0_rgba(43,38,32,0.1)]" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4" aria-label="Main navigation">
          <Link href="#home" onClick={() => setOpen(false)} className="flex items-center gap-3">
            <span className="blob bg-terracotta w-10 h-10 flex items-center justify-center shrink-0" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 3c-4 4-6 7-6 11a6 6 0 0012 0c0-4-2-7-6-11z" stroke="#faf6ef" strokeWidth="1.8" />
                <circle cx="12" cy="14" r="2" fill="#faf6ef" />
              </svg>
            </span>
            <span className={`font-serif text-xl md:text-2xl font-semibold leading-none transition-colors duration-500 ${scrolled || open ? "text-ink" : "text-cream"}`}>
              Learning Through<br className="hidden" /> the Arts
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`link-underline text-[12px] uppercase tracking-[0.18em] transition-colors duration-500 ${scrolled ? "text-ink/70 hover:text-terracotta" : "text-cream/85 hover:text-cream"}`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="bg-terracotta text-cream px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 hover:bg-terracotta-deep hover:shadow-lg"
            >
              Get Involved
            </Link>
          </div>

          <button
            className={`lg:hidden flex h-11 w-11 flex-col items-center justify-center gap-[7px] transition-colors duration-500 ${scrolled || open ? "text-ink" : "text-cream"}`}
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span className={`block h-[2px] w-7 bg-current transition-transform duration-300 ${open ? "rotate-45 translate-y-[9px]" : ""}`} />
            <span className={`block h-[2px] w-7 bg-current transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-[2px] w-7 bg-current transition-transform duration-300 ${open ? "-rotate-45 -translate-y-[9px]" : ""}`} />
          </button>
        </nav>
      </header>

      <div className={`fixed inset-0 z-40 bg-teal-deep transition-all duration-500 lg:hidden ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <nav className="flex h-full flex-col justify-center px-10 gap-1" aria-label="Mobile navigation">
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${100 + i * 60}ms` : "0ms" }}
              className={`font-serif text-4xl text-cream py-2.5 transition-all duration-500 hover:text-golden ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            style={{ transitionDelay: open ? "520ms" : "0ms" }}
            className={`mt-8 inline-block bg-terracotta text-cream px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-center transition-all duration-500 ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            Get Involved
          </Link>
        </nav>
      </div>
    </>
  );
}
