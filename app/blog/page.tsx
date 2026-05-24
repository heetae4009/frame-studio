import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PostCard } from "@/components/blog/PostCard";
import { supabase } from "@/lib/supabase";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Journal",
  description: `${siteConfig.name} — 브랜딩 인사이트와 스튜디오 이야기`,
};

export const dynamic = "force-dynamic";

async function getPosts() {
  try {
    const { data } = await supabase
      .from("posts")
      .select("*")
      .eq("published", true)
      .order("created_at", { ascending: false });
    return data || [];
  } catch {
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <Navbar />
      <main style={{ background: "#EDE8DC", minHeight: "100vh", paddingTop: 120 }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 52px 120px" }}>
          {/* Header */}
          <div style={{ marginBottom: 80 }}>
            <div
              style={{
                fontSize: 10,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#B8A88A",
                marginBottom: 24,
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              <span
                style={{
                  display: "block",
                  width: 36,
                  height: 1,
                  background: "#B8A88A",
                }}
              />
              Journal
            </div>
            <h1
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(44px, 7vw, 96px)",
                fontWeight: 500,
                lineHeight: 0.95,
                letterSpacing: "-0.025em",
                color: "#1A1A18",
              }}
            >
              브랜딩을<br />
              <em style={{ fontStyle: "italic", color: "#56524E" }}>이야기합니다.</em>
            </h1>
          </div>

          {/* Count */}
          <div
            style={{
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#B8A88A",
              marginBottom: 0,
            }}
          >
            {posts.length} Articles
          </div>

          {/* Posts list */}
          {posts.length === 0 ? (
            <div
              style={{
                paddingTop: 80,
                paddingBottom: 80,
                textAlign: "center",
                color: "#B8A88A",
                fontFamily: "var(--font-playfair)",
                fontSize: 24,
                fontStyle: "italic",
              }}
            >
              아직 작성된 글이 없습니다.
            </div>
          ) : (
            <div style={{ marginTop: 0 }}>
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 820px) {
          main > div { padding: 0 24px 80px !important; }
        }
      `}</style>
    </>
  );
}
