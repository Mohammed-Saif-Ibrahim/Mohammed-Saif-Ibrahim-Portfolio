import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getPostBySlug, posts } from "@/lib/posts";
import { siteUrl, fullName } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Post Not Found" };

  const url = `${siteUrl}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${post.title} — ${fullName}`,
      description: post.excerpt,
      url,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} — ${fullName}`,
      description: post.excerpt,
    },
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <main
      className="min-h-screen noise-bg"
      style={{
        background: "#080A0F",
        color: "#E2E8F0",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <nav
        className="sticky top-0 z-50 border-b"
        style={{
          background: "rgba(8,10,15,0.92)",
          backdropFilter: "blur(8px)",
          borderColor: "#1A1F2E",
        }}
      >
        <div
          className="mx-auto flex h-14 max-w-3xl items-center justify-between px-6"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          <Link href="/blog" className="group flex items-center gap-2">
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
              BLOG
            </span>
          </Link>
          <span style={{ color: "#00FF94", fontSize: "13px", fontWeight: 500 }}>
            &lt;saif /&gt;
          </span>
        </div>
      </nav>

      <article className="mx-auto max-w-3xl px-6 py-16">
        <p className="font-mono text-[10px] tracking-widest text-[#4A5568]">
          {post.date} · {post.readingTime}
        </p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight text-white md:text-5xl">
          {post.title}
        </h1>
        <div className="mt-6 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="border border-[#1A1F2E] px-2.5 py-1 font-mono text-[10px] tracking-widest text-[#4A5568]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div
          className="prose prose-invert mt-10 max-w-none text-sm leading-relaxed text-[#94A3B8]"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </main>
  );
}
