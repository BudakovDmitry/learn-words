import { Link } from 'react-router-dom'
import 'src/components/Navigation/styles.css'

const Navigation = () => {
  return (
    <nav className="nav">
      <Link to="/new-words">Нові слова</Link>
      <Link to="/interactive">Інтерактив</Link>
    </nav>
  )
}

export default Navigation
