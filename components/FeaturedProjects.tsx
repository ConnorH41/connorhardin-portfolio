import { getFeaturedProjects } from '@/data/projects'
import { accomplishments } from '@/data/accomplishments'
import ProjectCard from './ProjectCard'
import AccomplishmentCard from './AccomplishmentCard'

export default function FeaturedProjects() {
  const featuredProjects = getFeaturedProjects()
  const featuredAccomplishments = accomplishments.filter(acc => acc.featured)
  // Combine both into a single array with a type property
  const featuredItems = [
    ...featuredProjects.map(p => ({ ...p, _type: 'project' as const })),
    ...featuredAccomplishments.map(a => ({ ...a, _type: 'accomplishment' as const }))
  ]

  return (
    <section id="skills" className="section-padding bg-slate-50 dark:bg-slate-800">
      <div className="container-custom">

        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gradient tracking-tight">
            Featured
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            Here are some of my recent projects and accomplishments that showcase important skills and experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredItems.map((item) => (
            item._type === 'project' ? (
              <ProjectCard key={item.id} project={item} />
            ) : (
              <AccomplishmentCard key={item.id} accomplishment={item} />
            )
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href="/projects"
            className="btn-primary text-lg min-w-[180px]"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  )
}
