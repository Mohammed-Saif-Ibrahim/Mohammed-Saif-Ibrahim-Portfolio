import { ImageResponse } from "next/og";
import { fullName } from "@/lib/site";

export const runtime = "edge";
export const alt = `${fullName} — Full Stack Developer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        background: "#080A0F",
        backgroundImage:
          "radial-gradient(circle at 25% 25%, rgba(0,255,148,0.12), transparent 45%)",
        padding: "80px",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 24,
          letterSpacing: 6,
          color: "#00FF94",
          fontFamily: "monospace",
          marginBottom: 24,
        }}
      >
        &gt; AVAILABLE FOR OPPORTUNITIES
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 108,
          lineHeight: 1.05,
          fontWeight: 700,
          color: "#ffffff",
        }}
      >
        <span>MOHAMMED</span>
        <span style={{ color: "#00FF94" }}>SAIF</span>
        <span>IBRAHIM</span>
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 28,
          color: "#94A3B8",
          fontFamily: "monospace",
          marginTop: 32,
        }}
      >
        Full Stack Developer — React · Node.js · TypeScript
      </div>
    </div>,
    { ...size },
  );
}
