'use client'

import { useState } from 'react'
import { projects, Project } from '@/data/projects'
import ProjectCard from './ProjectCard'



export default function ProjectGrid() {
  const [search, setSearch] = useState('')
  const [selectedTech, setSelectedTech] = useState('')

  const allTechs = Array.from(new Set(projects.flatMap(p => p.techStack))).sort()

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase())
    const matchesTech = selectedTech === '' || project.techStack.includes(selectedTech)
    return matchesSearch && matchesTech
  })

  return (
    <div>
      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search projects by title..."
          className="w-full max-w-md px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>

      {/* Tech Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        <button
          onClick={() => setSelectedTech('')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedTech === ''
              ? 'bg-primary text-white'
              : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
          }`}
        >
          All
        </button>
        {allTechs.map(tech => (
          <button
            key={tech}
            onClick={() => setSelectedTech(tech)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedTech === tech
                ? 'bg-primary text-white'
                : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard project={project} />
            </div>
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
