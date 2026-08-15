"use client";
import { useEffect, useRef, useState } from "react";

const skillGroups = [
  {
    category: "Frontend",
    icon: "◈",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "JavaScript", level: 90 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML5 / CSS", level: 90 },
    ],
  },
  {
    category: "Backend & APIs",
    icon: "⬡",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "Business Logic", level: 90 },
      { name: "Background Services", level: 82 },
    ],
  },
  {
    category: "Database & Data",
    icon: "◎",
    skills: [
      { name: "Microsoft SQL Server", level: 88 },
      { name: "SQL / Query Design", level: 85 },
      { name: "Data Modeling", level: 78 },
      { name: "PostgreSQL", level: 70 },
    ],
  },
  {
    category: "Integrations & Automation",
    icon: "✦",
    skills: [
      { name: "WhatsApp APIs", level: 82 },
      { name: "SMS Gateways", level: 80 },
      { name: "Email / SMTP", level: 82 },
      { name: "Scheduled Workflows", level: 85 },
      { name: "Qatar GTA E-Invoicing", level: 78 },
    ],
  },
  {
    category: "AI & Intelligent Systems",
    icon: "◇",
    skills: [
      { name: "Ollama", level: 78 },
      { name: "Qwen3", level: 75 },
      { name: "Embeddings", level: 72 },
      { name: "Semantic Retrieval", level: 72 },
      { name: "Capability Routing", level: 78 },
      { name: "Deterministic AI Tools", level: 80 },
    ],
  },
  {
    category: "Deployment & Tooling",
    icon: "△",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Vercel", level: 85 },
      { name: "Windows Services", level: 80 },
      { name: "WinSW", level: 75 },
      { name: "Inno Setup", level: 75 },
      { name: "VS Code", level: 95 },
    ],
  },
];

const techBadges = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS",
  "Tailwind CSS",

  "Node.js",
  "Express.js",
  "REST APIs",
  "Axios",

  "Microsoft SQL Server",
  "PostgreSQL",
  "SQL",
  "Data Modeling",

  "Git",
  "GitHub",
  "Vercel",
  "Windows Services",
  "WinSW",
  "Inno Setup",

  "WhatsApp API",
  "SMS Gateway",
  "Email / SMTP",

  "Qatar GTA E-Invoicing",

  "Ollama",
  "Qwen3",
  "nomic-embed-text",
  "Semantic Retrieval",
  "AI Capability Routing",
  "Deterministic AI Tools",
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          e.target.classList.toggle("visible", e.isIntersecting);
          if (e.isIntersecting) setAnimated(true);
        });
      },
      { threshold: 0.1 },
    );
    ref.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="mx-auto max-w-6xl px-6 py-28">
      {/* Header */}
      <div className="reveal mb-16">
        <p className="mb-3 font-mono text-xs tracking-[0.3em] text-[#00FF94]">
          03 / SKILLS
        </p>
        <h2 className="font-display text-5xl tracking-wide text-white md:text-6xl">
          TECH STACK
        </h2>
        <div className="mt-3 h-px w-16 bg-[#00FF94]" />
      </div>

      {/* Skill bars grid */}
      <div className="mb-16 grid gap-8 md:grid-cols-2">
        {skillGroups.map((group, gi) => (
          <div
            key={group.category}
            className="reveal border border-[#1A1F2E] bg-[#0E1117] p-6"
            style={{ transitionDelay: `${gi * 80}ms` }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="font-mono text-[#00FF94]">{group.icon}</span>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#94A3B8]">
                {group.category}
              </span>
            </div>
            <div className="space-y-4">
              {group.skills.map((skill, si) => (
                <div key={skill.name}>
                  <div className="mb-1.5 flex items-center justify-between">
                    <span className="font-mono text-sm text-[#94A3B8]">
                      {skill.name}
                    </span>
                    <span className="font-mono text-xs text-[#00FF94]">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="relative h-px overflow-hidden bg-[#1A1F2E]">
                    <div
                      className="skill-bar-fill absolute left-0 top-0 h-full bg-gradient-to-r from-[#00FF94] to-[#00FF94]/50"
                      style={{
                        width: animated ? `${skill.level}%` : "0%",
                        transitionDelay: `${gi * 80 + si * 60}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Tag cloud */}
      <div className="reveal">
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.3em] text-[#4A5568]">
          Full Stack
        </p>
        <div className="flex flex-wrap gap-2">
          {techBadges.map((tech) => (
            <span
              key={tech}
              className="skill-tag cursor-default border border-[#1A1F2E] px-3 py-1.5 font-mono text-xs text-[#4A5568]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
