import { useState } from 'react'
import { emit } from '../lib/eventBus'
import { Input } from './ui/input'
import { Button } from './ui/button'

function ReservationForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const cleanName = name.trim()
    const cleanEmail = email.trim()
    const atPosition = cleanEmail.indexOf('@')
    const dotPosition = cleanEmail.lastIndexOf('.')

    if (!cleanName || atPosition === -1 || dotPosition < atPosition + 2) {
      setMessage('Preencha seu nome e informe um e-mail válido.')
      return
    }

    setMessage('Reserva enviada com sucesso!')

    emit({
      id: Date.now(),
      message: `Reserva realizada por ${cleanName}`,
    })

    setName('')
    setEmail('')
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        Reservar um livro
      </h2>

      <form onSubmit={handleSubmit} className="max-w-md space-y-4">
        <Input
          type="text"
          placeholder="Seu nome"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="dark:text-white"
        />

        <Input
          type="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="dark:text-white"
        />

        <Button type="submit" className="w-full">
          Fazer reserva
        </Button>

        {message && (
          <p className="text-sm text-blue-600">
            {message}
          </p>
        )}
      </form>
    </section>
  )
}

export default ReservationForm