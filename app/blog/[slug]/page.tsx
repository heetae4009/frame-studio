import { Cursor } from "@/components/Cursor";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function getPost(slug: string) {
  try {
    const { data } = await supabase
      .from("posts")
      .select("*")
      .eq("slug", slug)
      .eq("published", true)
      .single();
    return data;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Not Found" };
  return { title: post.title, description: post.excerpt || undefined };
}

function readingTime(content: string) {
  const words = content.replace(/<[^>]*>/g, "").split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const minutes = readingTime(post.content || "");

  return (
    <>
      <Cursor />
      <Navbar />

      <main style={{ background: "#EDE8DC", minHeight: "100vh", paddingTop: 120 }}>
        <article style={{ maxWidth: 720, margin: "0 auto", padding: "0 52px 120px" }}>
          {/* Back */}
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              fontSize: 11,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#B8A88A",
              textDecoration: "none",
              marginBottom: 56,
            }}
            className="back-link-hover"
          >
            ← Writing
          </Link>

          {/* Header */}
          <header style={{ marginBottom: 64 }}>
            {post.category && (
              <div
                style={{
                  fontSize: 10,
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "#B8A88A",
                  marginBottom: 20,
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                }}
              >
                <span style={{ width: 20, height: 1, background: "#B8A88A", display: "block" }} />
                {post.category}
              </div>
            )}

            <h1
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(32px, 5vw, 64px)",
                fontWeight: 500,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "#1A1A18",
                marginBottom: post.excerpt ? 20 : 0,
              }}
            >
              {post.title}
            </h1>

            {post.excerpt && (
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.75,
                  color: "#56524E",
                  fontWeight: 300,
                  fontStyle: "italic",
                  fontFamily: "var(--font-playfair)",
                  marginBottom: 0,
                }}
              >
                {post.excerpt}
              </p>
            )}

            {/* Meta bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 24,
                marginTop: 32,
                paddingTop: 24,
                borderTop: "1px solid #D4C9B8",
              }}
            >
              <span style={{ fontSize: 11, letterSpacing: "0.1em", color: "#56524E", textTransform: "uppercase" }}>
                {formatDate(post.created_at)}
              </span>
              <span style={{ width: 1, height: 14, background: "#D4C9B8", display: "block" }} />
              <span style={{ fontSize: 11, letterSpacing: "0.1em", color: "#56524E", textTransform: "uppercase" }}>
                {minutes} min read
              </span>
            </div>

            {post.tags && post.tags.length > 0 && (
              <div style={{ display: "flex", gap: 8, marginTop: 16, flexWrap: "wrap" }}>
                {post.tags.map((tag: string) => (
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
          </header>

          {/* Divider */}
          <div
            style={{
              width: 36,
              height: 1,
              background: "#B8A88A",
              marginBottom: 56,
            }}
          />

          {/* Content */}
          <div
            className="prose-cream"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 16,
              lineHeight: 1.85,
              color: "#56524E",
              fontWeight: 300,
            }}
            dangerouslySetInnerHTML={{ __html: post.content || "" }}
          />
        </article>
      </main>

      <Footer />

      <style>{`
        .back-link-hover:hover { color: #1A1A18 !important; }
        .prose-cream h1, .prose-cream h2, .prose-cream h3,
        .prose-cream h4, .prose-cream h5 {
          font-family: var(--font-playfair);
          font-weight: 500;
          color: #1A1A18;
          line-height: 1.2;
          margin-top: 2.5em;
          margin-bottom: 0.75em;
        }
        .prose-cream h1 { font-size: 2em; }
        .prose-cream h2 { font-size: 1.6em; }
        .prose-cream h3 { font-size: 1.3em; }
        .prose-cream p { margin-bottom: 1.5em; }
        .prose-cream a { color: #1A1A18; border-bottom: 1px solid #D4C9B8; text-decoration: none; }
        .prose-cream a:hover { border-color: #1A1A18; }
        .prose-cream strong { color: #1A1A18; font-weight: 500; }
        .prose-cream em { font-style: italic; }
        .prose-cream code {
          font-family: var(--font-geist-mono);
          font-size: 0.875em;
          background: #F2EDE3;
          border: 1px solid #D4C9B8;
          padding: 2px 6px;
          color: #1A1A18;
        }
        .prose-cream pre {
          background: #1A1A18;
          color: #EDE8DC;
          padding: 24px;
          overflow-x: auto;
          margin: 2em 0;
        }
        .prose-cream pre code { background: none; border: none; padding: 0; color: inherit; font-size: 0.875em; }
        .prose-cream blockquote {
          border-left: 2px solid #B8A88A;
          padding-left: 24px;
          color: #56524E;
          font-style: italic;
          font-family: var(--font-playfair);
          font-size: 1.1em;
          margin: 2em 0;
        }
        .prose-cream ul, .prose-cream ol { padding-left: 1.5em; margin-bottom: 1.5em; }
        .prose-cream li { margin-bottom: 0.5em; }
        .prose-cream hr { border: none; border-top: 1px solid #D4C9B8; margin: 3em 0; }
        @media (max-width: 820px) {
          article { padding: 0 24px 80px !important; }
        }
      `}</style>
    </>
  );
}
