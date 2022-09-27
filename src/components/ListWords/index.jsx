import 'src/components/ListWords/styles.css'
import { useSelector } from 'react-redux'
import Word from 'src/components/Word'

const ListWords = () => {
  const words = useSelector(state => state.words)

  return (
    <ul className="list">
      {words.map(word => (
        <Word key={word.id} word={word.englishWord} />
      ))}
    </ul>
  )
}

export default ListWords
