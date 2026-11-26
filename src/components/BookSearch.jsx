import { useState } from 'react'

function BookSearch({ books }) {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState('')

  function searchBooks() {
    setLoading(true)
    setResult('')

    new Promise((resolve) => {
      setTimeout(() => {
        const availableBooks = books.filter((book) => book.available)
        resolve(availableBooks.length)
      }, 1500)
    }).then((quantity) => {
      setResult(`${quantity} livros disponíveis no momento.`)
      setLoading(false)
    })
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        Consultar disponibilidade
      </h2>

      <button
        onClick={searchBooks}
        disabled={loading}
        className="rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50"
      >
        {loading ? 'Consultando...' : 'Consultar livros'}
      </button>

      {result && (
        <p
          aria-live="polite"
          className="mt-4 text-gray-700 dark:text-gray-200"
        >
          {result}
        </p>
      )}
    </section>
  )
}

export default BookSearch