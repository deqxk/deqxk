"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Server,
  Database,
  Network,
  TerminalSquare,
  Code2,
  GitBranch,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const groups = [
  {
    label: "Backend",
    icon: Server,
    items: ["Django", "Django REST Framework", "REST API design", "PostgreSQL"],
  },
  {
    label: "Languages",
    icon: Code2,
    items: ["Python", "C++", "TypeScript", "SQL"],
  },
  {
    label: "Networking",
    icon: Network,
    items: ["TCP/IP", "DNS", "Subnetting & CIDR", "NAT"],
  },
  {
    label: "Data structures",
    icon: Database,
    items: ["Arrays & vectors", "Linked lists", "Stacks & queues", "Complexity analysis"],
  },
  {
    label: "Tooling",
    icon: TerminalSquare,
    items: ["Neovim", "WSL2", "Linux", "pgAdmin"],
  },
  {
    label: "Versioning",
    icon: GitBranch,
    items: ["Git", "GitHub", "Code review"],
  },
];

export default function Skills() {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".skill-group", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: scope.current,
          start: "top 70%",
        },
      });
    },
    { scope }
  );

  return (
    <section id="skills" ref={scope} className="border-t border-line/70">
      <div className="mx-auto max-w-content px-6 py-24 md:px-10 md:py-32">
        <div className="mb-14 grid gap-8 md:grid-cols-[160px_1fr]">
          <p className="font-mono text-[13px] text-signal">02 — skills</p>
          <h2 className="max-w-lg font-display text-[28px] leading-snug text-paper md:text-[32px]">
            Tools I reach for when a system needs to hold up.
          </h2>
        </div>

        <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <div key={g.label} className="skill-group">
              <div className="mb-4 flex items-center gap-2.5 text-paper">
                <g.icon size={17} className="text-signal" strokeWidth={1.6} />
                <span className="font-mono text-[13px] tracking-wide">{g.label}</span>
              </div>
              <ul className="space-y-2 border-l border-line pl-4">
                {g.items.map((item) => (
                  <li key={item} className="text-[14px] text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
