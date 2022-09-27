import Navigation from 'src/components/Navigation'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { TEXT_FOR_NO_WORDS, TEXT_FOR_NOT_ENOUGH_WORDS } from 'src/constants'
import 'src/pages/Interactive/styles.css'
import WordCheck from 'src/components/WordCheck'
import { minCountWords } from 'src/utils/helpers'

const Interactive = () => {
  const words = useSelector(state => state.words)

  return (
    <div>
      <Navigation>
        <Link to="/">Домашня</Link>
      </Navigation>
      {!words.length ? (
        <h2 className="list-header-no-words">{TEXT_FOR_NO_WORDS}</h2>
      ) : words.length < 10 ? (
        <h2 className="list-header-no-words">{`${TEXT_FOR_NOT_ENOUGH_WORDS}${minCountWords(
          words.length,
        )}`}</h2>
      ) : (
        <WordCheck />
      )}
    </div>
  )
}

export default Interactive
