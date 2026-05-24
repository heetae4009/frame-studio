import { Code2, Coffee, Rocket, Users } from "lucide-react";
import { siteConfig } from "@/config/site";

const stats = [
  { icon: Code2, value: "3+", label: "년 경력" },
  { icon: Rocket, value: "20+", label: "완성 프로젝트" },
  { icon: Coffee, value: "∞", label: "커피 소비량" },
  { icon: Users, value: "5+", label: "팀 협업" },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              저에 대해 소개합니다
            </h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                안녕하세요! 저는 사용자 경험을 중시하는 풀스택 개발자
                {siteConfig.name}입니다. 복잡한 문제를 간결한 코드로 해결하는
                것을 좋아합니다.
              </p>
              <p>
                React와 Next.js를 주로 사용하여 프론트엔드를 개발하고,
                Node.js와 PostgreSQL을 활용해 백엔드 시스템을 구축합니다.
                클린 코드와 성능 최적화에 관심이 많습니다.
              </p>
              <p>
                개발 외에도 새로운 기술 트렌드를 탐구하고, 오픈소스 프로젝트에
                기여하는 것을 즐깁니다.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center"
              >
                <div className="inline-flex p-3 rounded-xl bg-indigo-100 dark:bg-indigo-900/40 mb-3">
                  <Icon className="text-indigo-600 dark:text-indigo-400" size={24} />
                </div>
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
                  {value}
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
