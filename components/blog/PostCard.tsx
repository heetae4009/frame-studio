import Link from "next/link";
import { Post } from "@/types";

function readingTime(content: string): number {
  const words = content.replace(/<[^>]*>/g, "").split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function PostCard({ post }: { post: Post }) {
  const minutes = readingTime(post.content || "");

  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none" }} className="post-card-link">
      <article
        style={{
          borderTop: "1px solid #D4C9B8",
          paddingTop: 32,
          paddingBottom: 32,
          transition: "opacity 0.3s ease",
        }}
        className="post-card"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 24,
          }}
        >
          <div style={{ flex: 1 }}>
            {post.category && (
              <div
                style={{
                  fontSize: 10,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#B8A88A",
                  marginBottom: 12,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span
                  style={{
                    width: 20,
                    height: 1,
                    background: "#B8A88A",
                    display: "inline-block",
                  }}
                />
                {post.category}
              </div>
            )}

            <h2
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(22px, 2.5vw, 32px)",
                fontWeight: 500,
                lineHeight: 1.15,
                color: "#1A1A18",
                marginBottom: post.excerpt ? 12 : 0,
                letterSpacing: "-0.01em",
              }}
            >
              {post.title}
            </h2>

            {post.excerpt && (
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.75,
                  color: "#56524E",
                  fontWeight: 300,
                  maxWidth: 560,
                }}
              >
                {post.excerpt}
              </p>
            )}
          </div>

          <div
            style={{
              textAlign: "right",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                fontSize: 11,
                letterSpacing: "0.1em",
                color: "#B8A88A",
                marginBottom: 4,
                textTransform: "uppercase",
              }}
            >
              {formatDate(post.created_at)}
            </div>
            <div
              style={{
                fontSize: 11,
                color: "#56524E",
                fontWeight: 300,
              }}
            >
              {minutes}min read
            </div>
          </div>
        </div>

        {post.tags && post.tags.length > 0 && (
          <div style={{ display: "flex", gap: 8, marginTop: 16, flexWrap: "wrap" }}>
            {post.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "4px 10px",
                  border: "1px solid #D4C9B8",
                  color: "#56524E",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </article>
      <style>{`
        .post-card-link:hover .post-card { opacity: 0.7; }
      `}</style>
    </Link>
  );
}
