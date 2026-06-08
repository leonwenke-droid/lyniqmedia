import { ImageResponse } from "next/og";
import { LyniqMarkOg } from "@/lib/lyniq-mark-og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
        }}
      >
        <LyniqMarkOg size={150} gradientId="lyniqApple" />
      </div>
    ),
    { ...size },
  );
}
