import { useEffect, useState } from 'react'
import { subscribe } from '../lib/eventBus'

function ActivityPanel() {
  const [activities, setActivities] = useState([])

  useEffect(() => {
    const unsubscribe = subscribe((activity) => {
      setActivities((previous) => [activity, ...previous].slice(0, 5))
    })

    return unsubscribe
  }, [])

  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        Últimas atividades
      </h2>

      {activities.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">
          Nenhuma atividade registrada ainda.
        </p>
      ) : (
        <ul className="space-y-3">
          {activities.map((activity) => (
            <li
              key={activity.id}
              className="rounded-lg border bg-white p-3 text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
            >
              {activity.message}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default ActivityPanel