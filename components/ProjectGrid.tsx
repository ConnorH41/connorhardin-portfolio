'use client'

import { useState } from 'react'
import { projects, Project } from '@/data/projects'
import ProjectCard from './ProjectCard'

const categories = [
  { key: 'all', label: 'All Projects' },
  { key: 'web', label: 'Web Development' },
  { key: 'mobile', label: 'Mobile Apps' },
  { key: 'research', label: 'Research & AI' },
  { key: 'other', label: 'Other' }
]

export default function ProjectGrid() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <div>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category.key}
            onClick={() => setSelectedCategory(category.key)}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              selectedCategory === category.key
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
            }`}
          >
            {category.label}
          </button>
        ))}
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
            No projects found in this category.
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
