export interface Project {
  id: string
  title: string
  description: string
  image?: string
  techStack: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'COMSC-210-HTML Website',
    description: 'A basic HTML website for a fictional car company.',
    techStack: ['HTML', 'CSS'],
    githubUrl: 'https://github.com/ConnorHardin/CH-lab3-html-website',
    featured: false
  },
  {
    id: '2',
    title: 'COMSC-210-NEXTJS Website',
    description: 'A NEXTJS version of the HTML website created for a fictional car company.',
    techStack: ['Next.js', 'CSS'],
    githubUrl: 'https://github.com/ConnorHardin/COMSC-210-NEXTJS-Website',
    featured: false
  },
  {
    id: '3',
    title: 'COMSC-225-Final Project',
    description: 'A data science project that analyzes Apple Health Data and Exercise CSV files to analyze strength progression and trends',
    techStack: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
    githubUrl: 'https://github.com/ConnorHardin/COMSC-225-FinalProject',
    featured: false
  },
  {
    id: '4',
    title: 'TradeBind',
    description: 'A platform for union workers, union admins, and contractors to modernize the construction industry.',
    image: '/images/TradeBind.png',
    techStack: ['React', 'Node.js', 'Javascript', 'SQL', 'NGINX'],
    liveUrl: 'https://www.tradebind.com/',
    featured: true
  },
    {
    id: '5',
    title: 'Worlds Hardest Game',
    description: 'A challenging game that tests your skills and patience.',
    techStack: ['TypeScript', 'Node.js', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/ConnorHardin/WorldsHardestGame',
    featured: false
  }
]

export const getFeaturedProjects = () => projects.filter(project => project.featured)
