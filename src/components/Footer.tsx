const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-line dark:border-ink-800 py-8 mt-auto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-ink-500 dark:text-ink-400">
            Iky — Developer · Founder · Builder
          </p>
          <p className="text-sm text-ink-400 dark:text-ink-500">
            &copy; {CURRENT_YEAR} Iky
          </p>
        </div>
      </div>
    </footer>
  )
}
