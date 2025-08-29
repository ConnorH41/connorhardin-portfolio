'use client'

import { Github, Linkedin, Mail, Download } from 'lucide-react'

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/ConnorHardin',
    icon: Github,
    description: 'Check out my open source projects and contributions',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/connor-hardin/',
    icon: Linkedin,
    description: 'Connect with me professionally and view my experience',
  },
  {
    name: 'Email',
    href: 'mailto:chardin993@g.rwu.edu',
    icon: Mail,
    description: 'Send me a direct email for quick communication',
  }
]

export default function SocialLinks() {
  const handleDownloadResume = () => {
    // Replace with actual resume download logic
    console.log('Downloading resume...')
    // window.open('/resume.pdf', '_blank')
  }

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
        Connect With Me
      </h3>
      
      <div className="space-y-4">
        {socialLinks.map((social) => {
          const Icon = social.icon
          return (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 rounded-lg border border-slate-200 dark:border-slate-700 transition-all duration-200 group hover:bg-primary hover:text-white dark:hover:bg-primary-dark dark:hover:text-base"
            >
              <div className="p-3 bg-slate-100 dark:bg-slate-700 rounded-lg mr-4 group-hover:bg-primary group-hover:text-white dark:group-hover:bg-primary-dark dark:group-hover:text-base transition-colors duration-200">
                <Icon className="h-6 w-6 text-slate-600 dark:text-slate-400 group-hover:text-white dark:group-hover:text-base transition-colors duration-200" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-white dark:group-hover:text-base transition-colors duration-200">
                  {social.name}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-white/80 dark:group-hover:text-base/80 transition-colors duration-200">
                  {social.description}
                </p>
              </div>
            </a>
          )
        })}
      </div>

    {/* Resume Download feature is kept in code but button is removed for now */}
    </div>
  )
}
