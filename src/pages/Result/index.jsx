import 'src/pages/Result/styles.css'
import Navigation from 'src/components/Navigation'
import { Link } from 'react-router-dom'

const Result = () => {
  return (
    <div className="result">
      <Navigation>
        <Link to="/">Домашня</Link>
      </Navigation>
      <h2>Ваш результат: 100%</h2>
    </div>
  )
}

export default Result
