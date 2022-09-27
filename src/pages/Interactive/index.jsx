import Navigation from 'src/components/Navigation'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { TEXT_FOR_NO_WORDS } from 'src/constants'
import 'src/pages/Interactive/styles.css'
import WordCheck from 'src/components/WordCheck'

const Interactive = () => {
  const words = useSelector(state => state.words)

  return (
    <div>
      <Navigation>
        <Link to="/">Домашня</Link>
      </Navigation>
      {words.length ? (
        <WordCheck />
      ) : (
        <h2 className="list-header-no-words">{TEXT_FOR_NO_WORDS}</h2>
      )}
    </div>
  )
}

export default Interactive
