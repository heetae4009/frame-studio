import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/config/site";

export function Skills() {
  return (
    <section id="services" style={{ background: "#F2EDE3", padding: "120px 52px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="section-label">What We Do</div>

        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "flex-end", marginBottom: 72, gap: 40, flexWrap: "wrap",
        }}>
          <Reveal>
            <h2 style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(32px,4vw,60px)",
              fontWeight: 500, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#1A1A18",
            }}>
              세 가지 방식으로<br />
              브랜드를 만듭니다.
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p style={{ fontSize: 14, lineHeight: 1.75, color: "#56524E", maxWidth: 260, fontWeight: 300 }}>
              단순한 디자인이 아닌, 브랜드가 세상과 소통하는 언어를 설계합니다.
            </p>
          </Reveal>
        </div>

        {/* Service cards — KERN grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", background: "#D4C9B8", gap: 1 }}>
          {siteConfig.services.map((svc, i) => (
            <Reveal key={svc.num} delay={(i % 3) as 0 | 1 | 2}>
              <div className="svc-card" style={{
                background: "#F2EDE3", padding: "48px 40px 52px",
                transition: "background 0.35s ease, color 0.35s ease",
              }}>
                <div className="svc-num" style={{
                  fontSize: 10, letterSpacing: "0.22em",
                  color: "#B8A88A", marginBottom: 36, textTransform: "uppercase",
                  transition: "color 0.35s ease",
                }}>
                  {svc.num}
                </div>
                <h3 className="svc-name" style={{
                  fontFamily: "var(--font-playfair)", fontSize: 30, fontWeight: 500,
                  lineHeight: 1.15, marginBottom: 20, color: "#1A1A18",
                  whiteSpace: "pre-line", transition: "color 0.35s ease",
                }}>
                  {svc.name}
                </h3>
                <p className="svc-desc" style={{
                  fontSize: 13.5, lineHeight: 1.8, color: "#56524E",
                  fontWeight: 300, marginBottom: 32, transition: "color 0.35s ease",
                }}>
                  {svc.desc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                  {svc.tags.map((tag) => (
                    <span key={tag} className="svc-tag" style={{
                      fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase",
                      padding: "5px 12px", border: "1px solid #D4C9B8",
                      color: "#56524E", transition: "border-color 0.35s ease, color 0.35s ease",
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .svc-card:hover { background:#1A1A18 !important; }
        .svc-card:hover .svc-name { color:#EDE8DC !important; }
        .svc-card:hover .svc-num { color:#D4C9B8 !important; }
        .svc-card:hover .svc-desc { color:rgba(237,232,220,0.65) !important; }
        .svc-card:hover .svc-tag { border-color:rgba(237,232,220,0.25) !important; color:rgba(237,232,220,0.55) !important; }
        @media(max-width:1100px){ #services{ padding:96px 36px !important; } #services [style*="repeat(3,1fr)"]{grid-template-columns:repeat(2,1fr) !important;} }
        @media(max-width:520px){ #services [style*="repeat(3,1fr)"]{grid-template-columns:1fr !important;} }
      `}</style>
    </section>
  );
}
