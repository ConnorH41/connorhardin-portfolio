import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/ConnorHardin', icon: Github },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/connor-hardin/', icon: Linkedin },
  { name: 'Email', href: 'mailto:chardin993@g.rwu.edu', icon: Mail },
]

export default function Footer() {
  return (
    <footer className="bg-base dark:bg-base-dark border-t border-secondary/20 dark:border-secondary-dark/30 shadow-soft animate-fade-in">
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-extrabold text-gradient mb-4 dark:text-dark-dark">Connor Hardin</h3>
            <p className="text-dark/70 dark:text-dark-dark/70">
              Software developer and researcher passionate about creating innovative solutions.
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 dark:text-dark-dark">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary hover:text-secondary transition-all duration-200 shadow-soft focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2 focus:ring-offset-base dark:bg-primary-dark/10 dark:hover:bg-primary-dark/20 dark:text-primary-dark dark:hover:text-secondary-dark dark:focus:ring-primary-dark/30 dark:focus:ring-offset-base-dark"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-secondary/20 dark:border-secondary-dark/30 mt-8 pt-8 text-center">
          <p className="text-dark/60 dark:text-dark-dark/60">
            © {new Date().getFullYear()} Connor Hardin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
