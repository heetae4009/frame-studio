import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/config/site";

export function Skills() {
  return (
    <section
      id="skills"
      style={{ background: "#F2EDE3", padding: "120px 52px" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="section-label">What I Do</div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 72,
            gap: 40,
            flexWrap: "wrap",
          }}
        >
          <Reveal>
            <h2
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(32px, 4vw, 60px)",
                fontWeight: 500,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "#1A1A18",
              }}
            >
              기술로 문제를<br />
              해결합니다.
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.75,
                color: "#56524E",
                maxWidth: 260,
                fontWeight: 300,
              }}
            >
              다양한 프로젝트를 통해 쌓아온 기술 스택입니다.
            </p>
          </Reveal>
        </div>

        {/* Skill cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            background: "#D4C9B8",
            gap: 1,
          }}
        >
          {siteConfig.skills.map((skill, i) => (
            <Reveal key={skill.name} delay={(i % 3) as 0 | 1 | 2}>
              <div
                className="svc-card"
                style={{
                  background: "#F2EDE3",
                  padding: "48px 40px 52px",
                  transition: "background 0.35s ease, color 0.35s ease",
                  cursor: "default",
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.22em",
                    color: "#B8A88A",
                    marginBottom: 36,
                    textTransform: "uppercase",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: 28,
                    fontWeight: 500,
                    lineHeight: 1.15,
                    marginBottom: 16,
                    color: "#1A1A18",
                  }}
                >
                  {skill.name}
                </h3>
                {/* Progress bar */}
                <div
                  style={{
                    height: 1,
                    background: "#D4C9B8",
                    marginBottom: 8,
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      height: "100%",
                      width: `${skill.level}%`,
                      background: "#1A1A18",
                    }}
                  />
                </div>
                <div
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#56524E",
                  }}
                >
                  {skill.level}%
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Extra tags */}
        <Reveal>
          <div style={{ marginTop: 52 }}>
            <div
              style={{
                fontSize: 10,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#B8A88A",
                marginBottom: 20,
              }}
            >
              Also familiar with
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["Git", "Linux", "GraphQL", "Redis", "Vercel", "GitHub Actions", "Figma", "Jest", "Prisma"].map(
                (t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: 10,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      padding: "5px 12px",
                      border: "1px solid #D4C9B8",
                      color: "#56524E",
                    }}
                  >
                    {t}
                  </span>
                )
              )}
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        .svc-card:hover { background: #1A1A18 !important; }
        .svc-card:hover h3 { color: #EDE8DC !important; }
        .svc-card:hover > div:first-child { color: #D4C9B8 !important; }
        .svc-card:hover [style*="D4C9B8"] { background: rgba(212,201,184,0.3) !important; }
        .svc-card:hover [style*="color: #56524E"] { color: rgba(237,232,220,0.55) !important; }
        @media (max-width: 1100px) {
          #skills { padding: 96px 36px !important; }
          #skills [style*="repeat(3,1fr)"] { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 520px) {
          #skills [style*="repeat(3,1fr)"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
