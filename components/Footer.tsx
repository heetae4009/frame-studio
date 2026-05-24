import Link from "next/link";
import { siteConfig } from "@/config/site";

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#works", label: "Works" },
  { href: "/#about", label: "Studio" },
  { href: "/blog", label: "Journal" },
  { href: "/#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer style={{ background: "#1A1A18", color: "#EDE8DC", padding: "52px 52px 44px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 32 }}>
        <div>
          <div style={{ fontFamily: "var(--font-playfair)", fontSize: 17, letterSpacing: "0.1em", marginBottom: 6 }}>
            {siteConfig.name}
          </div>
          <div style={{ fontSize: 11, color: "rgba(237,232,220,0.35)" }}>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </div>
        </div>
        <nav style={{ display: "flex", gap: 28, flexWrap: "wrap", justifyContent: "flex-end" }}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="footer-link-hover" style={{
              fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase",
              color: "rgba(237,232,220,0.5)", textDecoration: "none", transition: "color 0.3s ease",
            }}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <style>{`
        .footer-link-hover:hover { color:#EDE8DC !important; }
        @media(max-width:820px){ footer{ padding:44px 24px 36px !important; } }
      `}</style>
    </footer>
  );
}
