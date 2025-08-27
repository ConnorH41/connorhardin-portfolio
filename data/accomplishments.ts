export interface Accomplishment {
  id: string
  title: string
  description: string
  date: string
  type: 'degree' | 'certification' | 'award' | 'publication' | 'research' | 'other'
  category: 'academic' | 'professional' | 'research' | 'personal'
  image?: string
  link?: string
}

export const accomplishments: Accomplishment[] = [
  {
    id: '1',
    title: 'Master of Science in Computer Science',
    description: 'Graduated with distinction from University of Technology. Specialized in Machine Learning and Artificial Intelligence.',
    date: '2022-05',
    type: 'degree',
    category: 'academic',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop'
  },
  {
    id: '2',
    title: 'Best Paper Award - ICML 2022',
    description: 'Received best paper award for research on "Novel Approaches to Transformer Architecture Optimization" at International Conference on Machine Learning.',
    date: '2022-07',
    type: 'award',
    category: 'research',
    link: 'https://icml.cc/2022/'
  },
  {
    id: '3',
    title: 'AWS Solutions Architect Associate',
    description: 'Certified AWS Solutions Architect with expertise in designing scalable, reliable, and cost-effective cloud solutions.',
    date: '2023-03',
    type: 'certification',
    category: 'professional',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop'
  },
  {
    id: '4',
    title: 'Research Publication in Nature',
    description: 'Co-authored paper on "Advances in Natural Language Processing" published in Nature journal.',
    date: '2022-11',
    type: 'publication',
    category: 'research',
    link: 'https://nature.com'
  },
  {
    id: '5',
    title: 'Outstanding Graduate Student Award',
    description: 'Recognized for exceptional academic performance, research contributions, and leadership in the computer science department.',
    date: '2022-04',
    type: 'award',
    category: 'academic'
  },
  {
    id: '6',
    title: 'Google Cloud Professional Developer',
    description: 'Certified Google Cloud Professional Developer demonstrating expertise in building and deploying applications on Google Cloud Platform.',
    date: '2023-01',
    type: 'certification',
    category: 'professional',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop'
  },
  {
    id: '7',
    title: 'Open Source Contribution Award',
    description: 'Recognized by the open source community for significant contributions to popular projects and mentoring new contributors.',
    date: '2023-06',
    type: 'award',
    category: 'personal'
  },
  {
    id: '8',
    title: 'Bachelor of Science in Computer Science',
    description: 'Graduated magna cum laude with honors. Completed thesis on "Efficient Algorithms for Graph Processing".',
    date: '2020-05',
    type: 'degree',
    category: 'academic',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop'
  },
  {
    id: '9',
    title: 'Conference Presentation - NeurIPS 2021',
    description: 'Presented research findings on "Deep Learning for Computer Vision" at the prestigious Neural Information Processing Systems conference.',
    date: '2021-12',
    type: 'research',
    category: 'research',
    link: 'https://neurips.cc/2021/'
  },
  {
    id: '10',
    title: 'Dean\'s List Recognition',
    description: 'Consistently maintained academic excellence, earning Dean\'s List recognition for all semesters.',
    date: '2018-2022',
    type: 'award',
    category: 'academic'
  }
]

export const getAccomplishmentsByType = (type: Accomplishment['type']) => {
  return accomplishments.filter(acc => acc.type === type)
}

export const getAccomplishmentsByCategory = (category: Accomplishment['category']) => {
  return accomplishments.filter(acc => acc.category === category)
}

export const getRecentAccomplishments = (limit: number = 5) => {
  return accomplishments
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit)
}
