import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Uzair Waseem, Dublin full-stack engineer shipping tested products and backend systems";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

const stack = ["React", "Next.js", "Node.js", "PostgreSQL", "Playwright", "Secure SDLC"];

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          display: "flex",
          overflow: "hidden",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          color: "#f8fafc",
          background: "linear-gradient(135deg, #050812 0%, #09121f 54%, #0d1b24 100%)"
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.18,
            backgroundImage:
              "linear-gradient(rgba(94,234,212,.24) 1px, transparent 1px), linear-gradient(90deg, rgba(94,234,212,.24) 1px, transparent 1px)",
            backgroundSize: "54px 54px"
          }}
        />
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <div
            style={{
              width: 62,
              height: 62,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid #2dd4bf",
              borderRadius: 14,
              color: "#d9fff8",
              background: "#071018",
              fontSize: 23,
              fontWeight: 900
            }}
          >
            UW
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 31, fontWeight: 850 }}>Uzair Waseem</div>
            <div style={{ color: "#99f6e4", fontSize: 18 }}>Dublin, Ireland</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ maxWidth: 940, fontSize: 72, fontWeight: 900, lineHeight: 0.98 }}>
            Full-stack engineer shipping tested products and backend systems.
          </div>
          <div style={{ maxWidth: 920, marginTop: 28, color: "#bad6d2", fontSize: 30 }}>
            Real products | Live systems | Security-aware delivery
          </div>
        </div>
        <div style={{ display: "flex", gap: 10, color: "#d9fff8", fontSize: 20 }}>
          {stack.map((item) => (
            <span
              key={item}
              style={{
                padding: "8px 12px",
                border: "1px solid rgba(153,246,228,.28)",
                borderRadius: 7,
                background: "rgba(7,16,24,.72)"
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    ),
    size
  );
}
