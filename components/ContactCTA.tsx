'use client'

import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'

export default function ContactCTA() {
  return (
    <section className="section-padding bg-primary-600 text-white">
      <div className="container-custom text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          Ready to Work Together?
        </h2>
        <p className="text-lg md:text-xl text-primary-100 mb-10 max-w-2xl mx-auto font-medium">
          I'm always interested in new opportunities, collaborations, or just connecting with fellow developers and researchers. Let's discuss how we can work together!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/contact" className="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-sm hover:shadow-lg flex items-center min-w-[180px] text-lg">
            <Mail className="h-5 w-5 mr-2" />
            Get In Touch
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}
