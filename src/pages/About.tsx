export default function About() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink-900 dark:text-ink-100 mb-8">
          About
        </h1>

        <div className="space-y-6 text-base sm:text-lg text-ink-600 dark:text-ink-300 leading-relaxed">
          <p>
            I'm Iky — a developer, founder, and builder. I work on web development, open-source projects, and digital products.
          </p>

          <p>
            I build things, experiment with ideas, and turn small projects into something people can actually use. Most of my work happens in the open — on GitHub, where I share code, learn from others, and contribute to projects I care about.
          </p>

          <p>
            I care about writing clean code, building useful tools, and keeping things simple. I'm not interested in hype or marketing fluff — just building things that work and sharing what I learn along the way.
          </p>

          <p>
            When I'm not coding, I'm probably exploring new ideas, reading about technology, or working on side projects.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-line dark:border-ink-800">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-400 dark:text-ink-500 mb-4">
            What I work with
          </h2>
          <div className="flex flex-wrap gap-2">
            {['React', 'TypeScript', 'Node.js', 'Vite', 'Tailwind CSS', 'Open Source'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-sm rounded-md bg-ink-50 dark:bg-ink-900 text-ink-600 dark:text-ink-300 border border-line dark:border-ink-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
