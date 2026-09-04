"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "lib-backend",
    description:
      "A Django REST Framework backend backed by AWS RDS PostgreSQL, with token auth, serializer-driven validation and a router-based API surface.",
    tags: ["Django", "DRF", "PostgreSQL", "AWS RDS"],
    href: "#",
  },
  {
    title: "Railway booking service",
    description:
      "Models for trains, stations, seats and bookings, seeded with mock data, with early exploration into generating PDF tickets on confirmation.",
    tags: ["Django", "PostgreSQL", "REST API"],
    href: "#",
  },
  {
    title: "Network lab notes",
    description:
      "A hands-on study of OSI/TCP-IP internals — subnetting, ARP, DNS resolution and TLS — run and verified through real packet captures, not slides.",
    tags: ["TCP/IP", "DNS", "GNS3"],
    href: "#",
  },
];

export default function Projects() {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const rows = gsap.utils.toArray<HTMLElement>(".project-row");
      rows.forEach((row) => {
        const bar = row.querySelector(".project-bar");
        gsap.fromTo(
          bar,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: row,
              start: "top 85%",
              end: "top 35%",
              scrub: 0.3,
            },
          }
        );
      });
    },
    { scope }
  );

  return (
    <section id="projects" ref={scope} className="border-t border-line/70">
      <div className="mx-auto max-w-content px-6 py-24 md:px-10 md:py-32">
        <div className="mb-14 grid gap-8 md:grid-cols-[160px_1fr]">
          <p className="font-mono text-[13px] text-signal">03 — projects</p>
          <h2 className="max-w-lg font-display text-[28px] leading-snug text-paper md:text-[32px]">
            A few things I&apos;ve been building and breaking.
          </h2>
        </div>

        <div>
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.href}
              className="project-row focus-ring group relative flex flex-col gap-3 border-t border-line py-8 pl-6 last:border-b md:flex-row md:items-baseline md:justify-between md:gap-8"
            >
              <span className="project-bar absolute left-0 top-0 h-full w-[2px] origin-top bg-signal" />
              <div className="md:w-[45%]">
                <h3 className="flex items-center gap-2 font-display text-[19px] text-paper transition-colors group-hover:text-signal">
                  {p.title}
                  <ArrowUpRight
                    size={16}
                    className="opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </h3>
              </div>
              <p className="max-w-md text-[14px] leading-relaxed text-muted md:flex-1">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-[12px] text-signalDim md:w-[160px] md:justify-end">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
