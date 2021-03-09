import { useState } from 'react'

export function useToggle(defaultValue = false) {
  const [state, setState] = useState(defaultValue)
  const toggle = (value = !state) => {
    setState(value)
  }

  return [state, toggle]
}
