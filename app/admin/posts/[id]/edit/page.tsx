import { PostForm } from "@/components/admin/PostForm";
import { createServiceClient } from "@/lib/supabase";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface PageProps {
  params: Promise<{ id: string }>;
}

async function getPost(id: string) {
  const supabase = createServiceClient();
  const { data } = await supabase.from("posts").select("*").eq("id", id).single();
  return data;
}

export default async function EditPostPage({ params }: PageProps) {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) notFound();

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Link
          href="/admin/posts"
          className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
        >
          <ArrowLeft size={18} />
        </Link>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          포스트 수정
        </h1>
      </div>
      <PostForm post={post} mode="edit" />
    </div>
  );
}
