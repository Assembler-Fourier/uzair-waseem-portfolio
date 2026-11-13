import { ImageResponse } from "next/og";
export const alt = "Uzair Waseem, software engineer in Dublin, Ireland";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#182123",
          color: "#fcfaf5",
          display: "flex",
          flexDirection: "column",
          padding: 65,
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: 27 }}>Uzair Waseem</span>
          <span style={{ color: "#d3cac0", fontSize: 20 }}>
            Software Engineer / Dublin, Ireland
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 83,
            letterSpacing: -6,
            lineHeight: 1.02,
          }}
        >
          <span>Software engineer.</span>
          <span style={{ color: "#f2a78e" }}>Practical by design.</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: 25,
            borderTop: "1px solid #564f49",
            fontSize: 22,
            color: "#d3cac0",
          }}
        >
          <span>React · TypeScript · Backend APIs · QA</span>
          <span style={{ color: "#f2a78e" }}>uzairwaseem.com</span>
        </div>
      </div>
    ),
    size,
  );
}
