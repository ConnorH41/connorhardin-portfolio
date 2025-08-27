import Hero from '@/components/Hero'
import FeaturedProjects from '@/components/FeaturedProjects'
import SkillsOverview from '@/components/SkillsOverview'
import ContactCTA from '@/components/ContactCTA'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <SkillsOverview />
      <FeaturedProjects />
      <ContactCTA />
    </div>
  )
}
