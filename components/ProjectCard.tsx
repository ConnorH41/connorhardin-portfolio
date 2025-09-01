'use client'

import { Project } from '@/data/projects'
import { Github, ExternalLink, Tag } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

interface ProjectCardProps {
  project: Project
  showFeaturedBadge?: boolean
}

export default function ProjectCard({ project, showFeaturedBadge = true }: ProjectCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div className="card group hover:scale-[1.03] hover:shadow-elegant hover:shadow-primary/20 transition-all duration-300 animate-fade-in border border-secondary/10 hover:border-primary/30 relative">
      {project.featured && showFeaturedBadge && (
        <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full shadow-soft z-10">
          Featured
        </div>
      )}
      {/* Project Image */}
      {project.image && (
        <div className="relative h-48 mb-4 rounded-2xl overflow-hidden shadow-soft">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-slate-200 dark:bg-slate-700 animate-pulse rounded-2xl" />
          )}
          <Image
            src={project.image}
            alt={project.title}
            fill
            className={`object-cover group-hover:scale-110 transition-transform duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
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
            <Tag className="h-4 w-4 text-primary mr-2 dark:text-slate-200" />
            <span className="text-sm font-medium text-dark/80">
              Tech Stack
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs bg-primary/10 text-primary font-semibold rounded-full shadow-soft hover:bg-primary hover:text-white transition-all duration-200 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-primary-800"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="px-2 py-1 text-xs bg-dark/5 text-dark/60 rounded-full dark:bg-slate-700 dark:text-slate-300">
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
              aria-label={`View ${project.title} source code on GitHub`}
              className="flex items-center justify-center px-4 py-2 bg-dark text-base text-base font-semibold text-base-DEFAULT rounded-2xl hover:bg-primary/90 hover:text-base transition-all duration-200 flex-1 shadow-soft hover:shadow-elegant focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-primary-800"
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
              aria-label={`View live demo of ${project.title}`}
              className="flex items-center justify-center px-4 py-2 bg-primary text-base font-semibold text-base rounded-2xl hover:bg-secondary transition-all duration-200 flex-1 shadow-soft hover:shadow-elegant focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:bg-primary-800 dark:text-slate-100 dark:hover:bg-secondary-dark"
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
