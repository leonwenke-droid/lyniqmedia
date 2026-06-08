export function LyniqMarkOg({
  size,
  gradientId,
}: {
  size: number;
  gradientId: string;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 600 600">
      <defs>
        <linearGradient id={gradientId} x1="0.06" y1="0.02" x2="0.74" y2="1">
          <stop offset="0" stopColor="#7fdde4" />
          <stop offset="0.32" stopColor="#06c3cc" />
          <stop offset="0.64" stopColor="#1f80e7" />
          <stop offset="1" stopColor="#1a5cf2" />
        </linearGradient>
      </defs>
      <g transform="rotate(45 300 300)">
        <g
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="56"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M180,456 L107,456 L107,142 L254,142 L254,418" />
          <path
            d="M180,456 L107,456 L107,142 L254,142 L254,418"
            transform="rotate(180 300 300)"
          />
        </g>
      </g>
    </svg>
  );
}
