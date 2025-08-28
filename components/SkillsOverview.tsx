import { skills } from '@/data/skills'

export default function SkillsOverview() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Skills & Expertise
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I've developed a diverse skill set through years of experience in software development, 
            research, and continuous learning.
          </p>
        </div>

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

        <div className="text-center mt-12">
          <a href="/about" className="btn-secondary">
            View Detailed Skills
          </a>
        </div>
      </div>
    </section>
  )
}
