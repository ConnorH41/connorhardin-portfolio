import ProjectGrid from '@/components/ProjectGrid'

export const metadata = {
  title: 'Projects - Connor Hardin',
  description: 'Explore my portfolio of projects showcasing various technologies and skills.',
}

export default function Projects() {
  return (
    <div className="min-h-screen">
      <div className="section-padding">
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-center mb-16 text-gradient">
            My Projects
          </h1>
          <ProjectGrid />
        </div>
      </div>
    </div>
  )
}
