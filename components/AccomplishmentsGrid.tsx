'use client'

import { useState } from 'react'
import { accomplishments, Accomplishment } from '@/data/accomplishments'
import { Calendar, Award, GraduationCap, BookOpen, ExternalLink } from 'lucide-react'
import Image from 'next/image'




export default function AccomplishmentsGrid() {
  const [search, setSearch] = useState('')


  // Sort accomplishments by date descending, missing dates last
  const sortedAccomplishments = [...accomplishments].sort((a, b) => {
    if (!a.date && !b.date) return 0;
    if (!a.date) return 1;
    if (!b.date) return -1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const filteredAccomplishments = sortedAccomplishments.filter(acc =>
    acc.title.toLowerCase().includes(search.toLowerCase())
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
  }

  return (
    <div>
      {/* Search Bar */}
      <div className="flex justify-center mb-12">
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search accomplishments by title..."
          className="w-full max-w-md px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>

      {/* Accomplishments Grid */}
      {filteredAccomplishments.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAccomplishments.map((accomplishment) => {
            return (
              <div key={accomplishment.id} className="card group hover:scale-105 transition-all duration-300 relative">
                {accomplishment.featured && (
                  <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full shadow-soft z-10">
                    Featured
                  </div>
                )}
                {/* Image */}
                {accomplishment.image && (
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={accomplishment.image}
                      alt={accomplishment.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                )}

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-100">
                    {accomplishment.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                    {accomplishment.description}
                  </p>
                  <div className="flex items-center justify-between">
                    {accomplishment.date && (
                      <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                        <Calendar className="h-4 w-4 mr-2" />
                        {formatDate(accomplishment.date)}
                      </div>
                    )}
                    {accomplishment.link && (
                      <a
                        href={accomplishment.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-primary text-base font-semibold text-base rounded-2xl hover:bg-secondary transition-all duration-200 shadow-soft hover:shadow-elegant dark:bg-primary-800 dark:text-slate-100 dark:hover:bg-secondary-dark"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        View
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-lg text-slate-600 dark:text-slate-400">
            No accomplishments found.
          </p>
        </div>
      )}

      {/* Accomplishment Count */}
      <div className="text-center mt-12 text-slate-600 dark:text-slate-400">
        Showing {filteredAccomplishments.length} of {accomplishments.length} accomplishments
      </div>
    </div>
  )
}
