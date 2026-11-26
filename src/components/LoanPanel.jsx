function LoanPanel({ loans, onReturn }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        Meus empréstimos ({loans.length})
      </h2>

      {loans.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">
          Você ainda não possui livros emprestados.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {loans.map((book) => (
            <div
              key={book.id}
              className="flex items-center justify-between rounded-lg border bg-white p-4 dark:border-gray-700 dark:bg-gray-800"
            >
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {book.title}
                </h3>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {book.author}
                </p>
              </div>

              <button
                onClick={() => onReturn(book.id)}
                className="rounded-lg bg-red-600 px-3 py-2 text-sm text-white hover:bg-red-700"
              >
                Devolver
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default LoanPanel