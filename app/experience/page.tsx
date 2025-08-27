import ExperienceTimeline from '@/components/ExperienceTimeline'

export const metadata = {
  title: 'Experience - Connor Hardin',
  description: 'My professional experience, research work, and career journey.',
}

export default function Experience() {
  return (
    <div className="min-h-screen">
      <div className="section-padding">
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-center mb-16 text-gradient">
            Experience
          </h1>
          <ExperienceTimeline />
        </div>
      </div>
    </div>
  )
}
