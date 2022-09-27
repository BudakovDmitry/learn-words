import WordTranslate from 'src/components/WordTranslate'
import 'src/components/WordsTranslate/styles.css'

const WordsTranslate = ({ words }) => {
  return (
    <div className="words-translate">
      {words.map((word, index) => (
        <WordTranslate key={index} word={word} />
      ))}
    </div>
  )
}

export default WordsTranslate
