import { ImageResponse } from "next/og";
import { getProjectBySlug } from "@/lib/projects";
import { fullName } from "@/lib/site";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateImageMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);
  return [
    {
      id: "og",
      alt: project ? `${project.name} — ${fullName}` : `Project — ${fullName}`,
      size,
      contentType,
    },
  ];
}

export default function Image({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  const accent = project?.accentColor ?? "#00FF94";

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
        backgroundImage: `radial-gradient(circle at 25% 25%, ${accent}20, transparent 45%)`,
        padding: "80px",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 22,
          letterSpacing: 5,
          color: accent,
          fontFamily: "monospace",
          marginBottom: 28,
          border: `1px solid ${accent}55`,
          padding: "8px 18px",
        }}
      >
        {project?.type ?? "PROJECT"}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 72,
          lineHeight: 1.1,
          fontWeight: 700,
          color: "#ffffff",
          maxWidth: 1000,
        }}
      >
        {project?.name ?? "Project Case Study"}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 30,
          color: accent,
          fontFamily: "monospace",
          marginTop: 28,
          maxWidth: 950,
        }}
      >
        {project?.tagline ?? ""}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 24,
          color: "#4A5568",
          fontFamily: "monospace",
          marginTop: 40,
          letterSpacing: 2,
        }}
      >
        {fullName.toUpperCase()} — CASE STUDY
      </div>
    </div>,
    { ...size },
  );
}
