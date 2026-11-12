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
          background: "#151d19",
          color: "#f4f2eb",
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
          <span style={{ color: "#b7c4b4", fontSize: 20 }}>
            Software Engineer / Dublin, Ireland
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 100,
            letterSpacing: -6,
            lineHeight: 1.02,
          }}
        >
          <span>Software.</span>
          <span style={{ color: "#def58c" }}>With substance.</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: 25,
            borderTop: "1px solid #52624b",
            fontSize: 22,
            color: "#b7c4b4",
          }}
        >
          <span>React · TypeScript · Backend APIs · QA</span>
          <span style={{ color: "#def58c" }}>uzairwaseem.com</span>
        </div>
      </div>
    ),
    size,
  );
}
