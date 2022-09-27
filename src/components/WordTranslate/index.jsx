import 'src/components/WordTranslate/styles.css'
import { useWordTranslate } from 'src/components/WordTranslate/useWordTranslate'

const WordTranslate = ({ word, activeTranslateWord, viewNewWord }) => {
  const { isRightSelected, rightSelect } = useWordTranslate()
  return (
    <button
      className={
        rightSelect === 'true'
          ? 'word-translate_button right'
          : rightSelect === 'false'
          ? 'word-translate_button wrong'
          : 'word-translate_button'
      }
      onClick={() => {
        isRightSelected(word, activeTranslateWord)
        setTimeout(() => {
          viewNewWord()
        }, 500)
      }}
    >
      {word}
    </button>
  )
}

export default WordTranslate
