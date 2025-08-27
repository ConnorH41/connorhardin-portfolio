export interface Skill {
  name: string
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  category: 'languages' | 'frameworks' | 'tools' | 'soft-skills'
}

export const skills: Skill[] = [
  // Programming Languages
  { name: 'JavaScript/TypeScript', level: 'expert', category: 'languages' },
  { name: 'Python', level: 'advanced', category: 'languages' },
  { name: 'Java', level: 'advanced', category: 'languages' },
  { name: 'C++', level: 'intermediate', category: 'languages' },
  { name: 'Go', level: 'intermediate', category: 'languages' },
  { name: 'Rust', level: 'beginner', category: 'languages' },

  // Frameworks & Libraries
  { name: 'React/Next.js', level: 'expert', category: 'frameworks' },
  { name: 'Node.js/Express', level: 'advanced', category: 'frameworks' },
  { name: 'TensorFlow/PyTorch', level: 'advanced', category: 'frameworks' },
  { name: 'Django/Flask', level: 'intermediate', category: 'frameworks' },
  { name: 'React Native', level: 'intermediate', category: 'frameworks' },
  { name: 'Vue.js', level: 'intermediate', category: 'frameworks' },

  // Tools & Technologies
  { name: 'Git/GitHub', level: 'expert', category: 'tools' },
  { name: 'Docker/Kubernetes', level: 'advanced', category: 'tools' },
  { name: 'AWS/Azure', level: 'advanced', category: 'tools' },
  { name: 'PostgreSQL/MongoDB', level: 'advanced', category: 'tools' },
  { name: 'CI/CD Pipelines', level: 'advanced', category: 'tools' },
  { name: 'Linux/Unix', level: 'advanced', category: 'tools' },

  // Soft Skills
  { name: 'Problem Solving', level: 'expert', category: 'soft-skills' },
  { name: 'Team Leadership', level: 'advanced', category: 'soft-skills' },
  { name: 'Communication', level: 'advanced', category: 'soft-skills' },
  { name: 'Project Management', level: 'intermediate', category: 'soft-skills' },
  { name: 'Mentoring', level: 'advanced', category: 'soft-skills' },
  { name: 'Research & Analysis', level: 'advanced', category: 'soft-skills' }
]

export const getSkillsByCategory = (category: Skill['category']) => {
  return skills.filter(skill => skill.category === category)
}

export const getSkillsByLevel = (level: Skill['level']) => {
  return skills.filter(skill => skill.level === level)
}

export const skillCategories = [
  { key: 'languages', label: 'Programming Languages', icon: '💻' },
  { key: 'frameworks', label: 'Frameworks & Libraries', icon: '⚡' },
  { key: 'tools', label: 'Tools & Technologies', icon: '🛠️' },
  { key: 'soft-skills', label: 'Soft Skills', icon: '🤝' }
]
