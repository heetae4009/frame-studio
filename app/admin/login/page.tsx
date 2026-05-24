"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Loader2 } from "lucide-react";

export default function AdminLogin() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        router.push("/admin/posts");
        router.refresh();
      } else {
        const data = await res.json();
        setError(data.error || "비밀번호가 올바르지 않습니다.");
      }
    } catch {
      setError("오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="admin-area"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#1A1A18",
        padding: 24,
      }}
    >
      <div style={{ width: "100%", maxWidth: 360 }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: 28,
              color: "#EDE8DC",
              letterSpacing: "0.08em",
              marginBottom: 8,
            }}
          >
            Admin
          </div>
          <div
            style={{
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#B8A88A",
            }}
          >
            Blog Manager
          </div>
        </div>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ position: "relative" }}>
            <input
              type={showPw ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              style={{
                width: "100%",
                padding: "14px 40px 14px 16px",
                background: "#2A2826",
                border: "1px solid rgba(255,255,255,0.07)",
                color: "#EDE8DC",
                fontSize: 14,
                letterSpacing: "0.04em",
                outline: "none",
                fontFamily: "var(--font-inter)",
              }}
            />
            <button
              type="button"
              onClick={() => setShowPw(!showPw)}
              style={{
                position: "absolute",
                right: 12,
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                color: "#B8A88A",
                cursor: "pointer",
              }}
            >
              {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>

          {error && (
            <div
              style={{
                fontSize: 12,
                color: "#B8A88A",
                letterSpacing: "0.04em",
                padding: "10px 14px",
                border: "1px solid rgba(184,168,138,0.3)",
              }}
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              padding: "14px 24px",
              background: "#EDE8DC",
              color: "#1A1A18",
              fontSize: 12,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              border: "none",
              cursor: loading ? "default" : "pointer",
              opacity: loading ? 0.6 : 1,
              fontFamily: "var(--font-inter)",
              transition: "background 0.2s ease",
            }}
            className="login-btn-hover"
          >
            {loading && <Loader2 size={14} className="animate-spin" />}
            Enter
          </button>
        </form>
      </div>

      <style>{`
        .admin-area { cursor: auto !important; }
        .login-btn-hover:hover { background: #D4C9B8 !important; }
        input::placeholder { color: rgba(184,168,138,0.5); }
      `}</style>
    </div>
  );
}
