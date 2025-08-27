import { skillCategories, getSkillsByCategory } from '@/data/skills'
import { Code, Zap, Wrench, Users } from 'lucide-react'

const categoryIcons = {
  languages: Code,
  frameworks: Zap,
  tools: Wrench,
  'soft-skills': Users
}

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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => {
            const Icon = categoryIcons[category.key as keyof typeof categoryIcons]
            const skills = getSkillsByCategory(category.key as any)
            const expertSkills = skills.filter(skill => skill.level === 'expert').length
            const advancedSkills = skills.filter(skill => skill.level === 'advanced').length

            return (
              <div key={category.key} className="card text-center group hover:scale-105 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-full">
                    <Icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-100">
                  {category.label}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {skills.length} skills mastered
                </p>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Expert</span>
                    <span className="font-semibold text-primary-600">{expertSkills}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Advanced</span>
                    <span className="font-semibold text-primary-600">{advancedSkills}</span>
                  </div>
                </div>
              </div>
            )
          })}
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
