import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Contact() {
  return (
    <section
      id="contact"
      style={{
        background: "#2A2826",
        color: "#EDE8DC",
        textAlign: "center",
        padding: "160px 52px",
      }}
    >
      <p
        style={{
          fontSize: 11,
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: "#B8A88A",
          marginBottom: 36,
        }}
      >
        Get in Touch
      </p>

      <h2
        style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "clamp(40px, 6.5vw, 100px)",
          fontWeight: 500,
          lineHeight: 0.97,
          letterSpacing: "-0.03em",
          marginBottom: 52,
          color: "#EDE8DC",
        }}
      >
        함께 만들어<br />
        <em style={{ fontStyle: "italic", color: "#B8A88A" }}>볼까요?</em>
      </h2>

      <div style={{ marginBottom: 48 }}>
        <Link
          href={`mailto:${siteConfig.email}`}
          style={{
            display: "inline-block",
            fontSize: 17,
            color: "#EDE8DC",
            textDecoration: "none",
            letterSpacing: "0.06em",
            borderBottom: "1px solid #B8A88A",
            paddingBottom: 3,
            transition: "opacity 0.3s ease",
          }}
          className="cta-email-hover"
        >
          {siteConfig.email}
        </Link>
      </div>

      <Link
        href={`mailto:${siteConfig.email}`}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 12,
          padding: "15px 30px",
          fontSize: 12,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          textDecoration: "none",
          background: "#EDE8DC",
          color: "#1A1A18",
          transition: "background 0.3s ease",
          fontFamily: "var(--font-inter)",
          fontWeight: 400,
        }}
        className="cta-btn-hover"
      >
        연락하기 <span style={{ transition: "transform 0.3s ease" }} className="cta-arr">→</span>
      </Link>

      <style>{`
        .cta-email-hover:hover { opacity: 0.7; }
        .cta-btn-hover:hover { background: #D4C9B8 !important; }
        .cta-btn-hover:hover .cta-arr { transform: translateX(5px); }
        @media (max-width: 820px) {
          #contact { padding: 100px 24px !important; }
        }
      `}</style>
    </section>
  );
}
