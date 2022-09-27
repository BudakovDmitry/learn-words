import Navigation from 'src/components/Navigation'
import { Link } from 'react-router-dom'

const Interactive = () => {
  return (
    <div>
      <Navigation>
        <Link to="/">Домашня</Link>
      </Navigation>
      <h2>Interactive</h2>
    </div>
  )
}

export default Interactive
