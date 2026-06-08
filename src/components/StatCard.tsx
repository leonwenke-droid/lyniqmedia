"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  num: string;
  sub: string;
  tag: string;
  desc: string;
  fill: number;
};

export default function StatCard({
  stat,
  index,
}: {
  stat: Stat;
  index: number;
}) {
  const [displayed, setDisplayed] = useState("0");
  const [barWidth, setBarWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !triggered.current) {
          triggered.current = true;
          timer = setTimeout(() => {
            animateCount(stat.num, setDisplayed);
            setBarWidth(stat.fill);
          }, index * 150);
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => {
      if (timer) clearTimeout(timer);
      obs.disconnect();
    };
  }, [stat, index]);

  function animateCount(target: string, set: (v: string) => void) {
    const endNum = parseInt(target);
    const suffix = target.replace(/[0-9]/g, "");
    if (isNaN(endNum)) {
      setTimeout(() => set(target), 700);
      return;
    }
    const duration = 1200;
    const start = Date.now();
    const tick = () => {
      const p = Math.min(1, (Date.now() - start) / duration);
      const ease = 1 - Math.pow(1 - p, 3);
      set(Math.round(ease * endNum) + suffix);
      if (p < 1) requestAnimationFrame(tick);
    };
    tick();
  }

  return (
    <div ref={ref} className="stats-card">
      <span className="stats-card__tag">{stat.tag}</span>

      <div className="stats-card__num">{displayed}</div>

      <div className="stats-card__sub">{stat.sub}</div>

      <div className="stats-card__bar">
        <div className="stats-card__bar-fill" style={{ width: `${barWidth}%` }} />
      </div>

      <div className="stats-card__desc">{stat.desc}</div>
    </div>
  );
}
