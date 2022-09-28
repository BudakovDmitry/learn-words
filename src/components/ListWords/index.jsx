import 'src/components/ListWords/styles.css'
import Word from 'src/components/Word'
import { TEXT_FOR_NO_WORDS_MAIN } from 'src/constants'
import { useListWords } from 'src/components/ListWords/useListWords'

const ListWords = () => {
  const { words } = useListWords()

  if (!words.length)
    return <h2 className="list-header-no-words">{TEXT_FOR_NO_WORDS_MAIN}</h2>

  return (
    <>
      <h2 className="list-header">Мої слова</h2>
      <ul className="list">
        {words.map(word => (
          <Word key={word.id} word={word.englishWord} />
        ))}
      </ul>
    </>
  )
}

export default ListWords
