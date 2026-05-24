import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/config/site";

export function Projects() {
  const works = siteConfig.works;

  return (
    <section id="works" style={{ background: "#EDE8DC", padding: "120px 52px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="section-label">Selected Works</div>

        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "flex-end", marginBottom: 52, gap: 32, flexWrap: "wrap",
        }}>
          <Reveal>
            <h2 style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(32px,4vw,60px)",
              fontWeight: 500, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#1A1A18",
            }}>
              우리가 함께 만든<br />
              브랜드들
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <Link href="/#contact" className="btn-outline-works" style={{
              display: "inline-flex", alignItems: "center", gap: 12,
              padding: "15px 30px", fontSize: 12, letterSpacing: "0.12em",
              textTransform: "uppercase", textDecoration: "none",
              border: "1px solid #1A1A18", color: "#1A1A18",
              transition: "all 0.3s ease", fontFamily: "var(--font-inter)",
            }}>
              프로젝트 문의 <span className="arr-w" style={{ transition: "transform 0.3s ease" }}>→</span>
            </Link>
          </Reveal>
        </div>

        {/* Works grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "auto auto", gap: 3 }}>
          {works.map((work, i) => (
            <Reveal
              key={work.title}
              delay={(i === 0 ? 0 : i === 1 ? 1 : 2) as 0 | 1 | 2}
              style={{ gridRow: i === 0 ? "span 2" : "auto" }}
            >
              <div className="work-item" style={{ position: "relative", overflow: "hidden" }}>
                {/* Gradient thumb */}
                <div className="work-thumb-inner" style={{
                  background: work.gradient,
                  width: "100%",
                  minHeight: i === 0 ? 600 : undefined,
                  aspectRatio: i === 0 ? undefined : "4/3",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)",
                }}>
                  <div style={{ textAlign: "center", padding: 40 }}>
                    <div style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: i === 0 ? 80 : 40,
                      color: "rgba(255,255,255,0.1)",
                      letterSpacing: "0.06em", lineHeight: 1, marginBottom: 24,
                    }}>
                      {work.title.split(" ")[0]}
                    </div>
                    <div style={{ width: 36, height: 1, background: "rgba(255,255,255,0.3)", margin: "0 auto" }} />
                    {i === 0 && (
                      <div style={{ fontSize: 10, letterSpacing: "0.32em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", marginTop: 24 }}>
                        {work.tags[0]}
                      </div>
                    )}
                  </div>
                </div>

                {/* Info overlay */}
                <div className="work-info-overlay" style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  padding: "28px 28px 32px",
                  background: "linear-gradient(transparent,rgba(22,20,18,0.72))",
                  transform: "translateY(6px)", transition: "transform 0.4s ease",
                }}>
                  <div style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "#D4C9B8", marginBottom: 7 }}>
                    {work.category}
                  </div>
                  <div style={{ fontFamily: "var(--font-playfair)", fontSize: 22, color: "#FAFAF8", fontWeight: 500 }}>
                    {work.title}
                  </div>
                  <div style={{ fontSize: 11, color: "#B8A88A", marginTop: 4 }}>
                    {work.year}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Process */}
        <div style={{ marginTop: 120 }}>
          <div className="section-label">How We Work</div>
          <Reveal>
            <h2 style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(28px,3.5vw,52px)",
              fontWeight: 500, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#1A1A18",
              marginBottom: 72,
            }}>
              네 단계로<br />완성되는 브랜드
            </h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 40 }}>
            {siteConfig.process.map((step, i) => (
              <Reveal key={step.num} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <div style={{ borderTop: "1px solid #D4C9B8", paddingTop: 28 }}>
                  <div style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "#B8A88A", marginBottom: 22 }}>
                    {step.num}
                  </div>
                  <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: 22, fontWeight: 500, marginBottom: 14, lineHeight: 1.25, color: "#1A1A18" }}>
                    {step.name}
                  </h3>
                  <p style={{ fontSize: 13, lineHeight: 1.8, color: "#56524E", fontWeight: 300 }}>
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .work-item:hover .work-thumb-inner { transform:scale(1.04); }
        .work-item:hover .work-info-overlay { transform:translateY(0) !important; }
        .btn-outline-works:hover { background:#1A1A18 !important; color:#EDE8DC !important; }
        .btn-outline-works:hover .arr-w { transform:translateX(5px); }
        @media(max-width:1100px){ #works{ padding:96px 36px !important; } }
        @media(max-width:820px){
          #works{ padding:72px 24px !important; }
          #works [style*="1fr 1fr"]{ grid-template-columns:1fr !important; }
          #works [style*="repeat(4,1fr)"]{ grid-template-columns:repeat(2,1fr) !important; }
        }
        @media(max-width:520px){
          #works [style*="repeat(4,1fr)"]{ grid-template-columns:1fr !important; }
        }
      `}</style>
    </section>
  );
}
