import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/config/site";

const gradients = [
  "linear-gradient(150deg,#C4A882,#8B6F4E)",
  "linear-gradient(150deg,#3D3B38,#5C574F)",
  "linear-gradient(150deg,#D4CBBA,#B8A99A)",
];

export function Projects() {
  return (
    <section
      id="projects"
      style={{ background: "#EDE8DC", padding: "120px 52px" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="section-label">Selected Works</div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 52,
            gap: 32,
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
              직접 만든<br />
              프로젝트들
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <Link
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                padding: "15px 30px",
                fontSize: 12,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                textDecoration: "none",
                border: "1px solid #1A1A18",
                color: "#1A1A18",
                transition: "all 0.3s ease",
              }}
              className="btn-outline-proj"
            >
              GitHub <span style={{ transition: "transform 0.3s ease" }} className="arr-p">→</span>
            </Link>
          </Reveal>
        </div>

        {/* Works grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "auto auto",
            gap: 3,
          }}
        >
          {siteConfig.projects.map((project, i) => (
            <Reveal
              key={project.title}
              delay={(i === 0 ? 0 : i === 1 ? 1 : 2) as 0 | 1 | 2}
              className={i === 0 ? "work-item" : "work-item"}
              style={{ gridRow: i === 0 ? "span 2" : "auto" } as React.CSSProperties}
            >
              <div
                className="work-item"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
              >
                {/* Gradient thumbnail */}
                <div
                  style={{
                    background: gradients[i % gradients.length],
                    width: "100%",
                    minHeight: i === 0 ? 600 : undefined,
                    aspectRatio: i === 0 ? undefined : "4/3",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)",
                  }}
                  className="work-thumb-inner"
                >
                  <div style={{ textAlign: "center", padding: 40 }}>
                    <div
                      style={{
                        fontFamily: "var(--font-playfair)",
                        fontSize: i === 0 ? 72 : 40,
                        color: "rgba(255,255,255,0.12)",
                        letterSpacing: "0.1em",
                        lineHeight: 1,
                        marginBottom: 16,
                      }}
                    >
                      {project.title.split(" ")[0].toUpperCase()}
                    </div>
                    <div
                      style={{
                        width: 36,
                        height: 1,
                        background: "rgba(255,255,255,0.3)",
                        margin: "0 auto",
                      }}
                    />
                  </div>
                </div>

                {/* Info overlay */}
                <div
                  className="work-info-overlay"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "28px 28px 32px",
                    background: "linear-gradient(transparent, rgba(22,20,18,0.75))",
                    transform: "translateY(6px)",
                    transition: "transform 0.4s ease",
                  }}
                >
                  <div
                    style={{
                      fontSize: 10,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "#D4C9B8",
                      marginBottom: 7,
                    }}
                  >
                    {project.tags.slice(0, 2).join(" / ")}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: 22,
                      color: "#FAFAF8",
                      fontWeight: 500,
                    }}
                  >
                    {project.title}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: "#B8A88A",
                      marginTop: 4,
                      fontWeight: 300,
                    }}
                  >
                    {project.description.slice(0, 50)}...
                  </div>
                  <div style={{ marginTop: 12, display: "flex", gap: 16 }}>
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: 10,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "rgba(237,232,220,0.7)",
                        textDecoration: "none",
                      }}
                    >
                      Code →
                    </Link>
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: 10,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "rgba(237,232,220,0.7)",
                        textDecoration: "none",
                      }}
                    >
                      Demo →
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .work-item:hover .work-thumb-inner { transform: scale(1.04); }
        .work-item:hover .work-info-overlay { transform: translateY(0) !important; }
        .btn-outline-proj:hover { background: #1A1A18 !important; color: #EDE8DC !important; }
        .btn-outline-proj:hover .arr-p { transform: translateX(5px); }
        @media (max-width: 820px) {
          #projects { padding: 72px 24px !important; }
          #projects [style*="1fr 1fr"] { grid-template-columns: 1fr !important; }
          .work-item[style*="span 2"] { grid-row: span 1 !important; }
        }
        @media (max-width: 1100px) {
          #projects { padding: 96px 36px !important; }
        }
      `}</style>
    </section>
  );
}
