'use client'

import { useState } from 'react'
import { accomplishments, Accomplishment } from '@/data/accomplishments'
import { Calendar, Award, GraduationCap, BookOpen, ExternalLink } from 'lucide-react'
import Image from 'next/image'

const types = [
  { key: 'all', label: 'All', icon: Award },
  { key: 'degree', label: 'Degrees', icon: GraduationCap },
  { key: 'certification', label: 'Certifications', icon: Award },
  { key: 'award', label: 'Awards', icon: Award },
  { key: 'publication', label: 'Publications', icon: BookOpen },
  { key: 'research', label: 'Research', icon: BookOpen }
]

const typeIcons = {
  degree: GraduationCap,
  certification: Award,
  award: Award,
  publication: BookOpen,
  research: BookOpen,
  other: Award
}

export default function AccomplishmentsGrid() {
  const [selectedType, setSelectedType] = useState('all')

  const filteredAccomplishments = selectedType === 'all' 
    ? accomplishments 
    : accomplishments.filter(acc => acc.type === selectedType)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
  }

  return (
    <div>
      {/* Type Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {types.map((type) => {
          const Icon = type.icon
          return (
            <button
              key={type.key}
              onClick={() => setSelectedType(type.key)}
              className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                selectedType === type.key
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
              }`}
            >
              <Icon className="h-4 w-4 mr-2" />
              {type.label}
            </button>
          )
        })}
      </div>

      {/* Accomplishments Grid */}
      {filteredAccomplishments.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAccomplishments.map((accomplishment) => {
            const Icon = typeIcons[accomplishment.type]
            return (
              <div key={accomplishment.id} className="card group hover:scale-105 transition-all duration-300">
                {/* Image */}
                {accomplishment.image && (
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={accomplishment.image}
                      alt={accomplishment.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                )}

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <Icon className="h-5 w-5 text-primary-600 mr-2" />
                    <span className="text-sm font-medium text-primary-600 uppercase tracking-wide">
                      {accomplishment.type}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-100">
                    {accomplishment.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                    {accomplishment.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                      <Calendar className="h-4 w-4 mr-2" />
                      {formatDate(accomplishment.date)}
                    </div>
                    
                    {accomplishment.link && (
                      <a
                        href={accomplishment.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors duration-200"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        View
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-lg text-slate-600 dark:text-slate-400">
            No accomplishments found in this category.
          </p>
        </div>
      )}

      {/* Accomplishment Count */}
      <div className="text-center mt-12 text-slate-600 dark:text-slate-400">
        Showing {filteredAccomplishments.length} of {accomplishments.length} accomplishments
      </div>
    </div>
  )
}
