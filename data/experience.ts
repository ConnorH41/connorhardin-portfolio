export interface Experience {
  id: string
  title: string
  company: string
  location: string
  startDate: string
  endDate?: string
  current: boolean
  description: string[]
  technologies: string[]
  type: 'work' | 'research' | 'internship' | 'volunteer'
}

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Senior Software Engineer',
    company: 'Tech Innovations Inc.',
    location: 'San Francisco, CA',
    startDate: '2023-01',
    current: true,
    description: [
      'Lead development of scalable microservices architecture serving 1M+ users',
      'Mentored junior developers and conducted code reviews',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
      'Collaborated with cross-functional teams to deliver features on time'
    ],
    technologies: ['Python', 'React', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL'],
    type: 'work'
  },
  {
    id: '2',
    title: 'Research Assistant',
    company: 'University of Technology',
    location: 'Boston, MA',
    startDate: '2022-06',
    endDate: '2022-12',
    current: false,
    description: [
      'Conducted research on machine learning algorithms for natural language processing',
      'Published 2 papers in top-tier conferences',
      'Developed novel approaches to sentiment analysis',
      'Collaborated with international research teams'
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'NLP', 'Machine Learning'],
    type: 'research'
  },
  {
    id: '3',
    title: 'Software Engineer Intern',
    company: 'StartupXYZ',
    location: 'New York, NY',
    startDate: '2022-01',
    endDate: '2022-05',
    current: false,
    description: [
      'Built full-stack web applications using modern technologies',
      'Optimized database queries improving performance by 40%',
      'Participated in agile development processes',
      'Received outstanding intern award'
    ],
    technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Express'],
    type: 'internship'
  },
  {
    id: '4',
    title: 'Open Source Contributor',
    company: 'Various Projects',
    location: 'Remote',
    startDate: '2021-01',
    current: true,
    description: [
      'Contributed to popular open source projects',
      'Fixed bugs and implemented new features',
      'Reviewed pull requests and mentored new contributors',
      'Maintained documentation and examples'
    ],
    technologies: ['Git', 'GitHub', 'Various Technologies'],
    type: 'volunteer'
  },
  {
    id: '5',
    title: 'Teaching Assistant',
    company: 'University of Technology',
    location: 'Boston, MA',
    startDate: '2021-09',
    endDate: '2022-05',
    current: false,
    description: [
      'Assisted professors in teaching computer science courses',
      'Graded assignments and provided feedback to students',
      'Held office hours and tutoring sessions',
      'Helped develop course materials and exercises'
    ],
    technologies: ['Java', 'Python', 'Data Structures', 'Algorithms'],
    type: 'work'
  }
]

export const getCurrentExperience = () => experiences.filter(exp => exp.current)
export const getExperienceByType = (type: Experience['type']) => experiences.filter(exp => exp.type === type)
