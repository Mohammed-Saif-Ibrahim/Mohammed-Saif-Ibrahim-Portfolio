"use client";
import { useState, useEffect } from "react";

const navItems = [
  { label: "about", href: "#about" },
  { label: "projects", href: "#projects" },
  { label: "skills", href: "#skills" },
  { label: "contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ["about", "projects", "skills", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed left-0 right-0 top-0 z-50 border-b backdrop-blur-md transition-colors duration-300 will-change-[background-color,border-color]"
      style={{
        backgroundColor: scrolled ? "rgba(8,10,15,0.9)" : "rgba(8,10,15,0)",
        borderBottomColor: scrolled ? "#1A1F2E" : "transparent",
      }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <a href="#" className="group flex items-center gap-2">
          <span className="group-hover:glow-text font-mono text-sm font-semibold tracking-wider text-[#00FF94] transition-all">
            &lt;saif /&gt;
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`nav-link ${active === item.label ? "active" : ""}`}
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-1.5 border border-[#1A1F2E] px-4 py-2 font-mono text-xs tracking-widest text-[#94A3B8] transition-all duration-200 hover:border-[#00FF94]/40 hover:text-[#00FF94]"
            >
              <svg
                className="h-3.5 w-3.5"
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
              RESUME
            </a>
            <a
              href="#contact"
              className="border border-[#00FF94] px-4 py-2 font-mono text-xs tracking-widest text-[#00FF94] transition-all duration-200 hover:bg-[#00FF94] hover:text-[#080A0F]"
            >
              HIRE ME
            </a>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="-mr-2 flex h-11 w-11 items-center justify-center md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 rounded-full bg-[#00FF94] transition-all duration-200 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-[#00FF94] transition-all duration-200 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-[#00FF94] transition-all duration-200 ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="flex flex-col gap-4 border-t border-[#1A1F2E] bg-[#0E1117] px-6 py-4 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="nav-link py-1"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-1.5 py-1 font-mono text-xs tracking-widest text-[#94A3B8] transition-all duration-200 hover:text-[#00FF94]"
            onClick={() => setMenuOpen(false)}
          >
            <svg
              className="h-3.5 w-3.5"
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
            RESUME
          </a>
          <a
            href="#contact"
            className="border border-[#00FF94] px-4 py-2.5 text-center font-mono text-xs tracking-widest text-[#00FF94] transition-all duration-200 hover:bg-[#00FF94] hover:text-[#080A0F]"
            onClick={() => setMenuOpen(false)}
          >
            HIRE ME
          </a>
        </div>
      )}
    </nav>
  );
}
