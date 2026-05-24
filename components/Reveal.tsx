"use client";

import { useEffect, useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: 0 | 1 | 2 | 3;
  as?: keyof React.JSX.IntrinsicElements;
}

const delayClass = ["", "reveal-d1", "reveal-d2", "reveal-d3"] as const;

export function Reveal({ children, className = "", style, delay = 0, as: Tag = "div" }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in");
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const cls = ["reveal", delayClass[delay], className].filter(Boolean).join(" ");

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={cls} style={style}>
      {children}
    </Tag>
  );
}
