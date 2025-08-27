import Bio from '@/components/Bio'
import Skills from '@/components/Skills'
import Education from '@/components/Education'

export const metadata = {
  title: 'About - Connor Hardin',
  description: 'Learn more about Connor Hardin, his background, education, and skills.',
}

export default function About() {
  return (
    <div className="min-h-screen">
      <div className="section-padding">
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-center mb-16 text-gradient">
            About Me
          </h1>
          <Bio />
          <Skills />
          <Education />
        </div>
      </div>
    </div>
  )
}
