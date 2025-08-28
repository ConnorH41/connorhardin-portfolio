import { courses } from '@/data/courses'

export default function Courses() {
  return (
    <section className="mb-16 mt-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-slate-900 dark:text-slate-100">
        Relevant Coursework
      </h2>
      <div className="flex flex-wrap gap-3 justify-center">
        {courses.map((course) => (
          <span
            key={course}
            className="px-4 py-2 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-100 text-sm font-medium shadow-sm hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors"
          >
            {course}
          </span>
        ))}
      </div>
    </section>
  )
}
