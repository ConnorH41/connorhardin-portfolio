'use client'

import { useState } from 'react'
import { projects, Project } from '@/data/projects'
import ProjectCard from './ProjectCard'



export default function ProjectGrid() {
  const [search, setSearch] = useState('')

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      {/* Search Bar */}
      <div className="flex justify-center mb-12">
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search projects by title..."
          className="w-full max-w-md px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-lg text-slate-600 dark:text-slate-400">
            No projects found.
          </p>
        </div>
      )}

      {/* Project Count */}
      <div className="text-center mt-12 text-slate-600 dark:text-slate-400">
        Showing {filteredProjects.length} of {projects.length} projects
      </div>
    </div>
  )
}
