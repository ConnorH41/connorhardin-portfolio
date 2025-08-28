import Hero from '@/components/Hero'
import FeaturedProjects from '@/components/FeaturedProjects'
import ContactCTA from '@/components/ContactCTA'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <Hero />

      {/* Featured Projects Section */}
      <section className="flex-1">
        <FeaturedProjects />
      </section>

      {/* Contact Call To Action */}
      <footer className="mt-auto">
        <ContactCTA />
      </footer>
    </main>
  )
}
