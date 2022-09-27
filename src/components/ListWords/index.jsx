import 'src/components/ListWords/styles.css'
import { useSelector } from 'react-redux'
import Word from 'src/components/Word'
import { TEXT_FOR_NO_WORDS } from 'src/constants'

const ListWords = () => {
  const words = useSelector(state => state.words)

  if (!words.length)
    return <h2 className="list-header-no-words">{TEXT_FOR_NO_WORDS}</h2>

  return (
    <ul className="list">
      {words.map(word => (
        <Word key={word.id} word={word.englishWord} />
      ))}
    </ul>
  )
}

export default ListWords
