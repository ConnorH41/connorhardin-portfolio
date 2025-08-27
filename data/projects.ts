export interface Project {
  id: string
  title: string
  description: string
  image: string
  techStack: string[]
  githubUrl: string
  liveUrl?: string
  featured: boolean
  category: 'web' | 'mobile' | 'research' | 'other'
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with Next.js, featuring user authentication, product management, and payment processing.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Stripe'],
    githubUrl: 'https://github.com/yourusername/ecommerce-platform',
    liveUrl: 'https://ecommerce-demo.vercel.app',
    featured: true,
    category: 'web'
  },
  {
    id: '2',
    title: 'AI Research Assistant',
    description: 'An AI-powered research tool that helps researchers analyze papers and generate summaries using natural language processing.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    techStack: ['Python', 'TensorFlow', 'React', 'FastAPI', 'Docker', 'Redis'],
    githubUrl: 'https://github.com/yourusername/ai-research-assistant',
    featured: true,
    category: 'research'
  },
  {
    id: '3',
    title: 'Mobile Task Manager',
    description: 'A cross-platform mobile app for task management with offline support, notifications, and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
    techStack: ['React Native', 'TypeScript', 'Redux', 'Firebase', 'Expo'],
    githubUrl: 'https://github.com/yourusername/task-manager-app',
    liveUrl: 'https://expo.dev/@yourusername/task-manager',
    featured: true,
    category: 'mobile'
  },
  {
    id: '4',
    title: 'Data Visualization Dashboard',
    description: 'Interactive dashboard for visualizing complex datasets with real-time updates and customizable charts.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    techStack: ['React', 'D3.js', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    githubUrl: 'https://github.com/yourusername/data-dashboard',
    featured: false,
    category: 'web'
  },
  {
    id: '5',
    title: 'Machine Learning Pipeline',
    description: 'Automated ML pipeline for data preprocessing, model training, and evaluation with experiment tracking.',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=600&fit=crop',
    techStack: ['Python', 'Scikit-learn', 'MLflow', 'Apache Airflow', 'Docker', 'Kubernetes'],
    githubUrl: 'https://github.com/yourusername/ml-pipeline',
    featured: false,
    category: 'research'
  },
  {
    id: '6',
    title: 'Real-time Chat Application',
    description: 'WebSocket-based chat application with user authentication, file sharing, and group chat functionality.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
    techStack: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'JWT', 'Multer'],
    githubUrl: 'https://github.com/yourusername/chat-app',
    liveUrl: 'https://chat-demo.vercel.app',
    featured: false,
    category: 'web'
  }
]

export const getFeaturedProjects = () => projects.filter(project => project.featured)
export const getProjectsByCategory = (category: Project['category']) => projects.filter(project => project.category === category)
