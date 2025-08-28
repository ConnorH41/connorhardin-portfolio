import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react'

const education = [
  {
    degree: 'Master of Science in Computer Science',
    school: 'University of Technology',
    location: 'Boston, MA',
    year: '2020 - 2022',
    gpa: '3.9/4.0',
    honors: 'Graduated with Distinction',
    thesis: 'Advanced Machine Learning Algorithms for Natural Language Processing',
    relevantCourses: [
      'Advanced Algorithms',
      'Machine Learning',
      'Natural Language Processing',
      'Computer Vision',
      'Distributed Systems'
    ]
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'University of Technology',
    location: 'Boston, MA',
    year: '2016 - 2020',
    gpa: '3.8/4.0',
    honors: 'Magna Cum Laude',
    thesis: 'Efficient Algorithms for Graph Processing',
    relevantCourses: [
      'Data Structures & Algorithms',
      'Computer Organization',
      'Software Engineering',
      'Database Systems',
      'Operating Systems'
    ]
  }
]

export default function Education() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-center text-slate-900 dark:text-slate-100">
        Education
      </h2>
      
      <div className="space-y-8">
        {education.map((edu, index) => (
          <div key={index} className="card">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <GraduationCap className="h-6 w-6 text-primary-600 mr-3" />
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                    {edu.degree}
                  </h3>
                </div>
                
                <div className="flex items-center text-slate-600 dark:text-slate-400 mb-2">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="font-medium">{edu.school}</span>
                </div>
                
                <div className="flex items-center text-slate-600 dark:text-slate-400 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{edu.year}</span>
                </div>
              </div>
              
              <div className="lg:text-right mt-4 lg:mt-0">
                <div className="text-2xl font-bold text-primary-600 mb-1">
                  {edu.gpa}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  GPA
                </div>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center">
                  <Award className="h-4 w-4 text-primary-600 mr-2" />
                  Honors & Achievements
                </h4>
                <p className="text-slate-600 dark:text-slate-400 mb-3">
                  {edu.honors}
                </p>
                
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">
                  Thesis
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  {edu.thesis}
                </p>
              </div>
              
              {/* Relevant Coursework section removed, now its own section */}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
