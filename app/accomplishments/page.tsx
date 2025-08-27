import AccomplishmentsGrid from '@/components/AccomplishmentsGrid'

export const metadata = {
  title: 'Accomplishments - Connor Hardin',
  description: 'My academic achievements, research milestones, and professional accomplishments.',
}

export default function Accomplishments() {
  return (
    <div className="min-h-screen">
      <div className="section-padding">
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-center mb-16 text-gradient">
            Accomplishments
          </h1>
          <AccomplishmentsGrid />
        </div>
      </div>
    </div>
  )
}
