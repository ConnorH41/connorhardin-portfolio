import { skills } from '@/data/skills'

export default function Skills() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-slate-900 dark:text-slate-100">
        Technical Skills
      </h2>
      <div className="flex flex-wrap gap-3 justify-center">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-100 text-sm font-medium shadow-sm hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
