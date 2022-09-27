import { useState } from 'react'

export const useWordTranslate = () => {
  const [rightSelect, setRightSelect] = useState('')

  const isRightSelected = (selectedTranslate, activeTranslate) => {
    selectedTranslate === activeTranslate
      ? setRightSelect('true')
      : setRightSelect('false')
  }

  setTimeout(() => {
    setRightSelect('')
  }, 500)

  return { isRightSelected, rightSelect }
}
