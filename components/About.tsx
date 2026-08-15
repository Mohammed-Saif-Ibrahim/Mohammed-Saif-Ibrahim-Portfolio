"use client";
import { useEffect, useRef } from "react";

const highlights = [
  {
    icon: "⚙️",
    label: "Backend Systems",
    desc: "Node.js Windows Services, RESTful APIs, long-running background processes",
  },
  {
    icon: "📊",
    label: "Analytics Dashboards",
    desc: "Real-time BI, revenue trends, peak hours, inventory monitoring",
  },
  {
    icon: "🧮",
    label: "Business Logic",
    desc: "Commission engines — flat, jump slab, progressive slab models",
  },
  {
    icon: "💬",
    label: "Messaging Automation",
    desc: "WhatsApp & SMS flows synced with POS — reminders, confirmations, campaigns",
  },
  {
    icon: "🧾",
    label: "e-Invoicing Compliance",
    desc: "Qatar GTA e-invoicing — generation, submission, QR codes",
  },
  {
    icon: "🎨",
    label: "Frontend Craft",
    desc: "React, Next.js, Tailwind CSS, responsive SaaS UI design",
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

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

  return (
    <section id="about" ref={ref} className="mx-auto max-w-6xl px-6 py-28">
      {/* Section header */}
      <div className="reveal mb-16">
        <p className="mb-3 font-mono text-xs tracking-[0.3em] text-[#00FF94]">
          01 / ABOUT
        </p>
        <h2 className="font-display text-5xl tracking-wide text-white md:text-6xl">
          WHO I AM
        </h2>
        <div className="mt-3 h-px w-16 bg-[#00FF94]" />
      </div>

      <div className="grid items-start gap-16 md:grid-cols-2">
        {/* Text */}
        <div className="reveal space-y-5">
          <p className="text-[1.05rem] leading-relaxed text-[#94A3B8]">
            I&apos;m a{" "}
            <span className="font-medium text-white">Full Stack Developer</span>{" "}
            who builds scalable, production-ready web applications with a strong
            focus on clean architecture, performance, and real-world usability.
          </p>
          <p className="leading-relaxed text-[#94A3B8]">
            I specialize in{" "}
            <span className="font-mono text-sm text-[#00FF94]">React</span>
            -based frontends,{" "}
            <span className="font-mono text-sm text-[#00FF94]">Node.js</span>{" "}
            backend systems, and{" "}
            <span className="font-mono text-sm text-[#00FF94]">SQL Server</span>{" "}
            databases — with hands-on experience developing analytics
            dashboards, automation tools, and full-stack applications.
          </p>
          <p className="leading-relaxed text-[#94A3B8]">
            Beyond dashboards and commission logic, I&apos;ve built{" "}
            <span className="font-medium text-white">
              WhatsApp/SMS messaging automation
            </span>{" "}
            tied directly into live POS data, and implemented{" "}
            <span className="font-medium text-white">
              Qatar GTA e-invoicing compliance
            </span>{" "}
            — covering invoice generation, submission, and QR code processing
            end to end.
          </p>
          <p className="leading-relaxed text-[#94A3B8]">
            My work reflects a strong balance between backend engineering and
            thoughtful UI/UX design, enabling me to build systems that are both{" "}
            <span className="text-white">efficient and user-friendly</span>.
          </p>

          {/* Terminal box */}
          <div className="mt-8 border border-[#1A1F2E] bg-[#0E1117] p-5 font-mono text-sm">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500/60" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/60" />
              <span className="h-3 w-3 rounded-full bg-green-500/60" />
              <span className="ml-2 text-xs text-[#4A5568]">saif.json</span>
            </div>
            <div className="text-[#4A5568]">{"{"}</div>
            <div className="pl-4">
              <span className="text-[#00FF94]">&quot;status&quot;</span>
              <span className="text-white">: </span>
              <span className="text-[#94A3B8]">
                &quot;Available for work&quot;
              </span>
              <span className="text-[#4A5568]">,</span>
            </div>
            <div className="pl-4">
              <span className="text-[#00FF94]">&quot;location&quot;</span>
              <span className="text-white">: </span>
              <span className="text-[#94A3B8]">
                &quot;Remote / On-site&quot;
              </span>
              <span className="text-[#4A5568]">,</span>
            </div>
            <div className="pl-4">
              <span className="text-[#00FF94]">&quot;graduation&quot;</span>
              <span className="text-white">: </span>
              <span className="text-[#94A3B8]">2026</span>
              <span className="text-[#4A5568]">,</span>
            </div>
            <div className="pl-4">
              <span className="text-[#00FF94]">&quot;focus&quot;</span>
              <span className="text-white">: </span>
              <span className="text-[#94A3B8]">
                &quot;Full Stack Engineering&quot;
              </span>
            </div>
            <div className="text-[#4A5568]">{"}"}</div>
          </div>
        </div>

        {/* Highlights grid */}
        <div className="reveal grid grid-cols-1 gap-4 sm:grid-cols-2">
          {highlights.map((h, i) => (
            <div
              key={h.label}
              className="group border border-[#1A1F2E] bg-[#0E1117] p-5 transition-all duration-300 hover:border-[#00FF94]/30"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="mb-3 text-2xl">{h.icon}</div>
              <h3 className="mb-2 text-sm font-medium text-white transition-colors group-hover:text-[#00FF94]">
                {h.label}
              </h3>
              <p className="text-xs leading-relaxed text-[#4A5568]">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
