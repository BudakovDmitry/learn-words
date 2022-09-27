import Navigation from 'src/components/Navigation'
import { Link } from 'react-router-dom'

const AllResults = () => {
  return (
    <div className="all-results">
      <Navigation>
        <Link to="/">Головна</Link>
      </Navigation>
    </div>
  )
}

export default AllResults
