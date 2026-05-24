import Link from "next/link";
import { Calendar, Clock, Tag } from "lucide-react";
import { Post } from "@/types";

interface PostCardProps {
  post: Post;
}

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

export function PostCard({ post }: PostCardProps) {
  const minutes = readingTime(post.content || "");

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="h-full p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/5">
        {post.category && (
          <span className="inline-flex items-center gap-1 text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-3">
            <Tag size={12} />
            {post.category}
          </span>
        )}

        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
          {post.title}
        </h2>

        {post.excerpt && (
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
        )}

        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center gap-4 text-xs text-slate-400 dark:text-slate-500 mt-auto">
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            {formatDate(post.created_at)}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {minutes}분 읽기
          </span>
        </div>
      </article>
    </Link>
  );
}
