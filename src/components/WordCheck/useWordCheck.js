import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { usePage } from 'src/hooks/usePage'
import { addCurrentResult, addResult } from 'src/actions/actions'
import { nanoid } from 'nanoid'
import {
  getPercentCorrectAnswers,
  formatToLocaleDateString,
} from 'src/utils/helpers'

export const useWordCheck = () => {
  const words = useSelector(state => state.words)
  const [nextWordView, setNextWordView] = useState(false)
  const [activeWordsIndex, setActiveWordsIndex] = useState([0])
  const [activeWordIndex, setActiveWordIndex] = useState(0)
  const { navigate, dispatch } = usePage()
  const [count, setCount] = useState(0)

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
    if (activeWordsIndex.length === 10) {
      dispatch(
        addCurrentResult({
          date: formatToLocaleDateString(new Date()),
          result: getPercentCorrectAnswers(count),
          id: nanoid(),
        }),
      )
      dispatch(
        addResult({
          date: formatToLocaleDateString(new Date()),
          result: getPercentCorrectAnswers(count),
          id: nanoid(),
        }),
      )
      navigate('/result')
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
    count,
    setCount,
  }
}
