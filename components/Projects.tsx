"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeFeatureSet, setActiveFeatureSet] = useState<number | null>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const clientCount = new Set(projects.map((p) => p.client).filter(Boolean))
    .size;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) =>
          e.target.classList.toggle("visible", e.isIntersecting),
        ),
      { threshold: 0.06 },
    );
    ref.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref} className="bg-[#0E1117] px-6 py-28">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="reveal mb-16">
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <p className="font-mono text-xs tracking-[0.3em] text-[#00FF94]">
              02 / PROJECTS
            </p>
            <span className="h-px min-w-[16px] flex-1 bg-[#1A1F2E]" />
            <span className="whitespace-nowrap border border-[#00FF94]/30 px-2 py-1 font-mono text-[9px] tracking-widest text-[#00FF94] sm:px-2.5 sm:text-[10px]">
              REAL PRODUCTION WORK
            </span>
          </div>
          <h2 className="font-display text-5xl tracking-wide text-white md:text-6xl">
            WHAT I&apos;VE BUILT
          </h2>
          <div className="mt-3 h-px w-16 bg-[#00FF94]" />
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#94A3B8]">
            A mix of real client work and independently built products with
            production-level requirements — not tutorials, not clones.
            Shipped, deployed, and in some cases still running live today.
          </p>
          <p className="mt-4 font-mono text-xs tracking-widest text-[#4A5568]">
            {projects.length} PROJECTS · {clientCount} CLIENTS · CLICK{" "}
            <span className="text-[#00FF94]">MORE DETAILS</span> TO DEEP-DIVE
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="reveal project-card group overflow-hidden border border-[#1A1F2E] bg-[#080A0F]"
              style={{ transitionDelay: `${idx * 80}ms` }}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {/* Animated top accent bar */}
              <div className="relative h-[2px] overflow-hidden">
                <div
                  className="absolute inset-0 transition-all duration-500"
                  style={{
                    background: `linear-gradient(90deg, ${project.accentColor}, ${project.accentColor}40, transparent)`,
                    opacity: hoveredIdx === idx ? 1 : 0.45,
                    transform:
                      hoveredIdx === idx ? "scaleX(1)" : "scaleX(0.55)",
                    transformOrigin: "left",
                  }}
                />
              </div>

              <div className="p-5 sm:p-7 md:p-9">
                <div className="grid gap-8 md:grid-cols-5">
                  {/* Left: main info */}
                  <div className="space-y-4 md:col-span-3">
                    <div className="flex items-start gap-4">
                      <div
                        className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded border border-[#1A1F2E] text-3xl transition-all duration-300"
                        style={{
                          borderColor:
                            hoveredIdx === idx
                              ? `${project.accentColor}40`
                              : undefined,
                          background:
                            hoveredIdx === idx
                              ? `${project.accentColor}08`
                              : undefined,
                        }}
                      >
                        {project.logoSrc ? (
                          <Image
                            src={project.logoSrc}
                            alt={`${project.name} logo`}
                            width={28}
                            height={28}
                            className="h-7 w-7 object-contain"
                          />
                        ) : (
                          project.icon
                        )}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="mb-1.5 flex flex-wrap items-center gap-2">
                          <span
                            className="border px-2 py-0.5 font-mono text-[10px] tracking-widest"
                            style={{
                              color: project.accentColor,
                              borderColor: `${project.accentColor}40`,
                            }}
                          >
                            {project.type}
                          </span>
                          <span
                            className="border px-2 py-0.5 font-mono text-[10px] tracking-widest"
                            style={{
                              color:
                                project.status === "IN DEV"
                                  ? "#F59E0B"
                                  : "#4A5568",
                              borderColor:
                                project.status === "IN DEV"
                                  ? "#F59E0B40"
                                  : "#1A1F2E",
                            }}
                          >
                            {project.status}
                          </span>
                          {project.client ? (
                            <span className="border border-[#1A1F2E] px-2 py-0.5 font-mono text-[10px] tracking-widest text-[#4A5568]">
                              ✓ CLIENT PROJECT
                            </span>
                          ) : (
                            <span className="border border-[#1A1F2E] px-2 py-0.5 font-mono text-[10px] tracking-widest text-[#4A5568]">
                              ◆ INDEPENDENT PRODUCT
                            </span>
                          )}
                          {project.featured && (
                            <span className="font-mono text-[10px] tracking-widest text-[#4A5568]">
                              ★ FLAGSHIP
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg font-semibold leading-snug text-white md:text-xl">
                          {project.name}
                        </h3>
                        <p
                          className="mt-0.5 font-mono text-[11px]"
                          style={{ color: project.accentColor }}
                        >
                          {project.tagline}
                        </p>
                        {project.client ? (
                          <p className="mt-1 font-mono text-[10px] tracking-wide text-[#4A5568]">
                            CLIENT: {project.client.toUpperCase()}
                          </p>
                        ) : (
                          <p className="mt-1 font-mono text-[10px] tracking-wide text-[#4A5568]">
                            SELF-INITIATED · NO CLIENT
                          </p>
                        )}
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed text-[#94A3B8]">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="skill-tag border border-[#1A1F2E] px-2.5 py-1 font-mono text-[10px] text-[#4A5568]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-5 pt-1">
                      {project.metrics.map((m) => (
                        <div key={m.label}>
                          <p
                            className="font-mono text-sm font-semibold"
                            style={{ color: project.accentColor }}
                          >
                            {m.value}
                          </p>
                          <p className="font-mono text-[9px] uppercase tracking-widest text-[#4A5568]">
                            {m.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: features */}
                  <div className="md:col-span-2">
                    <button
                      className="mb-3 flex w-full items-center justify-between text-left md:hidden"
                      onClick={() =>
                        setActiveFeatureSet(
                          activeFeatureSet === idx ? null : idx,
                        )
                      }
                    >
                      <span className="font-mono text-xs tracking-widest text-[#4A5568]">
                        KEY FEATURES
                      </span>
                      <span className="text-[#4A5568]">
                        {activeFeatureSet === idx ? "−" : "+"}
                      </span>
                    </button>

                    <div
                      className={`space-y-2.5 md:block ${activeFeatureSet === idx ? "block" : "hidden md:block"}`}
                    >
                      <p className="mb-3 hidden font-mono text-[9px] uppercase tracking-widest text-[#4A5568] md:block">
                        Key Features
                      </p>
                      {project.keyFeatures.map((feature, fi) => (
                        <div
                          key={fi}
                          className="group/feat flex items-start gap-2"
                        >
                          <span
                            className="mt-0.5 shrink-0 text-xs transition-transform duration-200 group-hover/feat:translate-x-0.5"
                            style={{ color: project.accentColor }}
                          >
                            ▸
                          </span>
                          <span className="text-xs leading-relaxed text-[#94A3B8] transition-colors duration-200 group-hover/feat:text-white">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer bar */}
              <div className="flex flex-wrap items-center justify-between gap-y-3 border-t border-[#1A1F2E]/50 px-5 pb-5 sm:px-9">
                <div className="flex items-center gap-3 pt-4 sm:gap-4">
                  <span className="font-mono text-[10px] tracking-widest text-[#1E2535]">
                    PROJECT_{project.id}
                  </span>

                  <span className="font-mono text-[10px] text-[#4A5568]">
                    {project.year}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-4 sm:gap-5">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/live flex items-center gap-2 whitespace-nowrap font-mono text-[11px] tracking-widest transition-all duration-200 hover:gap-3"
                      style={{ color: project.accentColor }}
                    >
                      LIVE SITE
                      <svg
                        className="h-3 w-3 transition-transform duration-200 group-hover/live:-translate-y-0.5 group-hover/live:translate-x-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 17L17 7M7 7h10v10"
                        />
                      </svg>
                    </a>
                  )}

                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/repo flex items-center gap-2 whitespace-nowrap font-mono text-[11px] tracking-widest text-[#4A5568] transition-all duration-200 hover:gap-3 hover:text-white"
                    >
                      SOURCE
                      <svg
                        className="h-3 w-3 transition-transform duration-200 group-hover/repo:-translate-y-0.5 group-hover/repo:translate-x-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 17L17 7M7 7h10v10"
                        />
                      </svg>
                    </a>
                  )}

                  <Link
                    href={`/projects/${project.slug}`}
                    className="group/btn flex items-center gap-2 whitespace-nowrap font-mono text-[11px] tracking-widest transition-all duration-200 hover:gap-3"
                    style={{ color: "#4A5568" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color =
                        project.accentColor;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#4A5568";
                    }}
                  >
                    MORE DETAILS
                    <svg
                      className="h-3 w-3 transition-transform duration-200 group-hover/btn:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
