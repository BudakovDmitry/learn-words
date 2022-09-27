import { useState } from 'react'

export const useWordTranslate = () => {
  const [rightSelect, setRightSelect] = useState('')

  const isRightSelected = (selectedTranslate, activeTranslate) => {
    setRightSelect(selectedTranslate === activeTranslate ? 'true' : 'false')
  }

  return { isRightSelected, rightSelect }
}
