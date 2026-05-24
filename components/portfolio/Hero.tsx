"use client";

import Link from "next/link";
import { useEffect } from "react";
import { siteConfig } from "@/config/site";

export function Hero() {
  useEffect(() => {
    const onScroll = () => {
      const h1 = document.querySelector(".hero-h1") as HTMLElement;
      if (h1) h1.style.transform = `translateY(${window.scrollY * 0.06}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section style={{
      minHeight: "100vh",
      padding: "0 52px 80px",
      display: "flex", flexDirection: "column", justifyContent: "flex-end",
      position: "relative", overflow: "hidden",
      background: "#EDE8DC",
    }}>
      {/* Side text */}
      <div className="hidden sm:block" style={{
        position: "absolute", right: -16, top: "50%",
        transform: "rotate(90deg) translateY(-50%)",
        transformOrigin: "right center",
        fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase",
        color: "#B8A88A", whiteSpace: "nowrap",
      }}>
        Brand Identity &nbsp;/&nbsp; Logo &nbsp;/&nbsp; Brand Sheet
      </div>

      {/* Badge */}
      <div style={{
        fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase",
        color: "#56524E", marginBottom: 28,
        display: "inline-flex", alignItems: "center", gap: 14,
      }}>
        <span style={{ display: "block", width: 36, height: 1, background: "#B8A88A" }} />
        {siteConfig.tagline} &mdash; {siteConfig.location}
      </div>

      {/* Heading */}
      <h1 className="hero-h1" style={{
        fontFamily: "var(--font-playfair)",
        fontSize: "clamp(52px,8.5vw,128px)",
        lineHeight: 0.93, fontWeight: 500, letterSpacing: "-0.025em",
        marginBottom: 60, color: "#1A1A18",
      }}>
        브랜딩으로<br />
        <em style={{ fontStyle: "italic", color: "#56524E" }}>아이디어를</em><br />
        만듭니다.
      </h1>

      {/* Footer row */}
      <div style={{
        display: "flex", justifyContent: "space-between",
        alignItems: "flex-end", gap: 32, flexWrap: "wrap",
      }}>
        <p style={{
          fontSize: 14, lineHeight: 1.75, color: "#56524E",
          fontWeight: 300, maxWidth: 300,
        }}>
          {siteConfig.description}
        </p>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 14 }}>
          <Link href="/#contact" className="btn-hero" style={{
            display: "inline-flex", alignItems: "center", gap: 12,
            padding: "15px 30px", fontSize: 12, letterSpacing: "0.12em",
            textTransform: "uppercase", textDecoration: "none",
            background: "#1A1A18", color: "#EDE8DC",
            transition: "background 0.3s ease",
            fontFamily: "var(--font-inter)", fontWeight: 400,
          }}>
            프로젝트 문의 <span className="arr" style={{ transition: "transform 0.3s ease" }}>→</span>
          </Link>
          <span style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8A88A" }}>
            Scroll to explore
          </span>
        </div>
      </div>

      <style>{`
        .btn-hero:hover { background:#2A2826 !important; }
        .btn-hero:hover .arr { transform:translateX(5px); }
        @media(max-width:820px){
          section > h1.hero-h1 { font-size:clamp(48px,12vw,80px) !important; }
          section { padding:0 24px 56px !important; }
        }
      `}</style>
    </section>
  );
}
