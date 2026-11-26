function FilterBar({ genres, selectedGenre, onSelectGenre }) {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-6">
      <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
        Filtrar por gênero
      </h2>

      <div className="flex flex-wrap gap-3">
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => onSelectGenre(genre)}
            aria-pressed={selectedGenre === genre}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              selectedGenre === genre
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-blue-100 dark:bg-gray-800 dark:text-gray-200'
            }`}
          >
            {genre}
          </button>
        ))}
      </div>
    </section>
  )
}

export default FilterBar