import { useEffect, useState } from 'react'

export const useWordTranslate = () => {
  const [rightSelect, setRightSelect] = useState('')

  const isRightSelected = (selectedTranslate, activeTranslate) => {
    setRightSelect(selectedTranslate === activeTranslate ? 'true' : 'false')
  }

  useEffect(() => {
    if (rightSelect === 'false') {
      setTimeout(() => {
        setRightSelect('')
      }, 1000)
    }
  }, [rightSelect])

  return { isRightSelected, rightSelect }
}
