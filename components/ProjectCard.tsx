import { Project } from '@/data/projects'
import { Github, ExternalLink, Tag } from 'lucide-react'
import Image from 'next/image'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="card group hover:scale-[1.03] transition-transform duration-300 animate-fade-in">
      {/* Project Image */}
      {project.image && (
        <div className="relative h-48 mb-4 rounded-2xl overflow-hidden shadow-soft">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-dark/10 group-hover:bg-dark/5 transition-colors duration-300" />
        </div>
      )}

      {/* Project Content */}
      <div className="flex-1">
        <h3 className="text-xl font-bold mb-2 text-dark">
          {project.title}
        </h3>
        
        <p className="text-dark/70 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <Tag className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm font-medium text-dark/80">
              Tech Stack
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs bg-primary/10 text-primary font-semibold rounded-full shadow-soft"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="px-2 py-1 text-xs bg-dark/5 text-dark/60 rounded-full">
                +{project.techStack.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Project Links */}
        <div className="flex gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-4 py-2 bg-dark text-base text-base font-semibold text-base-DEFAULT rounded-2xl hover:bg-primary/90 hover:text-base transition-all duration-200 flex-1 shadow-soft hover:shadow-elegant"
            >
              <Github className="h-4 w-4 mr-2" />
              Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-4 py-2 bg-primary text-base font-semibold text-base rounded-2xl hover:bg-secondary transition-all duration-200 flex-1 shadow-soft hover:shadow-elegant"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Link
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
