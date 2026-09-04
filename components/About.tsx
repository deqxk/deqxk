"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const paragraph =
  "I got into engineering the way most people do — by breaking things first and understanding them after. Somewhere between routing tables, database migrations and off-by-one errors, backend systems became the part I actually enjoy: the layer nobody sees, that everything else depends on.";

export default function About() {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const words = gsap.utils.toArray<HTMLElement>(".about-word");
      gsap.set(words, { opacity: 0.18 });
      gsap.to(words, {
        opacity: 1,
        stagger: 0.02,
        ease: "none",
        scrollTrigger: {
          trigger: scope.current,
          start: "top 75%",
          end: "bottom 55%",
          scrub: 0.4,
        },
      });
    },
    { scope }
  );

  return (
    <section id="about" ref={scope} className="border-t border-line/70">
      <div className="mx-auto grid max-w-content gap-8 px-6 py-24 md:grid-cols-[160px_1fr] md:px-10 md:py-32">
        <p className="font-mono text-[13px] text-signal">01 — about</p>
        <p className="max-w-2xl font-display text-[26px] leading-snug text-paper sm:text-[30px] md:text-[34px]">
          {paragraph.split(" ").map((word, i) => (
            <span key={i} className="about-word mr-[0.3em] inline-block">
              {word}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
