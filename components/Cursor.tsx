"use client";

import { useEffect, useRef } from "react";

export function Cursor() {
  const curRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });

  useEffect(() => {
    const cur = curRef.current;
    const ring = ringRef.current;
    if (!cur || !ring) return;

    const onMove = (e: MouseEvent) => {
      pos.current.mx = e.clientX;
      pos.current.my = e.clientY;
      cur.style.left = e.clientX + "px";
      cur.style.top = e.clientY + "px";
    };

    const animate = () => {
      const p = pos.current;
      p.rx += (p.mx - p.rx) * 0.13;
      p.ry += (p.my - p.ry) * 0.13;
      ring.style.left = p.rx + "px";
      ring.style.top = p.ry + "px";
      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMove);
    const raf = requestAnimationFrame(animate);

    const addBig = () => { cur.classList.add("big"); ring.classList.add("big"); };
    const remBig = () => { cur.classList.remove("big"); ring.classList.remove("big"); };

    const attachHover = () => {
      document.querySelectorAll("a,button,.work-item,.svc-card").forEach((el) => {
        el.addEventListener("mouseenter", addBig);
        el.addEventListener("mouseleave", remBig);
      });
    };
    attachHover();

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div id="cursor" ref={curRef} />
      <div id="cursor-ring" ref={ringRef} />
    </>
  );
}
