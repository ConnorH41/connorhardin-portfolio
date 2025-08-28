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
    id: 'rwudev',
    title: 'Software Developer',
    company: 'Roger Williams University',
    location: 'Bristol, RI',
    startDate: '2024-11',
    endDate: '2025-07',
    current: false,
    description: [
      'Developed a full-stack hiring platform (React + TypeScript, Node.js, MySQL, NGINX) to modernize how union construction workers connect with job opportunities.',
      'Owned system architecture decisions, prioritizing speed, modularity, and scalability.',
      'Designed role-based dashboards for contractors, union admins, and workers, streamlining job postings, certification tracking, workforce management, and analytics.'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'MySQL', 'NGINX', 'Full-Stack'],
    type: 'work'
  },
  {
    id: '1',
    title: 'IS Intern',
    company: 'Associates of Cape Cod',
    location: 'Falmouth, MA',
    startDate: '2025-06',
    endDate: '2025-09',
    current: false,
    description: [
      'Implemented Passkey Authentication in an existing Android App',
      'Developed and maintained build scripts across multiple applications.',
      'Built a prototype system integrating an EPOCH 2 Plate Reader via .NET, gRPC, and Android MAUI with mTLS.',
      'Used Wireshark to analyze the network traffic and design an advanced cancellation feature.',
      'Deployed and troubleshot applications using VM log analysis on Windows.',
      'Created and containerized a gRPC service for deployment on Azure Container Apps/Registry.',
      'Collaborated with the IS team to share ideas and improve workflows.'
    ],
    technologies: ['Android', '.NET', 'gRPC', 'MAUI', 'Wireshark', 'Azure', 'VM', 'Windows', 'Containerization'],
    type: 'internship'
  },
  {
    id: '2',
    title: 'IT/IS Intern',
    company: 'Associates of Cape Cod',
    location: 'Falmouth, MA',
    startDate: '2024-08',
    endDate: '2024-09',
    current: false,
    description: [
      'Remoted into user’s computers to download applications and update security.',
      'Created a functional prototype of an online form using Microsoft Power Apps.',
      'Helped people within the company through the Web Help Desk.',
      'Attended Microsoft Team’s meetings daily.',
      'Worked with others to solve issues and share ideas.'
    ],
    technologies: ['Remote Desktop', 'Microsoft Power Apps', 'Web Help Desk', 'Microsoft Teams'],
    type: 'internship'
  },
  {
    id: '3',
    title: 'LAL Technician',
    company: 'Associates of Cape Cod',
    location: 'Falmouth, MA',
    startDate: '2023-06', // Summer 2023
    endDate: '2024-08',   // Summer 2024
    current: false,
    description: [
      'Worked two summers (2023 &  half of 2024).',
      'Utilized Standard Operating Procedures (SOP).',
      'Performed scheduled cleaning of equipment/process areas.',
      'Followed gowning requirements and wore protective clothing over the head, face, hands, feet, and body.',
      'Collected and processed blood cells from horseshoe crabs.'
    ],
    technologies: ['SOP', 'Lab Cleaning', 'Protective Clothing', 'Blood Cell Processing'],
    type: 'work'
  },
  {
    id: '5',
    title: 'Kitchen Staff',
    company: 'Paul’s Pizza and Seafood',
    location: 'Falmouth, MA',
    startDate: '2021-07', // Summer 2021
    endDate: '2022-09',   // Summer 2022
    current: false,
    description: [
      'Worked two summers (2021 & 2022).',
      'Prepared kitchen before the restaurant opened.',
      'Spread dough in pans, sauced, cheesed pizzas.',
      'Read orders, put toppings on pizzas, and put pizzas in oven.',
      'Washed dishes, swept floors, cleaned tables, and cleaned pans.'
    ],
    technologies: ['Kitchen Prep', 'Pizza Making', 'Cleaning'],
    type: 'work'
  }
]

export const getCurrentExperience = () => experiences.filter(exp => exp.current)
export const getExperienceByType = (type: Experience['type']) => experiences.filter(exp => exp.type === type)
