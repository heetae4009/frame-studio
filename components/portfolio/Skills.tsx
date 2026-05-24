import { siteConfig } from "@/config/site";

export function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-slate-50 dark:bg-slate-800/50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            기술 스택
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            다양한 프로젝트를 통해 쌓아온 기술들입니다
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          {siteConfig.skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {skill.name}
                </span>
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Tech badges */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
            이외에도 사용 경험이 있는 기술들
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Git", "Linux", "REST API", "GraphQL", "Redis",
              "Vercel", "GitHub Actions", "Figma", "Jest", "Prisma"
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-slate-600 dark:text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
