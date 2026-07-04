import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630
};

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
          justifyContent: "space-between",
          padding: 72,
          color: "#f8fafc",
          background:
            "radial-gradient(circle at 20% 20%, rgba(20,184,166,.34), transparent 30%), radial-gradient(circle at 80% 10%, rgba(56,189,248,.22), transparent 28%), linear-gradient(135deg, #050812 0%, #0b1220 50%, #101827 100%)"
        }}
      >
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: "999px",
              background: "linear-gradient(135deg, #2dd4bf, #fbbf24)"
            }}
          />
          <div style={{ fontSize: 30, fontWeight: 800 }}>Uzair Waseem</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 72, fontWeight: 900, lineHeight: 0.98, maxWidth: 900 }}>
            Software, AI & Cybersecurity Engineer in Dublin
          </div>
          <div style={{ marginTop: 28, color: "#bad6d2", fontSize: 30, maxWidth: 920 }}>
            Production-ready web products, data workflows, QA systems and secure delivery pipelines.
          </div>
        </div>
        <div style={{ display: "flex", gap: 14, color: "#99f6e4", fontSize: 24 }}>
          <span>React</span>
          <span>Next.js</span>
          <span>Python</span>
          <span>AWS</span>
          <span>Secure SDLC</span>
        </div>
      </div>
    ),
    size
  );
}
