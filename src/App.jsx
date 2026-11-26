import { useState } from 'react'
import ActivityPanel from './components/ActivityPanel'
import { emit } from './lib/eventBus'
import Header from './components/Header'
import BookGrid from './components/BookGrid'
import BookSearch from './components/BookSearch'
import FilterBar from './components/FilterBar'
import LoanPanel from './components/LoanPanel'
import Footer from './components/Footer'
import ReservationForm from './components/ReservationForm'
import { books, genres } from './data/books'

function App() {
  const [bookList, setBookList] = useState(books)
  const [loans, setLoans] = useState([])
  const [isDark, setIsDark] = useState(false)
  const [selectedGenre, setSelectedGenre] = useState('Todos')

  function toggleTheme() {
    setIsDark(!isDark)
  }

  function handleLoan(bookId) {
    const selectedBook = bookList.find((book) => book.id === bookId)

    if (!selectedBook || !selectedBook.available) {
      return
    }

    setLoans((previousLoans) => [...previousLoans, selectedBook])

    setBookList((previousBooks) =>
      previousBooks.map((book) =>
        book.id === bookId ? { ...book, available: false } : book
      )
    )

    emit({
      id: Date.now(),
      message: `Livro "${selectedBook.title}" emprestado.`,
    })
  }

  function handleReturn(bookId) {
    const returnedBook = bookList.find((book) => book.id === bookId)

    setLoans((previousLoans) =>
      previousLoans.filter((book) => book.id !== bookId)
    )

    setBookList((previousBooks) =>
      previousBooks.map((book) =>
        book.id === bookId ? { ...book, available: true } : book
      )
    )

    if (returnedBook) {
      emit({
        id: Date.now(),
        message: `Livro "${returnedBook.title}" devolvido.`,
      })
    }
  }

  const filteredBooks =
    selectedGenre === 'Todos'
      ? bookList
      : bookList.filter((book) => book.genre === selectedGenre)

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
        <Header
          loanCount={loans.length}
          isDark={isDark}
          onToggleTheme={toggleTheme}
        />

        <FilterBar
          genres={genres}
          selectedGenre={selectedGenre}
          onSelectGenre={setSelectedGenre}
        />

        <BookGrid books={filteredBooks} onLoan={handleLoan} />

        <BookSearch books={bookList} />

        <LoanPanel loans={loans} onReturn={handleReturn} />

        <ReservationForm />

        <ActivityPanel />

        <Footer />
      </div>
    </div>
  )
}

export default App