import Link from "next/link";
import { FileText, LogOut, Home } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="admin-area"
      style={{
        minHeight: "100vh",
        background: "#F2EDE3",
        display: "flex",
      }}
    >
      {/* Sidebar */}
      <aside
        style={{
          width: 220,
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          background: "#1A1A18",
          display: "flex",
          flexDirection: "column",
          borderRight: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div
          style={{
            padding: "28px 24px",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: 18,
              color: "#EDE8DC",
              letterSpacing: "0.06em",
              marginBottom: 4,
            }}
          >
            Admin
          </div>
          <div
            style={{
              fontSize: 10,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#B8A88A",
            }}
          >
            Blog Manager
          </div>
        </div>

        <nav style={{ flex: 1, padding: "16px 12px", display: "flex", flexDirection: "column", gap: 4 }}>
          <Link
            href="/admin/posts"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 12px",
              fontSize: 12,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(237,232,220,0.6)",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            className="admin-nav-link"
          >
            <FileText size={14} /> Posts
          </Link>
          <Link
            href="/"
            target="_blank"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 12px",
              fontSize: 12,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(237,232,220,0.6)",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            className="admin-nav-link"
          >
            <Home size={14} /> View Site
          </Link>
        </nav>

        <div style={{ padding: "12px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <form action="/api/auth/logout" method="POST">
            <button
              type="submit"
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 12px",
                fontSize: 12,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(184,168,138,0.7)",
                background: "none",
                border: "none",
                cursor: "pointer",
                transition: "color 0.2s ease",
              }}
              className="admin-logout-btn"
            >
              <LogOut size={14} /> Logout
            </button>
          </form>
        </div>
      </aside>

      <main style={{ flex: 1, marginLeft: 220, padding: 40 }}>
        {children}
      </main>

      <style>{`
        .admin-area { cursor: auto !important; }
        .admin-nav-link:hover { color: #EDE8DC !important; }
        .admin-logout-btn:hover { color: #B8A88A !important; }
      `}</style>
    </div>
  );
}
