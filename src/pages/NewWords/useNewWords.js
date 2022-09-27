import { addWord } from 'src/actions/actions'
import { usePage } from 'src/hooks/usePage'
import { nanoid } from 'nanoid'
import { useState } from 'react'

export const useNewWords = () => {
  const { dispatch } = usePage()
  const containerNotification = document.getElementById('modals')
  const [activeNotification, setActiveNotification] = useState(false)

  const openNotification = () => {
    setActiveNotification(true)

    setTimeout(() => {
      setActiveNotification(false)
    }, 1000)
  }

  const addNewWord = word => {
    dispatch(
      addWord({
        ...word,
        id: nanoid(),
      }),
    )
    openNotification()
  }

  return {
    addNewWord,
    containerNotification,
    activeNotification,
    setActiveNotification,
  }
}
