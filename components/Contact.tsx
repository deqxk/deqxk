"use client";

import { Github, Linkedin, Mail } from "lucide-react";

const links = [
  { label: "Email", href: "mailto:you@example.com", icon: Mail },
  { label: "GitHub", href: "https://github.com/yourusername", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/yourusername", icon: Linkedin },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line/70">
      <div className="mx-auto max-w-content px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-10 md:grid-cols-[160px_1fr]">
          <p className="font-mono text-[13px] text-signal">04 — contact</p>
          <div>
            <h2 className="max-w-lg font-display text-[30px] leading-snug text-paper md:text-[38px]">
              Building something backend-heavy? I&apos;d like to hear about it.
            </h2>
            <div className="mt-10 flex flex-wrap gap-6">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="focus-ring flex items-center gap-2 border border-line px-4 py-2.5 font-mono text-[13px] text-paper transition-colors hover:border-signal hover:text-signal"
                >
                  <l.icon size={15} strokeWidth={1.6} />
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 flex flex-col gap-2 border-t border-line pt-6 font-mono text-[12px] text-muted md:flex-row md:items-center md:justify-between">
          <span>Your Name — built with Next.js, GSAP &amp; Three.js</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </section>
  );
}
