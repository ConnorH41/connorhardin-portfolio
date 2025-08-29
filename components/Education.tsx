import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react'

const education = [
  {
    degree: 'Bachelor of Science in Computer Science – ABET Accredited',
    school: 'Roger Williams University',
    location: 'Bristol, RI',
    year: '2022 - 2026',
    gpa: '3.82/4.0',
    specialization: 'Specialization: Cybersecurity',
    minors: 'Minors: Cybersecurity, Math',
    honors: 'Dean’s List: Fall 2022 - Spring 2025',
  },
  {
    degree: 'High School Diploma',
    school: 'Falmouth High School',
    location: 'Falmouth, MA',
    year: '2018 - 2022',
    gpa: '3.8/4.0',
    honors: [
      'Honor Roll: Fall 2018 - Spring 2022',
      'Captain of Soccer Team: Fall 2021',
      'Soccer Sportsmanship Award: Fall 2018'
    ],
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
                {edu.specialization && (
                  <div className="text-slate-600 dark:text-slate-400 mb-1 font-medium">
                    {edu.specialization}
                  </div>
                )}
                {edu.minors && (
                  <div className="text-slate-600 dark:text-slate-400 mb-1 font-medium">
                    {edu.minors}
                  </div>
                )}
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
                <h4 className="flex items-center text-slate-600 dark:text-slate-400 mb-2">
                  <Award className="h-4 w-4 text-primary-600 mr-2" />
                  Honors & Achievements
                </h4>
                {Array.isArray(edu.honors) ? (
                  <div className="font-bold text-base text-slate-600 dark:text-slate-400 mb-3 space-y-1">
                    {edu.honors.map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                ) : (
                  <p className="font-bold text-base text-slate-600 dark:text-slate-400 mb-3">{edu.honors}</p>
                )}
                
              </div>
              
              {/* Relevant Coursework section removed, now its own section */}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
