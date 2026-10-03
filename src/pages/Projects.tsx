const projects = [
  {
    name: 'BeresAja',
    description: 'A project focused on getting things done — practical tools for everyday tasks.',
    status: 'Active',
    tech: ['React', 'TypeScript'],
    url: null,
  },
  {
    name: 'Orbit Studio',
    description: 'A creative studio project for building and experimenting with digital experiences.',
    status: 'Active',
    tech: ['React', 'Vite'],
    url: null,
  },
  {
    name: 'NovaTalk',
    description: 'A communication project exploring real-time interaction and messaging.',
    status: 'Active',
    tech: ['React', 'Node.js'],
    url: null,
  },
  {
    name: 'DropZone',
    description: 'A file sharing and management project for quick, simple transfers.',
    status: 'Active',
    tech: ['React', 'TypeScript'],
    url: null,
  },
  {
    name: 'Nagi',
    description: 'A project exploring new ideas and building something from scratch.',
    status: 'Active',
    tech: ['React'],
    url: null,
  },
  {
    name: 'Orin',
    description: 'A digital product project focused on utility and simplicity.',
    status: 'Active',
    tech: ['React', 'Vite'],
    url: null,
  },
  {
    name: 'DevPocket',
    description: 'A developer tools project — utilities and resources for building software.',
    status: 'Active',
    tech: ['React', 'TypeScript'],
    url: null,
  },
]

export default function Projects() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink-900 dark:text-ink-100 mb-4">
          Projects
        </h1>
        <p className="text-base sm:text-lg text-ink-500 dark:text-ink-400 mb-12 max-w-2xl">
          Things I'm building and experimenting with. Most of these are open-source and available on my GitHub.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {projects.map((project) => (
            <article
              key={project.name}
              className="p-5 rounded-lg border border-line dark:border-ink-800 bg-surface dark:bg-ink-900 hover:border-electric-500/30 dark:hover:border-electric-500/30 transition-colors duration-200"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <h2 className="font-display text-lg font-semibold text-ink-900 dark:text-ink-100">
                  {project.name}
                </h2>
                <span className="shrink-0 px-2 py-0.5 text-xs font-medium rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                  {project.status}
                </span>
              </div>
              <p className="text-sm text-ink-600 dark:text-ink-300 leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-xs rounded bg-ink-50 dark:bg-ink-800 text-ink-500 dark:text-ink-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-sm font-medium text-electric-500 dark:text-electric-400 hover:underline"
                >
                  View project
                  <svg className="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </article>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-line dark:border-ink-800">
          <p className="text-sm text-ink-500 dark:text-ink-400 mb-4">
            Want to see more? Check out my GitHub for the full list of projects and open-source contributions.
          </p>
          <a
            href="https://github.com/iky-art"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-lg bg-ink-900 dark:bg-ink-100 text-white dark:text-ink-900 hover:bg-ink-800 dark:hover:bg-ink-200 transition-colors duration-200"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
