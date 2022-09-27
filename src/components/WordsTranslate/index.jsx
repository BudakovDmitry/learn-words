import WordTranslate from 'src/components/WordTranslate'
import 'src/components/WordsTranslate/styles.css'

const WordsTranslate = ({ words }) => {
  return (
    <div className="words-translate">
      {words.map(word => (
        <WordTranslate key={word.id} word={word.translateWord} />
      ))}
    </div>
  )
}

export default WordsTranslate
