'use client'

import { Github, Linkedin, Youtube, Mail, Download } from 'lucide-react'

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/yourusername',
    icon: Github,
    description: 'Check out my open source projects and contributions',
    color: 'hover:bg-slate-800 hover:text-white'
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/yourusername',
    icon: Linkedin,
    description: 'Connect with me professionally and view my experience',
    color: 'hover:bg-blue-600 hover:text-white'
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@yourusername',
    icon: Youtube,
    description: 'Watch my tutorials and tech content',
    color: 'hover:bg-red-600 hover:text-white'
  },
  {
    name: 'Email',
    href: 'mailto:your.email@example.com',
    icon: Mail,
    description: 'Send me a direct email for quick communication',
    color: 'hover:bg-primary-600 hover:text-white'
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
              className={`flex items-center p-4 rounded-lg border border-slate-200 dark:border-slate-700 transition-all duration-200 group ${social.color}`}
            >
              <div className="p-3 bg-slate-100 dark:bg-slate-700 rounded-lg mr-4 group-hover:bg-white dark:group-hover:bg-slate-600 transition-colors duration-200">
                <Icon className="h-6 w-6 text-slate-600 dark:text-slate-400 group-hover:text-current transition-colors duration-200" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-current transition-colors duration-200">
                  {social.name}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-current/80 transition-colors duration-200">
                  {social.description}
                </p>
              </div>
            </a>
          )
        })}
      </div>

      {/* Resume Download */}
      <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
        <button
          onClick={handleDownloadResume}
          className="w-full flex items-center justify-center p-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 group"
        >
          <Download className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
          Download Resume (PDF)
        </button>
        <p className="text-xs text-slate-500 dark:text-slate-400 text-center mt-2">
          Get a copy of my professional resume
        </p>
      </div>
    </div>
  )
}
