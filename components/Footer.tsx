import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/yourusername', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/yourusername', icon: Linkedin },
  { name: 'Email', href: 'mailto:your.email@example.com', icon: Mail },
]

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-gradient mb-4">Connor Hardin</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Software developer and researcher passionate about creating innovative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-primary-100 dark:hover:bg-primary-900 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} Connor Hardin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
