'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center relative bg-base dark:bg-base-dark px-2 animate-fade-in">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #81000022 1px, transparent 0)`,
            backgroundSize: '60px 60px',
          }}
        ></div>
      </div>

      <div className="container-custom text-center relative z-10">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-fade-in tracking-tight leading-tight text-dark dark:text-dark-dark">
            Hi, I'm{' '}
            <span className="text-gradient">Connor Hardin</span>
          </h1>

          {/* Tagline with highlights */}
          <p className="text-lg md:text-2xl text-dark dark:text-white mb-8 max-w-2xl mx-auto animate-slide-up font-semibold">
            <span className="font-bold text-primary dark:text-primary-400">Software Developer & Researcher</span> passionate about creating <span className="text-secondary font-semibold">innovative solutions</span> that make a difference in the world.
          </p>

          {/* Call to Action */}
          <div className="flex gap-4 justify-center">
            <Link href="/projects" className="btn-primary flex items-center gap-2 text-lg px-6 py-3">
              View My Work <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/contact" className="btn-primary flex items-center gap-2 text-lg px-6 py-3 bg-secondary text-white hover:bg-secondary-dark dark:bg-secondary-dark dark:text-white dark:hover:bg-primary-800">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
