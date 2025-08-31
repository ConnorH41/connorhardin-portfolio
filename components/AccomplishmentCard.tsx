import { Accomplishment } from '@/data/accomplishments'
import { ExternalLink, Calendar } from 'lucide-react'
import Image from 'next/image'

interface AccomplishmentCardProps {
  accomplishment: Accomplishment
}

export default function AccomplishmentCard({ accomplishment }: AccomplishmentCardProps) {
  return (
    <div className="card group hover:scale-[1.03] transition-transform duration-300 animate-fade-in">
      {accomplishment.image && (
        <div className="relative h-48 mb-4 rounded-2xl overflow-hidden shadow-soft">
          <Image
            src={accomplishment.image}
            alt={accomplishment.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-dark/10 group-hover:bg-dark/5 transition-colors duration-300" />
        </div>
      )}
      <div className="flex-1">
        <h3 className="text-xl font-bold mb-2 text-dark dark:text-slate-100">
          {accomplishment.title}
        </h3>
        <p className="text-dark/70 mb-4 line-clamp-3 dark:text-slate-400">
          {accomplishment.description}
        </p>
        <div className="flex items-center justify-between">
          {accomplishment.date && (
            <div className="flex items-center text-sm text-dark/60 dark:text-slate-300">
              <Calendar className="h-4 w-4 mr-2" />
              {accomplishment.date}
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
}
