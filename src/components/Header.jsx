function Header({ loanCount, isDark, onToggleTheme }) {
  return (
    <header className="bg-white dark:bg-gray-900 border-b dark:border-gray-700 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            BookSpace
          </h1>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Sua biblioteca digital
          </p>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
            Empréstimos ({loanCount})
          </span>

          <button
            onClick={onToggleTheme}
            className="rounded-lg bg-gray-200 dark:bg-gray-700 px-4 py-2 text-sm"
          >
            {isDark ? 'Modo claro' : 'Modo escuro'}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header