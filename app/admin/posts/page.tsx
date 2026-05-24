import Link from "next/link";
import { createServiceClient } from "@/lib/supabase";
import { Plus, Edit, Trash2, Eye, EyeOff } from "lucide-react";
import { DeletePostButton } from "./DeletePostButton";

export const revalidate = 0;

async function getPosts() {
  const supabase = createServiceClient();
  const { data } = await supabase
    .from("posts")
    .select("id, title, slug, published, category, created_at")
    .order("created_at", { ascending: false });
  return data || [];
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("ko-KR");
}

export default async function AdminPostsPage() {
  const posts = await getPosts();

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            포스트 관리
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            총 {posts.length}개의 포스트
          </p>
        </div>
        <Link
          href="/admin/posts/new"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium transition-colors"
        >
          <Plus size={16} />
          새 포스트
        </Link>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-16 text-slate-400">
          <p>아직 작성된 포스트가 없습니다.</p>
          <Link
            href="/admin/posts/new"
            className="inline-flex items-center gap-2 mt-4 text-indigo-600 dark:text-indigo-400 hover:underline text-sm"
          >
            <Plus size={14} />첫 포스트 작성하기
          </Link>
        </div>
      ) : (
        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th className="text-left px-4 py-3 font-medium text-slate-500 dark:text-slate-400">
                  제목
                </th>
                <th className="text-left px-4 py-3 font-medium text-slate-500 dark:text-slate-400 hidden sm:table-cell">
                  카테고리
                </th>
                <th className="text-left px-4 py-3 font-medium text-slate-500 dark:text-slate-400 hidden md:table-cell">
                  작성일
                </th>
                <th className="text-left px-4 py-3 font-medium text-slate-500 dark:text-slate-400">
                  상태
                </th>
                <th className="text-right px-4 py-3 font-medium text-slate-500 dark:text-slate-400">
                  관리
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {posts.map((post) => (
                <tr
                  key={post.id}
                  className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors"
                >
                  <td className="px-4 py-3">
                    <Link
                      href={`/blog/${post.slug}`}
                      target="_blank"
                      className="font-medium text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-slate-500 dark:text-slate-400 hidden sm:table-cell">
                    {post.category || "-"}
                  </td>
                  <td className="px-4 py-3 text-slate-500 dark:text-slate-400 hidden md:table-cell">
                    {formatDate(post.created_at)}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${
                        post.published
                          ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                          : "bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400"
                      }`}
                    >
                      {post.published ? (
                        <><Eye size={10} /> 발행</>
                      ) : (
                        <><EyeOff size={10} /> 임시저장</>
                      )}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/admin/posts/${post.id}/edit`}
                        className="p-1.5 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        title="수정"
                      >
                        <Edit size={15} />
                      </Link>
                      <DeletePostButton postId={post.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
