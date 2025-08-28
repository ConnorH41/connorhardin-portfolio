'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Download, ArrowRight, ChevronDown } from 'lucide-react'

export default function Hero() {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownloadResume = () => {
    setIsDownloading(true)
    // Simulate download - replace with actual resume download logic
    setTimeout(() => {
      setIsDownloading(false)
      // You can add actual download logic here
      // window.open('/resume.pdf', '_blank')
    }, 1000)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
  <section className="min-h-[80vh] flex items-center justify-center relative bg-base dark:bg-base-dark px-2 animate-fade-in">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #81000022 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container-custom text-center relative z-10">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-fade-in tracking-tight leading-tight text-dark dark:text-dark-dark">
            Hi, I'm{' '}
            <span className="text-gradient">Connor Hardin</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-2xl text-dark/70 dark:text-dark-dark/80 mb-10 max-w-2xl mx-auto animate-slide-up font-medium">
            Software Developer & Researcher passionate about creating innovative solutions that make a difference in the world.
          </p>
        </div>
      </div>
    </section>
  )
}
