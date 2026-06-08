"use client";

import { MockupScaler } from "@/components/mockups/MockupScaler";
import Image from "next/image";

type ScaledScreenshotProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  background?: string;
  fit?: "contain" | "cover";
  align?: "center" | "left" | "right";
  zoom?: number;
};

export function ScaledScreenshot({
  src,
  alt,
  width,
  height,
  background,
  fit = "contain",
  align = "center",
  zoom = 1,
}: ScaledScreenshotProps) {
  return (
    <MockupScaler
      width={width}
      height={height}
      background={background}
      fit={fit}
      align={align}
      zoom={zoom}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        draggable={false}
        sizes="(max-width: 768px) 100vw, 900px"
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          objectFit: fit,
        }}
      />
    </MockupScaler>
  );
}
