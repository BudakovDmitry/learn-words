import 'src/pages/Result/styles.css'
import Navigation from 'src/components/Navigation'
import { Link } from 'react-router-dom'
import { useResult } from 'src/pages/Result/useResult'

const Result = () => {
  const { currentResult } = useResult()
  return (
    <div className="result">
      <Navigation>
        <Link to="/">Головна</Link>
        <Link to="/all-results">Усі результати</Link>
      </Navigation>
      <h2>{`Ваш результат: ${currentResult.percent}%`}</h2>
    </div>
  )
}

export default Result
