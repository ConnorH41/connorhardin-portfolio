import { experiences } from '@/data/experience'
import { Calendar, MapPin, Building, ExternalLink } from 'lucide-react'

export default function ExperienceTimeline() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  }

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700"></div>
      
      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <div key={experience.id} className="relative">
            {/* Timeline Dot */}
            <div className={`absolute left-6 w-4 h-4 rounded-full border-4 border-white dark:border-slate-800 ${
              experience.current ? 'bg-primary-600' : 'bg-slate-400 dark:bg-slate-600'
            }`}></div>
            
            {/* Content */}
            <div className="ml-16">
              <div className="card">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-1">
                      {experience.title}
                    </h3>
                    <div className="flex items-center text-slate-600 dark:text-slate-400 mb-2">
                      <Building className="h-4 w-4 mr-2" />
                      <span className="font-medium">{experience.company}</span>
                    </div>
                  </div>
                  
                  {experience.current && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      Current
                    </span>
                  )}
                </div>
                
                {/* Details */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>
                      {formatDate(experience.startDate)} - {experience.current ? 'Present' : formatDate(experience.endDate!)}
                    </span>
                  </div>
                  
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{experience.location}</span>
                  </div>
                </div>
                
                {/* Description */}
                <ul className="space-y-2 mb-4">
                  {experience.description.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-slate-700 dark:text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
