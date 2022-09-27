import 'src/components/WordCheck/styles.css'
import WordsTranslate from 'src/components/WordsTranslate'
import { getFourTranslateWords } from 'src/utils/helpers'
import { useWordCheck } from 'src/components/WordCheck/useWordCheck'

const WordCheck = () => {
  const { words, activeWordIndex, addWordIndex, wordNumber, count, setCount } =
    useWordCheck()

  return (
    <div className="word-check">
      <h4 className="word-check_header">Оберіть правильний переклад слова:</h4>
      <h3 className="word-check_english-word">
        {words[activeWordIndex].englishWord}
      </h3>
      <WordsTranslate
        words={getFourTranslateWords(
          words,
          words[activeWordIndex].translateWord,
        )}
        activeTranslateWord={words[activeWordIndex].translateWord}
        viewNewWord={addWordIndex}
        count={count}
        setCount={setCount}
      />
      <p className="word-check_word-number">{`Слово №${wordNumber}`}</p>
    </div>
  )
}

export default WordCheck
