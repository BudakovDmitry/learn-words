import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export const useWordCheck = () => {
  const words = useSelector(state => state.words)
  const [nextWordView, setNextWordView] = useState(false)
  const [activeWordsIndex, setActiveWordsIndex] = useState([0])
  const [activeWordIndex, setActiveWordIndex] = useState(0)

  const getRandomWordIndex = () => {
    return Math.floor(Math.random() * (words.length - 0)) + 0
  }

  const addWordIndex = () => {
    if (activeWordsIndex.length < 10) {
      const randomIndex = getRandomWordIndex()
      !activeWordsIndex.includes(randomIndex)
        ? setActiveWordsIndex([...activeWordsIndex, randomIndex])
        : addWordIndex()
    }
  }

  useEffect(() => {
    setActiveWordIndex(activeWordsIndex[activeWordsIndex.length - 1])
  }, [activeWordsIndex])

  return {
    words,
    nextWordView,
    setNextWordView,
    getRandomWordIndex,
    activeWordIndex,
    addWordIndex,
    wordNumber: activeWordsIndex.length,
  }
}
