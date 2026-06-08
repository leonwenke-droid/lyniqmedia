import { ImageResponse } from "next/og";
import { LyniqMarkOg } from "@/lib/lyniq-mark-og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
        <LyniqMarkOg size={28} gradientId="lyniqFavicon" />
      </div>
    ),
    { ...size },
  );
}
