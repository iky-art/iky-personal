import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-12 sm:pt-24 sm:pb-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink-900 dark:text-ink-100 leading-tight">
            Iky
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-ink-500 dark:text-ink-400 font-medium">
            Developer · Founder · Builder
          </p>
          <p className="mt-6 text-base sm:text-lg text-ink-600 dark:text-ink-300 leading-relaxed max-w-2xl">
            I build things, experiment with ideas, and turn small projects into something people can actually use.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-lg bg-electric-500 text-white hover:bg-electric-600 transition-colors duration-200"
            >
              Lihat Project
            </Link>
            <a
              href="https://github.com/iky-art"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-lg border border-line dark:border-ink-700 text-ink-700 dark:text-ink-300 hover:border-electric-500/50 hover:text-electric-500 dark:hover:text-electric-400 transition-colors duration-200"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Quick intro */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 border-t border-line dark:border-ink-800">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-8 sm:gap-12">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-400 dark:text-ink-500 mb-3">
                Build
              </h2>
              <p className="text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
                Web apps, tools, and digital products — from idea to something real.
              </p>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-400 dark:text-ink-500 mb-3">
                Open Source
              </h2>
              <p className="text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
                Sharing code and learning in public. Check out my projects on GitHub.
              </p>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-400 dark:text-ink-500 mb-3">
                Experiment
              </h2>
              <p className="text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
                Trying new ideas, breaking things, and building what works.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
