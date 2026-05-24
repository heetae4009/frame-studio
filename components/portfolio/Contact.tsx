import Link from "next/link";
import { Mail, Code2, Briefcase, AtSign, Send } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          함께 일해요
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mb-10 text-lg leading-relaxed">
          새로운 기회나 협업에 대해 이야기하고 싶으시면 편하게 연락해 주세요.
        </p>

        <Link
          href={`mailto:${siteConfig.email}`}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-lg transition-colors shadow-lg shadow-indigo-500/25 mb-10"
        >
          <Send size={20} />
          이메일 보내기
        </Link>

        <div className="flex justify-center gap-4">
          <Link
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 transition-colors text-sm font-medium"
          >
            <Code2 size={18} />
            GitHub
          </Link>
          <Link
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 transition-colors text-sm font-medium"
          >
            <Briefcase size={18} />
            LinkedIn
          </Link>
          <Link
            href={siteConfig.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 transition-colors text-sm font-medium"
          >
            <AtSign size={18} />
            Twitter
          </Link>
        </div>
      </div>
    </section>
  );
}
