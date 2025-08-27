'use client'

import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'

export default function ContactCTA() {
  return (
    <section className="section-padding bg-primary-600 text-white">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Work Together?
        </h2>
        <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
          I'm always interested in new opportunities, collaborations, or just connecting 
          with fellow developers and researchers. Let's discuss how we can work together!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/contact" className="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg flex items-center">
            <Mail className="h-5 w-5 mr-2" />
            Get In Touch
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
          
          <Link href="/projects" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105">
            View My Work
          </Link>
        </div>
      </div>
    </section>
  )
}
