import { Project } from '@/data/projects'
import { Github, ExternalLink, Tag } from 'lucide-react'
import Image from 'next/image'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="card group hover:scale-105 transition-all duration-300">
      {/* Project Image */}
      <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
      </div>

      {/* Project Content */}
      <div className="flex-1">
        <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-100">
          {project.title}
        </h3>
        
        <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <Tag className="h-4 w-4 text-primary-600 mr-2" />
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Tech Stack
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="px-2 py-1 text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-full">
                +{project.techStack.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Project Links */}
        <div className="flex gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-2 bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-800 rounded-lg hover:bg-slate-700 dark:hover:bg-slate-300 transition-colors duration-200 flex-1"
          >
            <Github className="h-4 w-4 mr-2" />
            Code
          </a>
          
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 flex-1"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
