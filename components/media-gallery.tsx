"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

type MediaItem = { type: "image" | "video"; src: string; caption?: string };

export default function MediaGallery({
  media,
  projectName,
  accentColor,
}: {
  media: MediaItem[];
  projectName: string;
  accentColor: string;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(() => {
    setActiveIndex((i) =>
      i === null ? null : (i - 1 + media.length) % media.length,
    );
  }, [media.length]);
  const showNext = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i + 1) % media.length));
  }, [media.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") showPrev();
      else if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, close, showPrev, showNext]);

  if (!media || media.length === 0) {
    return (
      <div
        className="flex flex-col items-center justify-center gap-2 border border-dashed px-6 py-12 text-center"
        style={{ borderColor: "#1A1F2E", background: "#0E1117" }}
      >
        <span style={{ fontSize: "20px" }}>🖼️</span>
        <p
          style={{
            color: "#4A5568",
            fontSize: "12px",
            fontFamily: "'JetBrains Mono', monospace",
            letterSpacing: "0.05em",
          }}
        >
          No screenshots or demo videos added yet
        </p>
        <p
          style={{
            color: "#4A5568",
            fontSize: "11px",
            maxWidth: "320px",
            lineHeight: 1.6,
          }}
        >
          Add entries to this project&apos;s{" "}
          <code style={{ color: accentColor }}>media</code> array in{" "}
          <code style={{ color: accentColor }}>lib/projects.ts</code> to
          showcase screenshots and demo videos here.
        </p>
      </div>
    );
  }

  const active = activeIndex !== null ? media[activeIndex] : null;

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        {media.map((m, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActiveIndex(i)}
            className="group block w-full cursor-zoom-in overflow-hidden border text-left"
            style={{ borderColor: "#1A1F2E", background: "#0E1117" }}
          >
            <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden">
              {m.type === "video" ? (
                <>
                  <video
                    src={m.src}
                    className="h-full w-full object-cover"
                    muted
                    playsInline
                  />
                  <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-200 group-hover:bg-black/20">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-full"
                      style={{
                        background: "rgba(8,10,15,0.75)",
                        border: `1px solid ${accentColor}50`,
                      }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill={accentColor}
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </>
              ) : (
                <Image
                  src={m.src}
                  alt={m.caption || projectName}
                  fill
                  sizes="(min-width: 768px) 320px, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              )}
            </div>
            {m.caption && (
              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "10px",
                  color: "#4A5568",
                  letterSpacing: "0.05em",
                  padding: "10px 12px",
                  borderTop: "1px solid #1A1F2E",
                }}
              >
                {m.caption}
              </p>
            )}
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{
            padding: "6vh 6vw",
            background: "rgba(5,6,10,0.82)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-5 top-5 flex items-center justify-center rounded-full transition-colors hover:opacity-80 md:right-8 md:top-8"
            style={{
              width: "38px",
              height: "38px",
              background: "rgba(14,17,23,0.85)",
              border: "1px solid #1A1F2E",
              color: "#E2E8F0",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {media.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label="Previous"
              className="absolute left-3 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full transition-colors hover:opacity-80 md:left-8"
              style={{
                width: "40px",
                height: "40px",
                background: "rgba(14,17,23,0.85)",
                border: "1px solid #1A1F2E",
                color: "#E2E8F0",
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          {media.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Next"
              className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full transition-colors hover:opacity-80 md:right-8"
              style={{
                width: "40px",
                height: "40px",
                background: "rgba(14,17,23,0.85)",
                border: "1px solid #1A1F2E",
                color: "#E2E8F0",
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}

          <div
            className="flex max-h-full max-w-full flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="flex items-center justify-center"
              style={{ maxWidth: "82vw", maxHeight: "76vh" }}
            >
              {active.type === "video" ? (
                <video
                  src={active.src}
                  controls
                  autoPlay
                  className="max-h-full max-w-full"
                  style={{ maxHeight: "76vh", border: "1px solid #1A1F2E" }}
                />
              ) : (
                <img
                  src={active.src}
                  alt={active.caption || projectName}
                  className="max-h-full max-w-full object-contain"
                  style={{ maxHeight: "76vh", border: "1px solid #1A1F2E" }}
                />
              )}
            </div>
            {active.caption && (
              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "11px",
                  color: "#94A3B8",
                  letterSpacing: "0.05em",
                  marginTop: "16px",
                  textAlign: "center",
                }}
              >
                {active.caption}
              </p>
            )}
            {media.length > 1 && (
              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "10px",
                  color: accentColor,
                  letterSpacing: "0.15em",
                  marginTop: "8px",
                }}
              >
                {activeIndex! + 1} / {media.length}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
