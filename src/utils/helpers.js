import { pipe } from 'lodash/fp'
import { PERCENT_FOR_EVERY_CORRECT_ANSWERS } from 'src/constants'

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

const getAllResultsValue = (results, resultsLength) => {
  return {
    resultsLength: resultsLength,
    results: results.map(result => result.result),
  }
}

const getResultTotal = results => {
  return {
    ...results,
    results: results.results.reduce((acc, result) => acc + result, 0),
  }
}

const averageResult = results => {
  return Math.floor(results.results / results.resultsLength)
}

export const averagePercentResult = (results, resultsLength) =>
  pipe(
    getAllResultsValue,
    getResultTotal,
    averageResult,
  )(results, resultsLength)

export const getPercentCorrectAnswers = result =>
  result * PERCENT_FOR_EVERY_CORRECT_ANSWERS

export const formatToLocaleDateString = date => date.toLocaleDateString()
