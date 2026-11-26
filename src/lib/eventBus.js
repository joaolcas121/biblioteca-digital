const listeners = []

export function subscribe(callback) {
  listeners.push(callback)

  return () => {
    const index = listeners.indexOf(callback)

    if (index !== -1) {
      listeners.splice(index, 1)
    }
  }
}

export function emit(activity) {
  listeners.forEach((callback) => callback(activity))
}