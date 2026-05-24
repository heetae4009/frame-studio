const items = [
  "TypeScript", "React", "Next.js", "Node.js",
  "PostgreSQL", "Docker", "AWS", "REST API",
  "TypeScript", "React", "Next.js", "Node.js",
  "PostgreSQL", "Docker", "AWS", "REST API",
];

export function Ticker() {
  return (
    <div
      className="bg-charcoal overflow-hidden"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)", padding: "14px 0" }}
      aria-hidden="true"
    >
      <div className="ticker-track whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-6 pr-6"
            style={{
              color: "rgba(237,232,220,0.7)",
              fontSize: "11px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            {item}
            <span
              className="flex-shrink-0"
              style={{
                width: 3,
                height: 3,
                background: "#B8A88A",
                borderRadius: "50%",
                display: "inline-block",
              }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
