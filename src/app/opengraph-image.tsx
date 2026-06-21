import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Steven Koehl — Software Developer & Novelist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0d0d0d 0%, #1a1a2e 100%)",
          fontFamily: "Inter",
        }}
      >
        {/* Red accent bar */}
        <div style={{ display: "flex", gap: 4, marginBottom: 40 }}>
          <div style={{ width: 60, height: 4, background: "#e63946", borderRadius: 2 }} />
          <div style={{ width: 60, height: 4, background: "#c9a227", borderRadius: 2 }} />
        </div>

        <div
          style={{
            fontSize: 64,
            fontWeight: 900,
            color: "#f0f0f0",
            letterSpacing: "-2px",
            lineHeight: 1,
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          Steven Koehl
        </div>

        <div
          style={{
            fontSize: 28,
            fontWeight: 500,
            color: "#a0a0a0",
            textAlign: "center",
            maxWidth: 700,
          }}
        >
          Software Developer & Novelist
        </div>

        <div
          style={{
            display: "flex",
            gap: 32,
            marginTop: 40,
            fontSize: 18,
            fontWeight: 600,
          }}
        >
          <span style={{ color: "#e63946" }}>Engineering</span>
          <span style={{ color: "#555" }}>·</span>
          <span style={{ color: "#c9a227" }}>Writing</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
