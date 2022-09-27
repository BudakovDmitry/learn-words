import WordTranslate from 'src/components/WordTranslate'
import 'src/components/WordsTranslate/styles.css'

const WordsTranslate = ({ words, activeTranslateWord, viewNewWord }) => {
  return (
    <div className="words-translate">
      {words.map((word, index) => (
        <WordTranslate
          key={index}
          word={word}
          activeTranslateWord={activeTranslateWord}
          viewNewWord={viewNewWord}
        />
      ))}
    </div>
  )
}

export default WordsTranslate
