import { getFeaturedProjects } from '@/data/projects'
import ProjectCard from './ProjectCard'

export default function FeaturedProjects() {
  const featuredProjects = getFeaturedProjects()

  return (
    <section id="skills" className="section-padding bg-slate-50 dark:bg-slate-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating innovative solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="/projects"
            className="btn-primary"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  )
}
