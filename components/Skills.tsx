import { skillCategories, getSkillsByCategory } from '@/data/skills'
import { Code, Zap, Wrench, Users } from 'lucide-react'

const categoryIcons = {
  languages: Code,
  frameworks: Zap,
  tools: Wrench,
  'soft-skills': Users
}

const levelColors = {
  beginner: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  intermediate: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  advanced: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  expert: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
}

export default function Skills() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-slate-900 dark:text-slate-100">
        Technical Skills
      </h2>
      
      <div className="grid lg:grid-cols-2 gap-12">
        {skillCategories.map((category) => {
          const Icon = categoryIcons[category.key as keyof typeof categoryIcons]
          const skills = getSkillsByCategory(category.key as any)
          
          return (
            <div key={category.key} className="card">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-full mr-4">
                  <Icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                  {category.label}
                </h3>
              </div>
              
              <div className="space-y-3">
                {skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <span className="text-slate-700 dark:text-slate-300">
                      {skill.name}
                    </span>
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${levelColors[skill.level]}`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
      
      <div className="mt-8 text-center">
        <div className="inline-flex items-center space-x-8 bg-slate-100 dark:bg-slate-800 rounded-xl p-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-600">6</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Expert Level</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-600">8</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Advanced Level</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-600">4</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Intermediate Level</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-600">2</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Beginner Level</div>
          </div>
        </div>
      </div>
    </section>
  )
}
