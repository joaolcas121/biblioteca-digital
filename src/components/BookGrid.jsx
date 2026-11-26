import BookCard from './BookCard'

function BookGrid({ books, onLoan }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
        Nosso catálogo
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onLoan={onLoan}
          />
        ))}
      </div>
    </section>
  )
}

export default BookGrid