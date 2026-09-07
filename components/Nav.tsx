"use client";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-line/70 bg-ink/80 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="focus-ring font-display text-sm tracking-tight text-paper">
          deqxk<span className="text-signal">()</span>
        </a>
        <nav className="hidden gap-8 font-mono text-[13px] text-muted md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="focus-ring transition-colors hover:text-paper">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="focus-ring border border-line px-3 py-1.5 font-mono text-[13px] text-paper transition-colors hover:border-signal hover:text-signal"
        >
          Say Hii!
        </a>
      </div>
    </header>
  );
}
