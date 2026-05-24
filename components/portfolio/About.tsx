import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/config/site";

export function About() {
  return (
    <section id="about" style={{ background: "#1A1A18", color: "#EDE8DC", padding: "120px 52px" }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: 80, alignItems: "center",
      }}>
        <div>
          <div className="section-label" style={{ color: "#B8A88A" }}>Our Studio</div>

          <Reveal>
            <h2 style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(32px,4vw,60px)",
              fontWeight: 500, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#EDE8DC",
            }}>
              로컬 브랜드의<br />
              언어를 만드는<br />
              <em style={{ fontStyle: "italic", color: "#B8A88A" }}>스튜디오</em>
            </h2>
          </Reveal>

          <Reveal delay={1}>
            <p style={{
              fontSize: 15, lineHeight: 1.85, color: "rgba(237,232,220,0.65)",
              fontWeight: 300, marginTop: 28, marginBottom: 52,
            }}>
              FRAME은 서울 기반의 브랜드 아이덴티티 스튜디오입니다.<br />
              작은 로컬 카페부터 신생 F&amp;B 브랜드까지, 각 브랜드가 가진
              고유한 이야기를 시각 언어로 번역합니다.<br /><br />
              우리는 예쁜 것을 만들지 않습니다.<br />
              <em style={{ fontStyle: "italic", color: "rgba(237,232,220,0.85)" }}>의미 있는 것을 만듭니다.</em>
            </p>
          </Reveal>

          <Reveal delay={2}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28 }}>
              {siteConfig.stats.map(({ n, l }) => (
                <div key={l}>
                  <div style={{
                    fontFamily: "var(--font-playfair)", fontSize: 44,
                    fontWeight: 500, lineHeight: 1, marginBottom: 8, color: "#EDE8DC",
                  }}>
                    {n}
                  </div>
                  <div style={{
                    fontSize: 11, letterSpacing: "0.14em",
                    textTransform: "uppercase", color: "#B8A88A",
                  }}>
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={1} className="hidden md:block">
          <div style={{ position: "relative" }}>
            <div style={{
              width: "100%", aspectRatio: "3/4",
              background: "#2A2826",
              display: "flex", alignItems: "center", justifyContent: "center",
              position: "relative", overflow: "hidden",
            }}>
              <div style={{ textAlign: "center", padding: 40 }}>
                <div style={{
                  fontFamily: "var(--font-playfair)", fontSize: 80,
                  color: "rgba(237,232,220,0.06)", letterSpacing: "0.1em",
                  lineHeight: 1, marginBottom: 48,
                }}>
                  FRAME
                </div>
                <div style={{ width: 1, height: 72, background: "rgba(200,185,154,0.25)", margin: "0 auto 48px" }} />
                <div style={{
                  fontSize: 10, letterSpacing: "0.32em",
                  color: "rgba(200,185,154,0.55)", textTransform: "uppercase", lineHeight: 2.2,
                }}>
                  Est. 2020<br />Seoul, Korea
                </div>
              </div>
            </div>
            <div style={{
              position: "absolute", bottom: -28, right: -28,
              width: "52%", aspectRatio: "1",
              background: "#B8A88A", opacity: 0.1,
            }} />
          </div>
        </Reveal>
      </div>

      <style>{`
        @media(max-width:820px){ #about > div{ grid-template-columns:1fr !important; gap:48px !important; } }
        @media(max-width:1100px){ #about{ padding:96px 36px !important; } }
      `}</style>
    </section>
  );
}
