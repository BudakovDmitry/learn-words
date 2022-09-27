import 'src/pages/Result/styles.css'
import Navigation from 'src/components/Navigation'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Result = () => {
  const currentResult = useSelector(state => state.currentResult)
  return (
    <div className="result">
      <Navigation>
        <Link to="/">Головна</Link>
        <Link to="/all-results">Усі результати</Link>
      </Navigation>
      <h2>{`Ваш результат: ${currentResult.result}%`}</h2>
    </div>
  )
}

export default Result
