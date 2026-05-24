"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#works", label: "Works" },
  { href: "/#about", label: "Studio" },
  { href: "/blog", label: "Journal" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", menuOpen);
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/blog" && pathname.startsWith("/blog");

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 500,
          padding: scrolled ? "16px 52px" : "28px 52px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          transition: "padding 0.4s ease, background 0.4s ease, border-color 0.4s ease",
          background: scrolled ? "rgba(237,232,220,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(26,26,24,0.07)" : "1px solid transparent",
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: 20,
            fontWeight: 500,
            letterSpacing: "0.1em",
            textDecoration: "none",
            color: "#1A1A18",
          }}
        >
          FRAME
        </Link>

        <nav className="hidden md:flex items-center" style={{ gap: 40 }}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link-hover"
              style={{
                fontSize: 12,
                fontWeight: 400,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                textDecoration: "none",
                color: isActive(link.href) ? "#B8A88A" : "#1A1A18",
                position: "relative",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden flex flex-col"
          style={{ gap: 6, background: "none", border: "none", cursor: "pointer", zIndex: 600 }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴"
        >
          <span style={{
            display: "block", width: 24, height: 1, background: "#1A1A18",
            transition: "transform 0.3s ease",
            transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none",
          }} />
          <span style={{
            display: "block", width: 24, height: 1, background: "#1A1A18",
            transition: "transform 0.3s ease",
            transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none",
          }} />
        </button>
      </header>

      {/* Mobile menu */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 550,
        background: "#2A2826",
        display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center", gap: 36,
        opacity: menuOpen ? 1 : 0,
        pointerEvents: menuOpen ? "all" : "none",
        transition: "opacity 0.4s ease",
      }}>
        {links.map((link) => (
          <Link key={link.href} href={link.href}
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(36px,8vw,56px)",
              color: "#EDE8DC",
              textDecoration: "none",
              letterSpacing: "0.04em",
            }}
          >
            {link.label}
          </Link>
        ))}
        <span style={{ fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8A88A" }}>
          Seoul, Korea · Est. 2020
        </span>
      </div>

      <style>{`
        .nav-link-hover::after {
          content:''; position:absolute; bottom:-3px; left:0;
          width:0; height:1px; background:#1A1A18; transition:width 0.3s ease;
        }
        .nav-link-hover:hover::after { width:100%; }
        @media(max-width:820px){
          header[style] { padding-left:24px !important; padding-right:24px !important; }
        }
      `}</style>
    </>
  );
}
