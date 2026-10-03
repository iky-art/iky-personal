import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 text-center">
      <div className="max-w-md mx-auto">
        <p className="text-sm font-semibold uppercase tracking-wider text-ink-400 dark:text-ink-500 mb-4">
          404
        </p>
        <h1 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink-900 dark:text-ink-100 mb-4">
          Page not found
        </h1>
        <p className="text-base text-ink-500 dark:text-ink-400 mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-lg bg-electric-500 text-white hover:bg-electric-600 transition-colors duration-200"
        >
          Back to home
        </Link>
      </div>
    </section>
  )
}
