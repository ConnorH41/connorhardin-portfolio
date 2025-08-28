'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTheme } from './ThemeProvider'
import { Sun, Moon, Menu, X } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Experience', href: '/experience' },
  { name: 'Accomplishments', href: '/accomplishments' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  return (
  <header className="bg-base/90 dark:bg-base-dark/95 backdrop-blur-md border-b border-secondary/20 dark:border-secondary-dark/30 sticky top-0 z-50 shadow-soft animate-fade-in">
      <nav className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-extrabold text-gradient tracking-tight dark:text-dark-dark">
            Connor Hardin
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-dark/80 dark:text-dark-dark/80 hover:text-primary dark:hover:text-primary-dark transition-colors duration-200 font-medium rounded-xl px-3 py-1.5 hover:bg-primary/10 dark:hover:bg-primary-dark/10 focus:outline-none focus:ring-2 focus:ring-primary/30 dark:focus:ring-primary-dark/30 focus:ring-offset-2 focus:ring-offset-base dark:focus:ring-offset-base-dark"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-base hover:bg-primary/10 dark:bg-base-dark dark:hover:bg-primary-dark/10 transition-colors duration-200 shadow-soft focus:outline-none focus:ring-2 focus:ring-primary/30 dark:focus:ring-primary-dark/30 focus:ring-offset-2 focus:ring-offset-base dark:focus:ring-offset-base-dark"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5 text-dark/80" />
              ) : (
                <Sun className="h-5 w-5 text-primary-dark" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-base hover:bg-primary/10 dark:bg-base-dark dark:hover:bg-primary-dark/10 transition-colors duration-200 shadow-soft focus:outline-none focus:ring-2 focus:ring-primary/30 dark:focus:ring-primary-dark/30 focus:ring-offset-2 focus:ring-offset-base dark:focus:ring-offset-base-dark"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5 text-dark/80 dark:text-dark-dark/80" />
              ) : (
                <Menu className="h-5 w-5 text-dark/80 dark:text-dark-dark/80" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-secondary/20 dark:border-secondary-dark/30 animate-fade-in bg-base dark:bg-base-dark">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-dark/80 dark:text-dark-dark/80 hover:text-primary dark:hover:text-primary-dark transition-colors duration-200 px-4 py-2 rounded-xl hover:bg-primary/10 dark:hover:bg-primary-dark/10 focus:outline-none focus:ring-2 focus:ring-primary/30 dark:focus:ring-primary-dark/30 focus:ring-offset-2 focus:ring-offset-base dark:focus:ring-offset-base-dark"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
