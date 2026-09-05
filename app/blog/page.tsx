import Link from "next/link";
import type { Metadata } from "next";
import { posts } from "@/lib/posts";
import { siteUrl, fullName } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description: `Writing from ${fullName} on building software, architecture decisions, and engineering trade-offs.`,
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
};

export default function BlogIndexPage() {
  return (
    <main
      className="min-h-screen noise-bg"
      style={{
        background: "#080A0F",
        color: "#E2E8F0",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Nav strip — mirrors the project detail page */}
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
          <span style={{ color: "#00FF94", fontSize: "13px", fontWeight: 500 }}>
            &lt;saif /&gt;
          </span>
          <span
            style={{
              color: "#4A5568",
              fontSize: "10px",
              letterSpacing: "0.15em",
            }}
          >
            BLOG
          </span>
        </div>
      </nav>

      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-xs tracking-[0.3em] text-[#00FF94]">
            WRITING
          </p>
          <h1 className="font-display mt-3 text-5xl tracking-wide text-white md:text-6xl">
            BLOG
          </h1>
          <div className="mt-3 h-px w-16 bg-[#00FF94]" />
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#94A3B8]">
            Notes on building software — architecture decisions, trade-offs,
            and things learned while shipping. Nothing published yet, but
            this is where it&apos;ll live.
          </p>
        </div>

        {/* Empty state */}
        {posts.length === 0 ? (
          <div
            className="flex flex-col items-center justify-center border px-6 py-24 text-center"
            style={{ borderColor: "#1A1F2E", background: "#0E1117" }}
          >
            <span
              className="mb-4 font-mono text-2xl"
              style={{ color: "#4A5568" }}
            >
              {"</>"}
            </span>
            <p className="font-mono text-xs tracking-widest text-[#4A5568]">
              NO POSTS YET
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#94A3B8]">
              Check back soon — first post is in the works.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group block border border-[#1A1F2E] bg-[#080A0F] p-6 transition-all duration-200 hover:border-[#00FF94]/30"
              >
                <p className="font-mono text-[10px] tracking-widest text-[#4A5568]">
                  {post.date} · {post.readingTime}
                </p>
                <h2 className="mt-2 text-lg font-semibold text-white transition-colors group-hover:text-[#00FF94]">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[#94A3B8]">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
