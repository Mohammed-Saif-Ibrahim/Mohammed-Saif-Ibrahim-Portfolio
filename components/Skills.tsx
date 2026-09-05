"use client";
import { useEffect, useRef } from "react";

interface SkillGroup {
  category: string;
  icon: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    icon: "◈",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML / CSS",
    ],
  },
  {
    category: "Backend & APIs",
    icon: "⬡",
    skills: [
      "Node.js",
      "Fastify",
      "Express.js",
      "REST APIs",
      "Background Services",
      "Business Logic",
    ],
  },
  {
    category: "Databases & Data",
    icon: "◎",
    skills: [
      "SQL Server",
      "PostgreSQL",
      "SQL",
      "Data Modeling",
      "Query Design",
    ],
  },
  {
    category: "Integrations & Automation",
    icon: "✦",
    skills: [
      "WhatsApp APIs",
      "SMS Gateways",
      "Email / SMTP",
      "Scheduled Workflows",
      "E-Invoicing",
    ],
  },
  {
    category: "AI & Intelligent Systems",
    icon: "◇",
    skills: [
      "Ollama",
      "Qwen3",
      "Embeddings",
      "Semantic Retrieval",
      "Capability Routing",
    ],
  },
  {
    category: "Deployment & Tooling",
    icon: "△",
    skills: ["Git / GitHub", "Vercel", "Windows Services", "WinSW", "Inno Setup"],
  },
];

const primaryStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Fastify",
  "SQL Server",
  "PostgreSQL",
  "Tailwind CSS",
  "Git",
];

const engineeringFocus = [
  "API Design",
  "Data Modeling",
  "System Integration",
  "Background Processing",
  "Business Logic",
  "AI Integration",
  "Semantic Retrieval",
  "Deployment",
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          e.target.classList.toggle("visible", e.isIntersecting);
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
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#94A3B8]">
          Technologies and engineering practices I use to build full-stack
          applications, integrations, and developer tools.
        </p>
      </div>

      {/* Skill category cards */}
      <div className="mb-20 grid gap-6 md:grid-cols-2">
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

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="skill-tag cursor-default border border-[#1A1F2E] px-3 py-1.5 font-mono text-xs text-[#E2E8F0]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Primary stack */}
      <div className="reveal mb-16">
        <p className="mb-5 font-mono text-xs tracking-[0.3em] text-[#00FF94]">
          PRIMARY STACK
        </p>
        <div className="mb-6 h-px bg-[#1A1F2E]" />
        <div className="flex flex-wrap gap-3">
          {primaryStack.map((tech) => (
            <span
              key={tech}
              className="cursor-default border border-[#00FF94]/30 px-4 py-2 font-mono text-sm text-[#00FF94] transition-colors duration-200 hover:bg-[#00FF94]/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Engineering focus */}
      <div className="reveal">
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.3em] text-[#4A5568]">
          Engineering Focus
        </p>
        <p className="max-w-3xl font-mono text-sm leading-loose text-[#94A3B8]">
          {engineeringFocus.join(" · ")}
        </p>
      </div>
    </section>
  );
}