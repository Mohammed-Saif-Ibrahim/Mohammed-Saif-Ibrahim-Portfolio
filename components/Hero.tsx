"use client";
import { useEffect, useRef, useState } from "react";

const roles = [
  "Full Stack Developer",
  "React Engineer",
  "Node.js Architect",
  "UI/UX Craftsman",
  "Backend Systems Builder",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Typewriter
  useEffect(() => {
    const role = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === role) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      const speed = isDeleting ? 40 : 80;
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? role.slice(0, displayText.length - 1)
            : role.slice(0, displayText.length + 1),
        );
      }, speed);
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 148, ${p.opacity})`;
        ctx.fill();
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 255, 148, ${0.06 * (1 - dist / 100)})`;
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="grid-bg relative flex min-h-screen items-center overflow-hidden">
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0"
      />

      {/* Gradient orbs */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-[#00FF94]/5 blur-3xl" />
      <div className="bg-[#00FF94]/3 pointer-events-none absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-32">
        <div className="max-w-3xl">
          {/* Terminal tag */}
          <div
            className="opacity-0-init animate-fade-up delay-100"
            style={{ animationFillMode: "forwards" }}
          >
            <span className="inline-block border border-[#00FF94]/30 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.3em] text-[#00FF94]">
              &gt; Available for opportunities
            </span>
          </div>

          {/* Name */}
          <div
            className="opacity-0-init mt-6 animate-fade-up delay-200"
            style={{ animationFillMode: "forwards" }}
          >
            <h1 className="font-display text-[clamp(3rem,10vw,7rem)] leading-none tracking-wide">
              <span className="block text-white">MOHAMMED</span>
              <span className="glow-text block text-[#00FF94]">SAIF</span>
              <span className="block text-white">IBRAHIM</span>
            </h1>
          </div>

          {/* Typewriter role */}
          <div
            className="opacity-0-init mt-4 animate-fade-up delay-300"
            style={{ animationFillMode: "forwards" }}
          >
            <p className="font-mono text-[clamp(0.9rem,2.5vw,1.2rem)] text-[#94A3B8]">
              <span className="text-[#4A5568]">const role = </span>
              <span className="text-[#00FF94]">&quot;</span>
              <span className="text-white">{displayText}</span>
              <span className="animate-blink text-[#00FF94]">|</span>
              <span className="text-[#00FF94]">&quot;</span>
            </p>
          </div>

          {/* Description */}
          <div
            className="opacity-0-init delay-400 mt-6 animate-fade-up"
            style={{ animationFillMode: "forwards" }}
          >
            <p className="max-w-xl text-lg leading-relaxed text-[#94A3B8]">
              Building{" "}
              <span className="font-medium text-white">
                scalable, production-ready
              </span>{" "}
              web applications with clean architecture and real-world usability.
              CS student graduating{" "}
              <span className="font-mono text-[#00FF94]">2026</span>.
            </p>
          </div>

          {/* CTAs */}
          <div
            className="opacity-0-init mt-10 flex animate-fade-up flex-wrap gap-4 delay-500"
            style={{ animationFillMode: "forwards" }}
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 bg-[#00FF94] px-6 py-3 font-mono text-sm font-semibold tracking-wider text-[#080A0F] transition-all duration-200 hover:bg-[#00CC76]"
            >
              VIEW PROJECTS
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 border border-[#1A1F2E] px-6 py-3 font-mono text-sm tracking-wider text-[#94A3B8] transition-all duration-200 hover:border-[#00FF94]/40 hover:text-white"
            >
              GET IN TOUCH
            </a>
          </div>

          {/* Stats */}
          <div
            className="opacity-0-init delay-600 mt-16 flex animate-fade-up flex-wrap gap-8"
            style={{ animationFillMode: "forwards" }}
          >
            {[
              { value: "2+", label: "Years Building" },
              { value: "3+", label: "Projects Shipped" },
              { value: "3", label: "Core Stacks" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="glow-text font-display text-4xl text-[#00FF94]">
                  {stat.value}
                </span>
                <span className="mt-1 font-mono text-xs uppercase tracking-widest text-[#4A5568]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 opacity-50">
        <span className="font-mono text-[10px] tracking-widest text-[#4A5568]">
          SCROLL
        </span>
        <div className="h-12 w-px bg-gradient-to-b from-[#00FF94]/50 to-transparent" />
      </div>
    </section>
  );
}
