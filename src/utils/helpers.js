const slicedFourTranslate = (words, wordCount = 4) => words.slice(0, wordCount)

export const filteredTranslateWords = (words, activeWord) => {
  return slicedFourTranslate(
    words.filter(word => word.translateWord !== activeWord),
  )
}

export const minCountWords = (wordsLength, minWords = 10) =>
  minWords - wordsLength
