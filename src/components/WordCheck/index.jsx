import 'src/components/WordCheck/styles.css'
import WordsTranslate from 'src/components/WordsTranslate'
import { useSelector } from 'react-redux'

const WordCheck = () => {
  const words = useSelector(state => state.words)

  return (
    <div className="word-check">
      <h4 className="word-check_header">Оберіть правильний переклад слова:</h4>
      <h3 className="word-check_english-word">{words[0].englishWord}</h3>
      <WordsTranslate words={words} />
    </div>
  )
}

export default WordCheck
