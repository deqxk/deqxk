"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowDown } from "lucide-react";

const NetworkOrb = dynamic(() => import("./NetworkOrb"), { ssr: false });

export default function Hero() {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-label", { opacity: 0, y: 12, duration: 0.5 })
        .from(".hero-line", { opacity: 0, y: 28, duration: 0.7, stagger: 0.12 }, "-=0.2")
        .from(".hero-copy", { opacity: 0, y: 16, duration: 0.6 }, "-=0.35")
        .from(".hero-cta", { opacity: 0, y: 12, duration: 0.5, stagger: 0.08 }, "-=0.3")
        .from(".hero-orb", { opacity: 0, scale: 0.9, duration: 0.9 }, "-=0.6");
    },
    { scope }
  );

  return (
    <section id="top" ref={scope} className="relative overflow-hidden pt-32 md:pt-40">
      <div className="mx-auto grid max-w-content items-center gap-12 px-6 pb-24 md:grid-cols-[1.1fr_0.9fr] md:px-10 md:pb-32">
        <div>
          <p className="hero-label mb-5 font-mono text-[13px] tracking-wide text-signal">
            software engineer — backend &amp; systems
          </p>
          <h1 className="font-display text-[13vw] leading-[0.95] text-paper sm:text-[52px] md:text-[60px] lg:text-[68px]">
            <span className="hero-line block overflow-hidden">
              <span className="block">I build the parts</span>
            </span>
            <span className="hero-line block overflow-hidden">
              <span className="block">of software users</span>
            </span>
            <span className="hero-line block overflow-hidden">
              <span className="block text-signal">never see.</span>
            </span>
          </h1>
          <p className="hero-copy mt-7 max-w-md text-[15px] leading-relaxed text-muted">
            deqxk — I design APIs, data models and the plumbing that keeps
            them talking to each other correctly. Currently deep in backend
            architecture, networking fundamentals and the occasional
            algorithm for its own sake.
          </p>
          <div className="hero-cta mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="focus-ring border border-signal bg-signal/10 px-5 py-2.5 font-mono text-[13px] text-signal transition-colors hover:bg-signal hover:text-ink"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="focus-ring flex items-center gap-2 px-5 py-2.5 font-mono text-[13px] text-muted transition-colors hover:text-paper"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="hero-orb relative h-[320px] md:h-[440px]">
          <NetworkOrb />
        </div>
      </div>

      <a
        href="#about"
        className="focus-ring absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[11px] text-muted md:flex"
      >
        scroll
        <ArrowDown size={14} className="animate-bounce" />
      </a>
    </section>
  );
}
