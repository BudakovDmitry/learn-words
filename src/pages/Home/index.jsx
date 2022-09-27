import Navigation from 'src/components/Navigation'
import ListWords from 'src/components/ListWords'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Navigation>
        <Link to="/new-words">Нові слова</Link>
        <Link to="/interactive">Повторити слова</Link>
        <Link to="/all-results">Усі результати</Link>
      </Navigation>
      <ListWords />
    </div>
  )
}

export default Home
