const items = [
  "Brand Identity", "Logo Design", "Brand Sheet",
  "Visual System", "Stationery", "Typography",
  "Color System", "Brand Guidelines",
  "Brand Identity", "Logo Design", "Brand Sheet",
  "Visual System", "Stationery", "Typography",
  "Color System", "Brand Guidelines",
];

export function Ticker() {
  return (
    <div
      style={{ background: "#1A1A18", borderTop: "1px solid rgba(255,255,255,0.04)", padding: "14px 0", overflow: "hidden", whiteSpace: "nowrap" }}
      aria-hidden="true"
    >
      <div className="ticker-track" style={{ display: "inline-flex" }}>
        {items.map((item, i) => (
          <span key={i} style={{
            display: "inline-flex", alignItems: "center", gap: 24, paddingRight: 24,
            color: "rgba(237,232,220,0.7)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase",
          }}>
            {item}
            <span style={{ width: 3, height: 3, background: "#B8A88A", borderRadius: "50%", flexShrink: 0, display: "inline-block" }} />
          </span>
        ))}
      </div>
    </div>
  );
}
