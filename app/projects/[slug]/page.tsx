import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getProjectBySlug, projects } from "@/lib/projects";
import type { Metadata } from "next";
import InteractiveLink from "@/components/interactive-link";
import MediaGallery from "@/components/media-gallery";
import { siteUrl, fullName } from "@/lib/site";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Project Not Found" };

  const url = `${siteUrl}/projects/${project.slug}`;
  const fullTitle = `${project.name} — ${fullName}`;

  return {
    title: project.name,
    description: project.description,
    keywords: project.stack,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description: project.description,
      url,
      type: "article",
      images: [
        {
          url: `/projects/${project.slug}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: project.description,
      images: [`/projects/${project.slug}/opengraph-image`],
    },
  };
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === params.slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.description,
    url: `${siteUrl}/projects/${project.slug}`,
    creator: {
      "@type": "Person",
      name: fullName,
    },
    dateCreated: project.year,
    keywords: project.stack.join(", "),
    ...(project.client
      ? {
          sourceOrganization: { "@type": "Organization", name: project.client },
        }
      : {}),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: `${siteUrl}/#projects`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.name,
        item: `${siteUrl}/projects/${project.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main
        className="min-h-screen"
        style={{
          background: "#080A0F",
          color: "#E2E8F0",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {/* Top accent bar */}
        <div
          className="h-[2px]"
          style={{
            background: `linear-gradient(90deg, ${project.accentColor}, transparent)`,
          }}
        />

        {/* Nav strip */}
        <nav
          className="sticky top-0 z-50 border-b"
          style={{
            background: "rgba(8,10,15,0.92)",
            backdropFilter: "blur(8px)",
            borderColor: "#1A1F2E",
          }}
        >
          <div
            className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <Link href="/" className="group flex items-center gap-2">
              <svg
                className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{ color: "#4A5568" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span
                style={{
                  color: "#4A5568",
                  fontSize: "11px",
                  letterSpacing: "0.15em",
                }}
              >
                BACK
              </span>
            </Link>
            <span
              style={{ color: "#00FF94", fontSize: "13px", fontWeight: 500 }}
            >
              &lt;saif /&gt;
            </span>
            <span
              style={{
                color: "#4A5568",
                fontSize: "10px",
                letterSpacing: "0.15em",
              }}
            >
              PROJECT_{project.id}
            </span>
          </div>
        </nav>

        <div className="mx-auto max-w-5xl px-6 py-16">
          {/* ── HERO HEADER ── */}
          <header className="mb-16">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span
                className="border px-2.5 py-1 font-mono text-[10px] tracking-widest"
                style={{
                  color: project.accentColor,
                  borderColor: `${project.accentColor}40`,
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {project.type}
              </span>
              <span
                className="border px-2.5 py-1 font-mono text-[10px] tracking-widest"
                style={{
                  color: project.status === "IN DEV" ? "#F59E0B" : "#4A5568",
                  borderColor:
                    project.status === "IN DEV" ? "#F59E0B40" : "#1A1F2E",
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {project.status}
              </span>
              {project.featured && (
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "10px",
                    color: "#4A5568",
                    letterSpacing: "0.15em",
                  }}
                >
                  ★ FLAGSHIP
                </span>
              )}
            </div>

            <div className="flex items-start gap-5">
              <div
                className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded border text-4xl"
                style={{
                  borderColor: `${project.accentColor}30`,
                  background: `${project.accentColor}08`,
                }}
              >
                {project.logoSrc ? (
                  <Image
                    src={project.logoSrc}
                    alt={`${project.name} logo`}
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain"
                  />
                ) : (
                  project.icon
                )}
              </div>
              <div>
                <h1
                  className="text-4xl font-semibold leading-tight md:text-5xl"
                  style={{ color: "#fff", fontFamily: "'DM Sans', sans-serif" }}
                >
                  {project.name}
                </h1>
                <p
                  className="mt-2 text-sm"
                  style={{
                    color: project.accentColor,
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {project.tagline}
                </p>
                {project.client ? (
                  <p
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "11px",
                      color: "#4A5568",
                      marginTop: "6px",
                      letterSpacing: "0.1em",
                    }}
                  >
                    CLIENT: {project.client.toUpperCase()} · {project.year}
                  </p>
                ) : (
                  <p
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "11px",
                      color: "#4A5568",
                      marginTop: "6px",
                      letterSpacing: "0.1em",
                    }}
                  >
                    INDEPENDENT PRODUCT · {project.year}
                  </p>
                )}
                {project.motivation && (
                  <p
                    style={{
                      color: "#94A3B8",
                      marginTop: "10px",
                      fontSize: "13px",
                      lineHeight: 1.6,
                      maxWidth: "42rem",
                    }}
                  >
                    {project.motivation}
                  </p>
                )}
              </div>
            </div>

            {/* Metrics strip */}
            <div
              className="mt-10 grid grid-cols-2 gap-px md:grid-cols-4"
              style={{ background: "#1A1F2E" }}
            >
              {project.metrics.map((m) => (
                <div
                  key={m.label}
                  style={{ background: "#0E1117", padding: "16px 20px" }}
                >
                  <p
                    className="text-lg font-semibold"
                    style={{
                      color: project.accentColor,
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {m.value}
                  </p>
                  <p
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "9px",
                      color: "#4A5568",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      marginTop: "4px",
                    }}
                  >
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </header>

          {/* ── BODY GRID ── */}
          <div className="grid gap-8 md:grid-cols-3">
            {/* Main content — 2 cols */}
            <div className="space-y-10 md:col-span-2">
              {/* Overview */}
              <section>
                <SectionTitle accent={project.accentColor}>
                  Overview
                </SectionTitle>
                <p
                  style={{
                    color: "#94A3B8",
                    lineHeight: 1.85,
                    fontSize: "15px",
                  }}
                >
                  {project.longDescription}
                </p>
              </section>

              {/* Challenges */}
              <section>
                <SectionTitle accent={project.accentColor}>
                  Engineering Challenges
                </SectionTitle>
                <div className="space-y-3">
                  {project.challenges.map((c, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ background: project.accentColor }}
                      />
                      <p
                        style={{
                          color: "#94A3B8",
                          fontSize: "14px",
                          lineHeight: 1.7,
                        }}
                      >
                        {c}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Outcomes */}
              <section>
                <SectionTitle accent={project.accentColor}>
                  Outcomes
                </SectionTitle>
                <div className="space-y-3">
                  {project.outcomes.map((o, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 border p-4"
                      style={{ borderColor: "#1A1F2E", background: "#0E1117" }}
                    >
                      <span
                        style={{
                          color: project.accentColor,
                          fontSize: "12px",
                          marginTop: "2px",
                        }}
                      >
                        ✓
                      </span>
                      <p
                        style={{
                          color: "#E2E8F0",
                          fontSize: "14px",
                          lineHeight: 1.6,
                        }}
                      >
                        {o}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Media Gallery */}
              <section>
                <SectionTitle accent={project.accentColor}>
                  Media Gallery
                </SectionTitle>
                <MediaGallery
                  media={project.media ?? []}
                  projectName={project.name}
                  accentColor={project.accentColor}
                />
              </section>
            </div>

            {/* Sidebar — 1 col */}
            <div className="space-y-6">
              {/* Tech Stack */}
              <aside
                className="border p-5"
                style={{ borderColor: "#1A1F2E", background: "#0E1117" }}
              >
                <p
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "9px",
                    color: "#4A5568",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    marginBottom: "14px",
                  }}
                >
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="skill-tag"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "11px",
                        padding: "4px 10px",
                        border: "1px solid #1A1F2E",
                        color: "#4A5568",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </aside>

              {/* All Features */}
              <aside
                className="border p-5"
                style={{ borderColor: "#1A1F2E", background: "#0E1117" }}
              >
                <p
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "9px",
                    color: "#4A5568",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    marginBottom: "14px",
                  }}
                >
                  All Features
                </p>
                <div className="space-y-2">
                  {project.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span
                        style={{
                          color: project.accentColor,
                          fontSize: "10px",
                          marginTop: "3px",
                          flexShrink: 0,
                        }}
                      >
                        ▸
                      </span>
                      <span
                        style={{
                          color: "#94A3B8",
                          fontSize: "12px",
                          lineHeight: 1.6,
                        }}
                      >
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
              </aside>

              {/* Source code link */}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border p-4 text-center transition-all duration-200"
                  style={{
                    borderColor: `${project.accentColor}30`,
                    color: project.accentColor,
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "12px",
                    letterSpacing: "0.1em",
                  }}
                >
                  VIEW SOURCE ↗
                </a>
              )}

              {/* Back to portfolio CTA */}
              <InteractiveLink href="/#projects" accent={project.accentColor}>
                ← ALL PROJECTS
              </InteractiveLink>
            </div>
          </div>

          {/* ── PREV / NEXT NAVIGATION ── */}
          <div
            className="mt-20 grid grid-cols-2 gap-4 border-t pt-10"
            style={{ borderColor: "#1A1F2E" }}
          >
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="group flex flex-col gap-1 border p-5 transition-all duration-200 hover:border-[#00FF94]/20"
                style={{ borderColor: "#1A1F2E", background: "#0E1117" }}
              >
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "9px",
                    color: "#4A5568",
                    letterSpacing: "0.2em",
                  }}
                >
                  ← PREV PROJECT
                </span>
                <span className="mt-1 text-sm font-medium text-white transition-colors group-hover:text-[#00FF94]">
                  {prevProject.name}
                </span>
              </Link>
            ) : (
              <div />
            )}

            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group flex flex-col gap-1 border p-5 text-right transition-all duration-200 hover:border-[#00FF94]/20"
                style={{ borderColor: "#1A1F2E", background: "#0E1117" }}
              >
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "9px",
                    color: "#4A5568",
                    letterSpacing: "0.2em",
                  }}
                >
                  NEXT PROJECT →
                </span>
                <span className="mt-1 text-sm font-medium text-white transition-colors group-hover:text-[#00FF94]">
                  {nextProject.name}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </main>
    </>
  );
}

function SectionTitle({
  children,
  accent,
}: {
  children: React.ReactNode;
  accent: string;
}) {
  return (
    <div className="mb-5">
      <h2
        style={{
          color: "#fff",
          fontSize: "18px",
          fontWeight: 600,
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {children}
      </h2>
      <div className="mt-2 h-px w-8" style={{ background: accent }} />
    </div>
  );
}
