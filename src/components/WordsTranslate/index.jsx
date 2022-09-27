import WordTranslate from 'src/components/WordTranslate'
import 'src/components/WordsTranslate/styles.css'

const WordsTranslate = ({
  words,
  activeTranslateWord,
  viewNewWord,
  count,
  setCount,
}) => {
  return (
    <div className="words-translate">
      {words.map((word, index) => (
        <WordTranslate
          key={index}
          word={word}
          activeTranslateWord={activeTranslateWord}
          viewNewWord={viewNewWord}
          count={count}
          setCount={setCount}
        />
      ))}
    </div>
  )
}

export default WordsTranslate
