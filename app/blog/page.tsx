import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PostCard } from "@/components/blog/PostCard";
import { supabase } from "@/lib/supabase";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "블로그",
  description: `${siteConfig.name}의 개발 블로그 - 기술, 경험, 생각을 기록합니다.`,
};

export const dynamic = "force-dynamic";

async function getPosts() {
  const { data } = await supabase
    .from("posts")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false });
  return data || [];
}

export default async function BlogPage() {
  const posts = await getPosts();

  const categories = Array.from(
    new Set(posts.map((p) => p.category).filter(Boolean))
  );

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-3">
              블로그
            </h1>
            <p className="text-slate-500 dark:text-slate-400">
              개발 경험과 기술에 대한 글을 씁니다
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-24 text-slate-400">
              아직 작성된 글이 없습니다.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
