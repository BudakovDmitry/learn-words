import { pipe } from 'lodash/fp'

const getAllTranslateWords = (words, activeWord) => {
  return {
    activeWord: activeWord,
    allWords: words.map(word => word.translateWord),
  }
}
const filteredTranslateWords = words => {
  return {
    ...words,
    allWords: shuffleWords(
      words.allWords.filter(word => word !== words.activeWord),
    ),
  }
}

const slicedThreeWords = words => {
  return {
    ...words,
    allWords: words.allWords.slice(0, 3),
  }
}

const getArrayTranslateWords = words => [words.activeWord, ...words.allWords]

const shuffleWords = arrayWords => {
  for (let i = arrayWords.length - 1; i > 0; i--) {
    let tmp = arrayWords[i]
    let randomNumber = Math.floor(Math.random() * (i + 1))

    arrayWords[i] = arrayWords[randomNumber]
    arrayWords[randomNumber] = tmp
  }
  return arrayWords
}

export const getFourTranslateWords = (words, activeWord) =>
  pipe(
    getAllTranslateWords,
    filteredTranslateWords,
    slicedThreeWords,
    getArrayTranslateWords,
    shuffleWords,
  )(words, activeWord)

export const minCountWords = (wordsLength, minWords = 10) =>
  minWords - wordsLength
