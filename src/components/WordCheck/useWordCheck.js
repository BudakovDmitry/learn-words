import { useState } from 'react'

export const useWordCheck = () => {
  const [nextWordView, setNextWordView] = useState(false)

  return {
    nextWordView,
    setNextWordView,
  }
}
