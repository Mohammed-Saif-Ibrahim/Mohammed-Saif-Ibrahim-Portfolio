"use client";
import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) =>
          e.target.classList.toggle("visible", e.isIntersecting),
        ),
      { threshold: 0.1 },
    );
    ref.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("mohammedsaifibrahim.dev@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" ref={ref} className="bg-[#0E1117] px-6 py-28">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="reveal mb-16 text-center">
          <p className="mb-3 font-mono text-xs tracking-[0.3em] text-[#00FF94]">
            04 / CONTACT
          </p>
          <h2 className="font-display text-5xl tracking-wide text-white md:text-7xl">
            LET&apos;S BUILD
          </h2>
          <h2 className="glow-text font-display text-5xl tracking-wide text-[#00FF94] md:text-7xl">
            TOGETHER
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-[#00FF94]" />
        </div>

        <div className="reveal">
          <p className="mx-auto mb-12 max-w-xl text-center text-lg leading-relaxed text-[#94A3B8]">
            Currently open to full-time roles, internships, and freelance
            projects. Let&apos;s create something{" "}
            <span className="font-medium text-white">production-worthy</span>.
          </p>

          {/* CTA block */}
          <div className="border border-[#1A1F2E] bg-[#080A0F] p-8 md:p-12">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div className="min-w-0">
                <p className="mb-2 font-mono text-xs tracking-widest text-[#4A5568]">
                  REACH OUT VIA
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="min-w-0 flex-1 truncate border border-[#1A1F2E] bg-[#0E1117] px-4 py-3 font-mono text-sm text-[#94A3B8]">
                    mohammedsaifibrahim.dev@gmail.com
                  </div>
                  <button
                    onClick={copyEmail}
                    className="whitespace-nowrap border border-[#00FF94]/30 px-4 py-3 font-mono text-xs text-[#00FF94] transition-all duration-200 hover:bg-[#00FF94] hover:text-[#080A0F]"
                  >
                    {copied ? "COPIED!" : "COPY"}
                  </button>
                </div>

                <div className="mt-4 flex flex-wrap gap-3">
                  {[
                    {
                      name: "GitHub",
                      href: "https://github.com/Mohammed-Saif-Ibrahim",
                      icon: (
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                      ),
                    },
                    {
                      name: "LinkedIn",
                      href: "https://www.linkedin.com/in/mohammed-saif-ibrahim/",
                      icon: (
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      ),
                    },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border border-[#1A1F2E] px-4 py-2.5 font-mono text-xs text-[#4A5568] transition-all duration-200 hover:border-[#00FF94]/30 hover:text-[#00FF94]"
                    >
                      {social.icon}
                      {social.name}
                    </a>
                  ))}
                  <a
                    href="/resume.pdf"
                    download
                    className="flex items-center gap-2 border border-[#1A1F2E] px-4 py-2.5 font-mono text-xs text-[#4A5568] transition-all duration-200 hover:border-[#00FF94]/30 hover:text-[#00FF94]"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"
                      />
                    </svg>
                    Resume
                  </a>
                </div>
              </div>

              <div className="text-center md:text-right">
                <p className="mb-4 font-mono text-xs tracking-widest text-[#4A5568]">
                  OR SEND A MESSAGE
                </p>
                <div className="flex flex-col gap-3 md:items-end">
                  <a
                    href="mailto:mohammedsaifibrahim.dev@gmail.com"
                    className="inline-flex h-12 w-[210px] items-center justify-center bg-[#00FF94] font-mono text-xs font-bold tracking-widest text-[#080A0F] transition-all duration-200 hover:bg-[#00CC76]"
                  >
                    SEND EMAIL →
                  </a>

                  <a
                    href="/resume.pdf"
                    download
                    className="inline-flex h-12 w-[210px] items-center justify-center border border-[#00FF94]/30 font-mono text-xs tracking-widest text-[#00FF94] transition-all duration-200 hover:bg-[#00FF94]/10"
                  >
                    DOWNLOAD RESUME
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
