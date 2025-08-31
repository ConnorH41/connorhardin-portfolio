import { skills } from '@/data/skills'

export default function Skills() {
  return (
    <section className="mb-16 animate-fade-in">
      <h2 className="text-3xl font-extrabold mb-8 text-center text-dark tracking-tight">
        Technical Skills
      </h2>
      <div className="flex flex-wrap gap-3 justify-center">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 rounded-2xl bg-primary/10 text-primary font-semibold text-sm shadow-soft hover:bg-primary/20 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-primary-800 transition-colors duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
