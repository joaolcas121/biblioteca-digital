import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'

function BookCard({ book, onLoan }) {
  return (
    <Card className="group bg-white dark:bg-gray-800">
      <CardContent className="p-5">
        <div className="mb-4 flex h-32 items-center justify-center rounded-lg bg-blue-100 dark:bg-gray-700">
          <span className="text-4xl">📚</span>
        </div>

        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          {book.title}
        </h3>

        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          {book.author}
        </p>

        <div className="mt-4 flex justify-between text-sm">
          <span>{book.genre}</span>
          <span>{book.pages} páginas</span>
        </div>

        {book.available ? (
          <>
            <p className="mb-3 mt-4 font-medium text-green-600">
              Disponível
            </p>

            <Button
              onClick={() => onLoan(book.id)}
              className="w-full"
            >
              Emprestar livro
            </Button>
          </>
        ) : (
          <p className="mt-4 font-medium text-red-500">
            Indisponível
          </p>
        )}
      </CardContent>
    </Card>
  )
}

export default BookCard