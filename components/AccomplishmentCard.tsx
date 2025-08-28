import { Accomplishment } from '@/data/accomplishments'
import { ExternalLink, Calendar } from 'lucide-react'
import Image from 'next/image'

interface AccomplishmentCardProps {
  accomplishment: Accomplishment
}

export default function AccomplishmentCard({ accomplishment }: AccomplishmentCardProps) {
  return (
    <div className="card group hover:scale-105 transition-all duration-300">
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
              {accomplishment.date}
            </div>
          )}
          {accomplishment.link && (
            <a
              href={accomplishment.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors duration-200"
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              View
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
