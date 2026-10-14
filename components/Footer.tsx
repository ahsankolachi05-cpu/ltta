import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-teal-deep text-cream">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-cream/10">
          <div className="md:col-span-2">
            <p className="font-serif text-2xl font-semibold">Learning Through the Arts</p>
            <p className="mt-3 text-sm font-light text-cream/55 max-w-sm leading-relaxed">
              A charity devoted to creativity, imagination and arts development — workshops for
              children, youth and adults across Borehamwood, Luton and Bedford.
            </p>
          </div>
          <nav className="flex flex-col gap-3" aria-label="Footer navigation">
            {[
              ["#home", "Home"], ["#about", "About"], ["#workshops", "Workshops"],
              ["#events", "Events"], ["#contact", "Contact"],
            ].map(([href, label]) => (
              <Link key={href} href={href} className="text-sm text-cream/60 hover:text-golden transition-colors w-fit">
                {label}
              </Link>
            ))}
          </nav>
          <div className="text-sm font-light text-cream/55 space-y-2.5">
            <p>4 Penta Court, Station Road,<br />Borehamwood, WD6 1SL</p>
            <p><a href="tel:+447510917517" className="hover:text-golden transition-colors">07510 917517</a></p>
            <p>
              <a href="mailto:p.henderson@learningthroughthearts.co.uk" className="hover:text-golden transition-colors break-all">
                p.henderson@learningthroughthearts.co.uk
              </a>
            </p>
          </div>
        </div>
        <div className="pt-8 flex flex-col sm:flex-row justify-between gap-3 text-xs text-cream/35 font-light">
          <p>© 2026 Learning Through the Arts. All rights reserved. (Concept redesign)</p>
          <p className="font-serif italic text-sm text-cream/45">Creativity belongs to everyone.</p>
        </div>
      </div>
    </footer>
  );
}
